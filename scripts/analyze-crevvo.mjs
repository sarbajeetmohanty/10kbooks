import fs from "node:fs";

const html = fs.readFileSync("C:/Users/sarba_lcvi2cc/.gemini/antigravity-ide/brain/8d80f708-fa7d-4aba-8f99-137cc456875a/.system_generated/steps/177/content.md", "utf-8");

function clean(str) {
  return str.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
}

console.log("=== FAQS EXTRACT ===");
const faqHeaders = [...html.matchAll(/class="[^"]*elementor-tab-title[^"]*"[^>]*>[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/gi)].map(m => clean(m[1]));
const faqBodies = [...html.matchAll(/class="[^"]*elementor-tab-content[^"]*"[^>]*>([\s\S]*?)<\/div>/gi)].map(m => clean(m[1]));

console.log(`Found ${faqHeaders.length} headers and ${faqBodies.length} bodies`);
faqHeaders.forEach((h, i) => {
  console.log(`Q${i+1}: ${h}`);
  console.log(`A${i+1}: ${faqBodies[i] || ""}\n`);
});

console.log("=== STYLES / COLORS / FONTS ===");
const inlineStyles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]);
console.log(`Found ${inlineStyles.length} style tags.`);

// Check for colors
const colors = [...html.matchAll(/(#[0-9a-fA-F]{3,8}|rgba?\([^)]+\)|hsla?\([^)]+\))/gi)].map(m => m[1]);
const uniqueColors = [...new Set(colors)];
console.log("Unique Colors detected:", uniqueColors.slice(0, 25));

console.log("=== SCRIPTS / ANALYTICS / TRACKING ===");
const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]);
console.log(`Found ${scripts.length} script tags.`);
scripts.forEach((s, i) => {
  if (s.includes("cartflows") || s.includes("pixel") || s.includes("gtag") || s.includes("fbq") || s.includes("checkout")) {
    console.log(`--- Script ${i+1} ---`);
    console.log(s.substring(0, 300) + "...\n");
  }
});
