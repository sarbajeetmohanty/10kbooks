import fs from "node:fs";

async function analyzeCheckout() {
  try {
    const res = await fetch("https://crevvo.com/step/secure-checkout-2/");
    const html = await res.text();
    console.log("\n=== 5. CHECKOUT STEP DEEP ANALYSIS (secure-checkout-2) ===");
    const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
    console.log("Checkout Title:", titleMatch ? titleMatch[1] : "N/A");

    // Check payment gateways
    const gateways = [...html.matchAll(/class="[^"]*payment_method_([^"]*)[^"]*"/gi)].map(m => m[1]);
    console.log("Payment Gateways:", [...new Set(gateways)]);

    // Check products & prices
    const products = [...html.matchAll(/class="product-name"[^>]*>([\s\S]*?)<\/td>/gi)].map(m => m[1].replace(/<[^>]+>/g, "").trim());
    console.log("Products in checkout:", products);

    // Order bumps
    const orderBumps = [...html.matchAll(/class="wcf-bump-order-field-wrap"[\s\S]*?<label[^>]*>([\s\S]*?)<\/label>/gi)].map(m => m[1].replace(/<[^>]+>/g, " ").trim());
    console.log("Order Bump Offers:", orderBumps);

    // Payment processor scripts (Cashfree, Razorpay, PhonePe, etc.)
    const scripts = [...html.matchAll(/<script[^>]*src="([^"]+)"/gi)].map(m => m[1]);
    const payScripts = scripts.filter(s => s.includes("razorpay") || s.includes("cashfree") || s.includes("phonepe") || s.includes("paytm") || s.includes("stripe"));
    console.log("Payment Gateway Scripts:", payScripts);
  } catch (e) {
    console.error("Error fetching checkout:", e.message);
  }
}

analyzeCheckout();
