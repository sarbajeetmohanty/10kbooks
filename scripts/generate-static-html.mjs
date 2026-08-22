import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const serverPath = path.resolve(rootDir, ".output/server/index.mjs");
const publicDir = path.resolve(rootDir, ".output/public");

const routesToPrerender = [
  { urlPath: "/", filePath: "index.html" },
  { urlPath: "/privacy-policy", filePath: "privacy-policy/index.html" },
  { urlPath: "/privacy-policy", filePath: "privacy-policy.html" },
  { urlPath: "/refund-policy", filePath: "refund-policy/index.html" },
  { urlPath: "/refund-policy", filePath: "refund-policy.html" },
  { urlPath: "/terms-and-conditions", filePath: "terms-and-conditions/index.html" },
  { urlPath: "/terms-and-conditions", filePath: "terms-and-conditions.html" },
  { urlPath: "/contact", filePath: "contact/index.html" },
  { urlPath: "/contact", filePath: "contact.html" },
];

async function generateStaticHtml() {
  console.log("Generating static HTML files for Hostinger public_html deployment...");

  try {
    const serverModule = await import(`file://${serverPath.replace(/\\/g, "/")}`);
    const handler = serverModule.default;

    if (!handler || typeof handler.fetch !== "function") {
      throw new Error("Server export does not contain a fetch handler.");
    }

    const env = {};
    const ctx = {
      waitUntil: () => {},
      passThroughOnException: () => {},
    };

    for (const route of routesToPrerender) {
      try {
        const request = new Request(`http://localhost${route.urlPath}`);
        const response = await handler.fetch(request, env, ctx);

        if (!response.ok && response.status !== 200) {
          console.warn(`Warning: Route ${route.urlPath} returned status ${response.status}`);
          continue;
        }

        const html = await response.text();
        const fullDest = path.resolve(publicDir, route.filePath);
        await fs.mkdir(path.dirname(fullDest), { recursive: true });
        await fs.writeFile(fullDest, html, "utf-8");
        console.log(`✓ Prerendered ${route.urlPath} -> ${route.filePath}`);
      } catch (err) {
        console.error(`Error rendering route ${route.urlPath}:`, err.message);
      }
    }

    // Copy optimized .htaccess from public directory
    const sourceHtaccess = path.resolve(rootDir, "public/.htaccess");
    try {
      const htaccess = await fs.readFile(sourceHtaccess, "utf-8");
      await fs.writeFile(path.resolve(publicDir, ".htaccess"), htaccess, "utf-8");
    } catch {
      const htaccess = `<IfModule mod_rewrite.c>\n  RewriteEngine On\n  RewriteBase /\n  RewriteRule ^index\\.html$ - [L]\n  RewriteCond %{REQUEST_FILENAME} !-f\n  RewriteCond %{REQUEST_FILENAME} !-d\n  RewriteRule . /index.html [L,QSA]\n</IfModule>\n`;
      await fs.writeFile(path.resolve(publicDir, ".htaccess"), htaccess, "utf-8");
    }

    console.log("Successfully generated all static HTML pages and .output/public/.htaccess!");
  } catch (err) {
    console.error("Static generation error:", err);
  }
}

generateStaticHtml();
