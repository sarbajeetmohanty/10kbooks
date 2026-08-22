import { useState } from "react";

type AgeGroup = {
  id: string;
  label: string;
  emoji: string;
  age: string;
  subtitle: string;
  highlights: string[];
  recommendedCount: string;
};

const ageGroups: AgeGroup[] = [
  {
    id: "all",
    label: "All Ages (2 to 7 Years)",
    emoji: "🌟",
    age: "Complete 14,000+ Bundle",
    subtitle: "Complete early learning journey from playgroup to Class 1",
    highlights: [
      "Alphabet & Number Tracing",
      "Handwriting Practice & Hindi Master",
      "3000+ Coloring & Drawing Worksheets",
      "All 4 Free Bonuses Included",
    ],
    recommendedCount: "14,000+ Worksheets",
  },
  {
    id: "2-3",
    label: "Ages 2–3 (Toddler / Playgroup)",
    emoji: "🧒",
    age: "Toddler & Playgroup",
    subtitle: "Develops sensory motor control, visual recognition & finger grip",
    highlights: [
      "Jumbo Finger Tracing & Coloring",
      "Match the Baby Animals & Shapes",
      "Big Fruit & Object Identification",
      "Montessori Early Stimulation Guide (Bonus)",
    ],
    recommendedCount: "3,200+ Worksheets",
  },
  {
    id: "3-5",
    label: "Ages 3–5 (Nursery & LKG)",
    emoji: "👦",
    age: "Nursery & LKG",
    subtitle: "Builds early phonics, number counting, scissor skills & vocabulary",
    highlights: [
      "A-Z English Alphabet & Phonics",
      "Count & Circle Numbers (1-50)",
      "Fun Maze Games & Pattern Matching",
      "Cut & Glue Fine-Motor Activities",
    ],
    recommendedCount: "5,800+ Worksheets",
  },
  {
    id: "5-7",
    label: "Ages 5–7 (UKG & Class 1)",
    emoji: "👧",
    age: "UKG & Class 1",
    subtitle: "Prepares for school excellence with fluent reading, writing & math",
    highlights: [
      "Cursive & Print Handwriting Master",
      "Sight Words & Sentence Reading",
      "350+ Page Hindi Varnamala & Words",
      "Word Search, Math Logic & Bedtime Stories",
    ],
    recommendedCount: "5,000+ Worksheets",
  },
];

export function AgeFilterChips() {
  const [selected, setSelected] = useState<string>("all");

  const current = ageGroups.find((g) => g.id === selected) || ageGroups[0]!;

  return (
    <div className="mx-auto mt-10 w-full max-w-4xl rounded-3xl border-2 border-accent/40 bg-card p-4 sm:p-6 shadow-xl">
      {/* Title */}
      <div className="text-center">
        <span className="inline-block rounded-full bg-accent/20 px-3 py-0.5 text-xs font-black uppercase text-accent">
          Select Your Child’s Age
        </span>
        <h3 className="mt-1 text-lg font-black text-foreground sm:text-2xl">
          See What Your Child Will Learn &amp; Master 🎯
        </h3>
        <p className="text-xs text-muted-foreground sm:text-sm">
          Click your child's age group below to preview customized worksheets:
        </p>
      </div>

      {/* Age Group Interactive Chips */}
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
        {ageGroups.map((g) => {
          const isActive = g.id === selected;
          return (
            <button
              key={g.id}
              type="button"
              onClick={() => setSelected(g.id)}
              className={`flex flex-col items-center justify-center rounded-2xl p-2.5 text-center transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-accent text-accent-foreground shadow-lg scale-[1.03] ring-2 ring-accent"
                  : "bg-background/70 text-foreground border border-border/60 hover:bg-background/90 hover:border-accent/50"
              }`}
            >
              <span className="text-xl sm:text-2xl">{g.emoji}</span>
              <span className="mt-1 text-xs font-black sm:text-sm leading-tight">
                {g.label.split("(")[0]?.trim()}
              </span>
              <span
                className={`text-[10px] font-semibold sm:text-[11px] ${
                  isActive ? "text-accent-foreground/80" : "text-muted-foreground"
                }`}
              >
                {g.label.includes("(") ? `(${g.label.split("(")[1]}` : ""}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Age Group Breakdown Card */}
      <div className="mt-5 rounded-2xl border border-accent/30 bg-background/80 p-4 sm:p-5 text-left transition-all animate-fade-in">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border/50 pb-3">
          <div>
            <h4 className="text-sm font-black text-accent sm:text-lg">
              {current.emoji} {current.age} — Learning Track
            </h4>
            <p className="text-xs text-muted-foreground sm:text-sm">
              {current.subtitle}
            </p>
          </div>
          <span className="rounded-full bg-cta/20 px-3 py-1 text-xs font-extrabold text-cta">
            {current.recommendedCount}
          </span>
        </div>

        {/* Highlights */}
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {current.highlights.map((h) => (
            <div key={h} className="flex items-center gap-2 text-xs font-bold sm:text-sm text-foreground">
              <span className="text-accent font-black">✔</span>
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Action button */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2">
          <p className="text-[11px] font-semibold text-muted-foreground">
            All age levels included in a single ₹199 lifetime unlock.
          </p>
          <a
            href="#inside-bundle"
            className="inline-flex items-center gap-1.5 text-xs font-black text-accent underline hover:opacity-80"
          >
            <span>Explore Worksheet Carousels Below</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </div>
  );
}
