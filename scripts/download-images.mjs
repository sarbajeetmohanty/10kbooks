import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicImagesDir = path.resolve(rootDir, "public/images");

const imageUrls = [
  "https://crevvo.com/wp-content/uploads/2024/02/14000-Kids-Worksheets.webp",
  "https://crevvo.com/wp-content/uploads/2024/02/Child.webp",
  "https://crevvo.com/wp-content/uploads/2024/02/Printer.webp",
  "https://crevvo.com/wp-content/uploads/2024/02/A.webp",
  "https://crevvo.com/wp-content/uploads/2024/02/B.webp",
  "https://crevvo.com/wp-content/uploads/2024/02/Satisfaction-Guarantee.webp",
  // Categories (2024/07)
  "https://crevvo.com/wp-content/uploads/2024/07/1.png.webp",
  "https://crevvo.com/wp-content/uploads/2024/07/2.png.webp",
  "https://crevvo.com/wp-content/uploads/2024/07/3.png.webp",
  "https://crevvo.com/wp-content/uploads/2024/07/4.png.webp",
  "https://crevvo.com/wp-content/uploads/2024/07/5.png.webp",
  "https://crevvo.com/wp-content/uploads/2024/07/6.png.webp",
  "https://crevvo.com/wp-content/uploads/2024/07/7.png.webp",
  "https://crevvo.com/wp-content/uploads/2024/07/8.png.webp",
  "https://crevvo.com/wp-content/uploads/2024/07/9.png",
  "https://crevvo.com/wp-content/uploads/2024/07/10.png",
  "https://crevvo.com/wp-content/uploads/2024/07/11.png",
  "https://crevvo.com/wp-content/uploads/2024/07/12.png",
  "https://crevvo.com/wp-content/uploads/2024/07/13.png",
  "https://crevvo.com/wp-content/uploads/2024/07/14.png",
  "https://crevvo.com/wp-content/uploads/2024/07/15.png",
  "https://crevvo.com/wp-content/uploads/2024/07/16.png",
  "https://crevvo.com/wp-content/uploads/2024/07/17.png",
  "https://crevvo.com/wp-content/uploads/2024/07/18.png",
  "https://crevvo.com/wp-content/uploads/2024/07/19.png",
  "https://crevvo.com/wp-content/uploads/2024/07/20.png",
  "https://crevvo.com/wp-content/uploads/2024/07/21.png",
  "https://crevvo.com/wp-content/uploads/2024/07/22.png",
  "https://crevvo.com/wp-content/uploads/2024/07/23.png",
  "https://crevvo.com/wp-content/uploads/2024/07/24.png",
  // WhatsApp (2025/11)
  "https://crevvo.com/wp-content/uploads/2025/11/1.webp",
  "https://crevvo.com/wp-content/uploads/2025/11/2.webp",
  "https://crevvo.com/wp-content/uploads/2025/11/3.webp",
  "https://crevvo.com/wp-content/uploads/2025/11/4.webp",
  "https://crevvo.com/wp-content/uploads/2025/11/6.webp",
  // Samples (2024/02)
  "https://crevvo.com/wp-content/uploads/2024/02/1-2.png",
  "https://crevvo.com/wp-content/uploads/2024/02/2-2.png",
  "https://crevvo.com/wp-content/uploads/2024/02/3-2.png",
  "https://crevvo.com/wp-content/uploads/2024/02/4-2.png",
  "https://crevvo.com/wp-content/uploads/2024/02/5-2.png",
  "https://crevvo.com/wp-content/uploads/2024/02/6-4.webp",
  "https://crevvo.com/wp-content/uploads/2024/02/7-6.webp",
  "https://crevvo.com/wp-content/uploads/2024/02/8-6.webp",
  "https://crevvo.com/wp-content/uploads/2024/02/9-4.webp",
  "https://crevvo.com/wp-content/uploads/2024/02/10-1.png",
  "https://crevvo.com/wp-content/uploads/2024/02/11-2.webp",
  // Vimeo video posters from vumbnail
  "https://vumbnail.com/944582073.jpg",
  "https://vumbnail.com/944584990.jpg",
  "https://vumbnail.com/1108813783.jpg"
];

async function downloadImages() {
  await fs.mkdir(publicImagesDir, { recursive: true });
  console.log(`Downloading ${imageUrls.length} assets locally...`);

  for (const url of imageUrls) {
    try {
      let filename = "";
      if (url.includes("vumbnail.com")) {
        filename = `vimeo-${path.basename(url)}`;
      } else {
        const u = new URL(url);
        // Replace / with - to create unique local name, e.g. 2024-07-1.png.webp
        const relPath = u.pathname.replace(/^\/wp-content\/uploads\//, "").replace(/\//g, "_");
        filename = relPath;
      }

      const dest = path.resolve(publicImagesDir, filename);
      // check if exists
      try {
        await fs.access(dest);
        console.log(`✓ Already exists: ${filename}`);
        continue;
      } catch {}

      const res = await fetch(url);
      if (!res.ok) {
        console.error(`✗ Failed ${url}: ${res.status}`);
        continue;
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      await fs.writeFile(dest, buffer);
      console.log(`✓ Downloaded: ${filename} (${buffer.length} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${url}:`, err.message);
    }
  }
  console.log("Finished downloading assets!");
}

downloadImages();
