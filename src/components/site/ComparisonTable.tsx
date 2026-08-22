export function ComparisonTable() {
  const rows = [
    {
      feature: "Total Content / Worksheets",
      tuition: "10-15 pages per month",
      books: "150-200 pages total",
      bundle: "14,000+ Printable PDF Pages",
      isHighlight: true,
    },
    {
      feature: "Total Investment Cost",
      tuition: "₹2,500 to ₹4,000 / Month",
      books: "₹1,500 to ₹2,500",
      bundle: "₹199 One-Time (Lifetime)",
      isHighlight: true,
    },
    {
      feature: "Cost Per Activity Sheet",
      tuition: "₹150 to ₹250 per class",
      books: "₹8 to ₹12 per page",
      bundle: "Less than ₹0.01 per sheet",
      isHighlight: true,
    },
    {
      feature: "Age Coverage",
      tuition: "Single specific grade only",
      books: "Single grade level",
      bundle: "Complete 2 to 7 Years (Playgroup to Class 1)",
      isHighlight: false,
    },
    {
      feature: "Reusability & Printing",
      tuition: "Cannot re-practice",
      books: "Once written, ruined",
      bundle: "Print Unlimited Times for all kids at home",
      isHighlight: false,
    },
    {
      feature: "Free Bonus Guides",
      tuition: "None",
      books: "None",
      bundle: "All 4 Free Bonuses (Montessori + Stories)",
      isHighlight: false,
    },
    {
      feature: "Access Delivery Time",
      tuition: "Monthly schedule",
      books: "3-5 days courier",
      bundle: "Instant Access in 60 Seconds",
      isHighlight: false,
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <div className="text-center">
        <span className="inline-block rounded-full bg-accent/20 px-3.5 py-1 text-xs font-black uppercase text-accent">
          Unbeatable Value Comparison
        </span>
        <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
          See How Much You Save For Your Child’s Learning 💡
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-xs text-muted-foreground sm:text-sm">
          Why pay recurring monthly fees when you can get 14,000+ printable activities for less than the price of a single pizza?
        </p>
      </div>

      {/* Comparison Table Box */}
      <div className="mt-8 overflow-x-auto rounded-3xl border-2 border-accent/40 bg-card p-3 shadow-2xl sm:p-5">
        <table className="w-full min-w-[620px] text-left text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-border/80 text-muted-foreground">
              <th className="pb-3 pl-3 font-extrabold uppercase sm:text-xs">Feature</th>
              <th className="pb-3 text-center font-bold">Tuitions &amp; Classes</th>
              <th className="pb-3 text-center font-bold">Bookstore Books</th>
              <th className="rounded-t-2xl bg-accent px-4 pb-3 pt-3 text-center text-xs font-black uppercase text-accent-foreground sm:text-sm shadow-md">
                ⭐ 14,000+ Bundle
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40">
            {rows.map((r, i) => (
              <tr key={r.feature} className={i % 2 === 0 ? "bg-background/40" : ""}>
                <td className="py-3 pl-3 font-bold text-foreground">
                  {r.feature}
                </td>
                <td className="py-3 text-center text-muted-foreground">
                  {r.tuition}
                </td>
                <td className="py-3 text-center text-muted-foreground">
                  {r.books}
                </td>
                <td className="bg-accent/15 px-4 py-3 text-center font-black text-accent sm:text-base">
                  {r.bundle}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 100% Risk-Free Guarantee & Instant Access Verification Stamp */}
      <div className="mx-auto mt-8 max-w-3xl rounded-2xl border-2 border-dashed border-accent bg-accent/10 p-4 sm:p-6 text-center shadow-lg">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-2xl text-accent-foreground font-black shadow-md">
            🛡️
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-base font-black uppercase tracking-tight text-foreground sm:text-lg">
              100% Risk-Free Instant Access Guarantee
            </h4>
            <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm leading-relaxed">
              Instant Google Drive Access delivered to your WhatsApp &amp; Email within <strong>60 seconds</strong> of purchase or 100% money back! Lifetime validity with unlimited downloads.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
