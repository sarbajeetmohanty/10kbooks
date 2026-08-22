# Hostinger Deployment Guide for Simpexmedia Kids

This repository contains the complete, high-performance landing page for **Simpexmedia Kids (14,000+ Worksheets Bundle)** built with TanStack Start, React 19, Vite, and Tailwind CSS.

---

## Method 1: Hostinger Git Auto-Deployment (Recommended)

1. Log in to your **Hostinger hPanel**.
2. Go to **Websites** &rarr; **Manage** &rarr; **Git** (under *Advanced*).
3. Connect repository:
   - **Repository URL**: `https://github.com/sarbajeetmohanty/10kbooks.git`
   - **Branch**: `main`
   - **Install Directory**: Leave empty or set to root `/`
4. In Hostinger **Node.js / Terminal / SSH**:
   ```bash
   npm install
   npm run build
   ```
5. Copy the static build files from `.output/public` to `public_html`:
   ```bash
   cp -r .output/public/* public_html/
   cp .output/public/.htaccess public_html/.htaccess
   ```

---

## Method 2: Manual Upload to `public_html`

1. Run `npm run build` locally.
2. Open the `.output/public/` folder.
3. Upload all files and folders inside `.output/public/` (including `.htaccess`, `assets/`, `images/`, `index.html`, `privacy-policy/`, `refund-policy/`, `terms-and-conditions/`, `contact/`) directly into your Hostinger **`public_html/`** directory via Hostinger File Manager or FTP.

---

## Features Included in This Build
- ⚡ 100% Static HTML prerendered for zero-delay instant page loads on Hostinger.
- 📱 Mobile Back-Button ₹149 Discount & WhatsApp modal trap.
- 💳 Authentic official vector SVG payment badges (GPay, PhonePe, Paytm, BHIM UPI, RuPay).
- 🧒 Interactive Age Filter Chips (Ages 2–3, Ages 3–5, Ages 5–7, All Ages).
- 🕒 Synchronized countdown timers across sticky bar and choice sections.
- 🇮🇳 260+ Authentic Indian buyer social proof notifications.
- 🛡️ Apache `.htaccess` with gzip compression, browser caching, and clean URL routing.
