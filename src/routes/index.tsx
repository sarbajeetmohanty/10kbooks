import { createFileRoute, Link } from "@tanstack/react-router";
import { Carousel } from "@/components/site/Carousel";
import { CtaButton } from "@/components/site/CtaButton";
import { Countdown } from "@/components/site/Countdown";
import { Accordion, type FaqItem } from "@/components/site/Accordion";
import { ProgressBars } from "@/components/site/ProgressBars";
import { ReviewsSlider, type Review } from "@/components/site/ReviewsSlider";
import { VimeoLite } from "@/components/site/VimeoLite";
import { StickyTimerBar } from "@/components/site/StickyTimerBar";
import { PurchasePopup } from "@/components/site/PurchasePopup";
import { ExitIntentModal } from "@/components/site/ExitIntentModal";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { SalesCloserChat } from "@/components/site/SalesCloserChat";

const TITLE = "14,000+ Printable Worksheets for Kids | Simpexmedia Kids";
const DESC =
  "Turn screen time into fun learning time with 14,000+ printable worksheets for kids aged 2 to 7. Instant lifetime access at ₹199 only.";
const OG_IMAGE = "/images/2024_02_14000-Kids-Worksheets.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "preconnect", href: "https://player.vimeo.com" },
      { rel: "preconnect", href: "https://f.vimeocdn.com" },
      { rel: "dns-prefetch", href: "https://player.vimeo.com" },
      { rel: "dns-prefetch", href: "https://f.vimeocdn.com" },
      { rel: "preload", as: "image", href: OG_IMAGE, fetchPriority: "high" },
    ],
  }),
  component: Index,
});

const U = "https://crevvo.com/wp-content/uploads";
const CHECKOUT_URL = "https://simpexmedia.co";
const SUPPORT_EMAIL = "support@simpexmedia.com";
const SAMPLES_DRIVE_URL =
  "https://drive.google.com/drive/folders/1ZkMATK17ijrym0PuFwk6t1qWvcaJPAY3?usp=sharing";

const heroBullets = [
  "14,000 Printable Worksheet PDF – A Smarter, Fun Way to Help Your Kids Learn!",
  "Screen-Free Activities to Help Your Child Build Essential Skills While Having Fun!",
  "Over 2.5 Years of Research to Bring You Engaging, High-Quality Learning Worksheets!",
  "Engaging Handwriting Practice Sheets for Clear & Confident Writing!",
  "40+ Essential Skills & Easy Progress Tracking – Limited Time Offer at the Best Price!",
  "Instant & Lifetime Access to Print Anytime Anywhere",
];

const giveYourChild = [
  {
    title: "Transform Screen Time into Learning Time:",
    body: "Say goodbye to passive entertainment; our worksheets turn screen time into an enriching learning experience for your child.",
  },
  {
    title: "Preparation for School Success:",
    body: "Ensure your child enters formal education confidently, equipped with a solid understanding of fundamental concepts and a positive attitude towards learning.",
  },
  {
    title: "Master fundamental skills for lifelong learning:",
    body: "Equip your child with essential skills like alphabet recognition, counting, and shapes, laying a robust educational foundation for future success.",
  },
  {
    title: "Independent Learning:",
    body: "Activity worksheets encourage independent learning as children can work on them individually. They promote self-reliance, critical thinking, and decision-making skills, as kids need to figure out the solutions independently.",
  },
];

const addiction = [
  ["Mental health:", "Depression, anxiety, OCD, attention deficit disorder (ADD), and other psychological disorders"],
  ["Academic performance:", "Poor grades and lower self-esteem."],
  ["Sleep:", "Reduced sleep quality and sleep disturbances."],
  ["Social skills:", "Impaired social skills and slower social development."],
  ["Behavioral problems:", "Compulsive behaviors, hyperactivity, conduct problems, and emotional symptoms."],
  ["Physical health:", "Eye strain, headaches, neck pain, back pain, and obesity."],
];

const insideBundle: Array<{ label: string; images: string[] }> = [
  {
    label: "Alphabet Adventure",
    images: ["/images/2024_07_3.png.webp", "/images/2024_07_2.png.webp", "/images/2024_07_1.png.webp"],
  },
  {
    label: "Match the Babies",
    images: ["/images/2024_07_4.png.webp", "/images/2024_07_5.png.webp", "/images/2024_07_6.png.webp"],
  },
  {
    label: "Count and Write",
    images: ["/images/2024_07_7.png.webp", "/images/2024_07_8.png.webp", "/images/2024_07_9.png"],
  },
  {
    label: "Maze Game",
    images: ["/images/2024_07_13.png", "/images/2024_07_14.png", "/images/2024_07_15.png"],
  },
  {
    label: "Learn Number",
    images: ["/images/2024_07_16.png", "/images/2024_07_17.png", "/images/2024_07_18.png"],
  },
  {
    label: "Sight Word",
    images: ["/images/2024_07_19.png", "/images/2024_07_20.png", "/images/2024_07_21.png"],
  },
  {
    label: "Count & Circle",
    images: ["/images/2024_07_10.png", "/images/2024_07_11.png", "/images/2024_07_12.png"],
  },
  {
    label: "Read & Learn Words",
    images: ["/images/2024_07_22.png", "/images/2024_07_23.png", "/images/2024_07_24.png"],
  },
];

const vimeoIds = ["944582073", "944584990", "1108813783"];

const whatsappImages = [1, 2, 3, 4, 6].map((n) => `/images/2025_11_${n}.webp`);

const unlockList = [
  "40+ Essential Skills with precise tracking at best price for a limited Time only.",
  "Handwriting Practice Sheets",
  "3000+ Colouring and Drawing Worksheet",
  "1300+ Pages Worksheet for English Alphabet & Numbers",
  "350+ Page Hindi Master Worksheet",
  "300+ Number and Counting Worksheet",
  "1000+ Cut and Glue Worksheet",
  "300+ Word Search Worksheet",
  "Amazing FREE BONUS",
  "How To Raise An Amazing Child – The Montessori Way",
  "Bed Time Stories (Hindi+ English)",
  "100+ eBooks For Parenting & Kids Nutrition",
  "Receive regular updates to your worksheets via email",
];

const sampleImages = [
  "/images/2024_02_1-2.png",
  "/images/2024_02_2-2.png",
  "/images/2024_02_3-2.png",
  "/images/2024_02_4-2.png",
  "/images/2024_02_5-2.png",
  "/images/2024_02_6-4.webp",
  "/images/2024_02_7-6.webp",
  "/images/2024_02_8-6.webp",
  "/images/2024_02_9-4.webp",
  "/images/2024_02_10-1.png",
  "/images/2024_02_11-2.webp",
];

const reviews: Review[] = [
  {
    name: "Priya M., Bangalore",
    role: "Mom of Twin 5-Year-Olds",
    text: "Earlier, keeping my twins busy without a phone was impossible. Now they actually fight over who gets to do the coloring pages first! The variety keeps them excited — tracing, puzzles, stories — they love it all. Honestly, this bundle has been the easiest parenting win for me this year. Totally worth it!",
  },
  {
    name: "Shalini V., Pune",
    role: "Preschool Teacher (8+ Years Experience)",
    text: "I’m a preschool teacher, and these worksheets have saved me hours of prep time. The flashcards, tracing sheets, and cut-and-glue activities are my students’ absolute favourites! I love that I can print them again and again — it’s affordable, practical, and keeps my classroom buzzing with excitement every day.",
  },
  {
    name: "Rohit S., Delhi",
    role: "Dad of a 5-Year-Old",
    text: "At first, I bought it just for my daughter’s handwriting practice, but we ended up using everything — bedtime stories, puzzles, even the early science sheets. It’s like having a whole library of fun learning at home. Simpexmedia Kids really nailed it for parents who want smart, screen-free activities for their kids.",
  },
  {
    name: "Nikita K., Mumbai",
    role: "Mom of a 3-Year-Old & 6-Year-Old",
    text: "It’s rare to find something that works for both my 3-year-old and my 6-year-old. This bundle has age-wise activities that keep both of them happy — one does tracing while the other solves puzzles. I no longer have to hunt online for new ideas every day. Everything we need is right here!",
  },
  {
    name: "Anita R., Hyderabad",
    role: "Frequent Traveller & Mom of a 4-Year-Old",
    text: "We travel a lot, so carrying books isn’t practical. With this, I just print a small folder before every trip — my son colors, solves puzzles, and stays entertained the whole way. He actually looks forward to plane rides now! I can’t recommend Simpexmedia Kids enough for traveling parents.",
  },
  {
    name: "Kavita L., Chennai",
    role: "Mom of a 5-Year-Old",
    text: "Pehele mera beta padhai ke naam se bhaagta tha, par Simpexmedia Kids ki worksheets ne sab badal diya. Ab wo khud bolta hai — “Mumma, aaj kaun si activity karenge?” Worksheets colourful hain, engaging hain, aur usse lagta hi nahi ke wo actually seekh raha hai. Learning ab fun ban gayi hai!",
  },
];

const steps = [
  {
    tag: "Print",
    text: "Select & Print from 14,000+ worksheets amongst different topics or themes, based on your kid's choice.",
  },
  { tag: "Track", text: "Keep a track of child’s daily progress through progress sheet tracker." },
  { tag: "Award", text: "Award them once they complete a particular skill." },
];

const whyUs = [
  {
    icon: "↓",
    title: "Instant Download",
    text: "You can instantly download the Premium E-book Bundle once you complete the purchase. You also get Lifetime Access !",
  },
  {
    icon: "★",
    title: "Premium Quality",
    text: "Scientifically designed, high-resolution printable worksheets crafted by childhood education experts for maximum engagement and skill retention.",
  },
  {
    icon: "✆",
    title: "Live Support 24/7",
    text: "If you encounter any issues throughout the process, feel free to reach out at any time. Our support is available 24/7 for you.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Printable Worksheets are suitable for which Age group?",
    a: [
      "These worksheets are scientifically-designed to cater the overall skill development of kids for the age group 2.5 – 8 years. These worksheets help to develop more than 300 skills in kids.",
    ],
  },
  {
    q: "What is an E-book Bundle?",
    a: [
      "E-Book Bundle is an activity based printable worksheet where kids can practice. Kids can develop and retain skills 47 times more. Find out which activities are perfect for the children you teach and save time planning fun and engaging lessons.",
    ],
  },
  {
    q: "Why one should purchase E-Book Bundle?",
    a: [
      "➥ Help boost academic proficiency in all subjects across all grade levels",
      "➥ Designed to make the entire learning experience more enjoyable for young minds.",
      "➥ Discover your child’s hidden talent, spot weaknesses, and track progress with our worksheets.",
    ],
  },
  {
    q: "How a Child will be benefited from this worksheet?",
    a: [
      "After practicing these worksheets, the child will have",
      "➥ Fluent and flexible thinking,",
      "➥ Excellent reasoning skills, and",
      "➥ Excellent problem solving skills.",
      "➥ Targeted Skill Development.",
      "➥ Urge Independent Learning.",
      "➥ Building Strong Confidence.",
      "➥ Boost Cognitive Skills.",
      "➥ Foster Creativity and Imagination.",
      "➥ Smart Learning, Smarter Kids.",
      "Your child will learn quickly with less practice and repetition.",
    ],
  },
  {
    q: "How we created Premium E-Book Bundle?",
    a: [
      "Our team of expert parents and teachers are working hard to make sure you have the tools you need to keep your little ones building new skills and have a fun learning journey.",
      "We are working hard to develop educational resources that make homeschooling and E-Learning Exciting, Challenging and Rewarding.",
      "There are 2000+ activity pages divided into 20 fun skills subjects and themes.",
    ],
  },
  {
    q: "Is it a digital product (E-Book) or Physical Product ?",
    a: [
      "Premium E-Books Bundle is a digital product which you can instantly access once you do the payment, and print whenever you wish.",
    ],
  },
  {
    q: "Do I need any special skills or knowledge to use the printable?",
    a: [
      "No! All the tasks are easy and fun. As long as you’re able to print it out, you don’t need to have any additional skills.",
    ],
  },
  {
    q: "What size paper should I print ?",
    a: ["You will get A4 sized documents for optimal printing."],
  },
  {
    q: "Can I print them with a black & white printer instead of a color printer?",
    a: [
      "Of course! It’s up to you whether you decide to print it out in color or black & white. Nevertheless, we recommend you print it out in color as your child will get more benefits and fun from it.",
    ],
  },
  {
    q: "Where do I download the printables?",
    a: [
      "Once you’ve made the purchase, you will receive an email with links to download all your purchased files.",
    ],
  },
  {
    q: "What are the Payment methods do you support?",
    a: [
      "We covered each and every payment method including wallets (Paytm, PhonePe, Google Pay), Net Banking, Debit or Credit Cards, and UPI.",
    ],
  },
  {
    q: "Is there any expert support available?",
    a: [
      "Absolutely! We have a dedicated support team ready to assist you with any questions or challenges you may encounter while using the toolkit. You can reach out to us at support@simpexmedia.com for guidance and expert advice.",
    ],
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-2xl font-extrabold uppercase leading-tight text-foreground sm:text-3xl lg:text-4xl">
      {children}
    </h2>
  );
}

function Bookmark() {
  return (
    <span
      aria-hidden
      className="mt-2 h-2.5 w-2.5 shrink-0 rotate-45 rounded-[2px] bg-accent"
    />
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground">
      {/* Offer bar */}
      <header className="bg-secondary py-3 text-center text-secondary-foreground">
        <h1 className="px-3 text-base font-bold sm:text-xl lg:text-2xl">
          Offer Valid Only For Today <span className="line-through">₹1999/-</span>{" "}
          <span className="text-accent">₹199/- Only</span>
        </h1>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-6">
        <div className="rounded-xl border-4 border-accent bg-primary p-4 text-center sm:p-6">
          <h2 className="text-xl font-extrabold leading-snug text-primary-foreground sm:text-3xl lg:text-[2.4rem]">
            <span className="text-accent">Turn screen Time Into a Fun Learning Time </span>
            with our 14000+ Printable Worksheets Designed to Captivate Your{" "}
            <span className="text-accent">Child’s Interest and Boost their Early Development!</span>
          </h2>
        </div>

        <p className="mt-6 text-center text-lg font-semibold italic sm:text-2xl">
          Minimize screen time and involve your child in stimulating worksheets.
        </p>
        <p className="mt-3 text-center text-base font-semibold text-accent sm:text-lg">
          (Over 94,478 parents have already set their kids up for school success with our engaging
          printable worksheets—without the need to force them into study!)
        </p>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <img
            src="/images/2024_02_14000-Kids-Worksheets.webp"
            alt="14000 Kids Worksheets bundle preview"
            fetchPriority="high"
            decoding="async"
            className="mx-auto w-full max-w-lg rounded-2xl border-4 border-foreground animate-float"
            width={1080}
            height={1080}
          />
          <ul className="flex flex-col">
            {heroBullets.map((b) => (
              <li
                key={b}
                className="flex gap-3 border-b border-accent py-3 text-base font-semibold sm:text-lg"
              >
                <Bookmark />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 text-center text-xl font-bold sm:text-3xl">
          Age-appropriate exercises and tasks that promote holistic development in children{" "}
          <span className="text-accent">aged 2 to 7 years.</span>
        </p>

        <img
          src="/images/2024_02_Child.webp"
          alt="Child learning with printable worksheets"
          className="mx-auto mt-8 w-full max-w-2xl"
          loading="lazy"
          decoding="async"
        />

        <CtaButton className="mt-8" />

        <p className="mt-8 text-center text-base font-bold text-accent sm:text-xl">
          In demand. 157 people bought this in the last 24 hours.
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <span>Digital download</span>
          <span>Digital file type(s): 1 PDF, 5 ZIP</span>
        </div>
      </section>

      {/* What you give your child */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <SectionHeading>HERE IS WHAT YOU ARE GOING TO GIVE YOUR CHILD</SectionHeading>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {giveYourChild.map((item) => (
            <div key={item.title} className="rounded-xl bg-card p-5">
              <h3 className="flex gap-2 text-lg font-bold text-accent">
                <Bookmark />
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.body}
              </p>
            </div>
          ))}
        </div>
        <CtaButton className="mt-8" />
      </section>

      {/* Do you know */}
      <section className="bg-primary/30 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading>DO YOU KNOW?</SectionHeading>
          <h3 className="mt-3 text-center text-lg font-bold text-accent sm:text-2xl">
            Mobile Phone Addiction Can Have Many Negative Effects On Children, Including:
          </h3>
          <ul className="mx-auto mt-8 max-w-3xl">
            {addiction.map(([label, body]) => (
              <li key={label} className="flex gap-3 border-b border-accent/50 py-3">
                <Bookmark />
                <p className="text-sm sm:text-base">
                  <strong className="text-accent">{label}</strong> {body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-base sm:text-lg">
            We Help Parents Empower Their Kids with Expertly Designed Worksheets Covering Every
            Topic and Segment.
          </p>
          <p className="mt-2 text-center text-base sm:text-lg">
            We Believe in{" "}
            <strong className="text-accent">
              Play, Practice, and Perform – Unlocking Your Child’s True Potential.
            </strong>
          </p>
          <CtaButton className="mt-8" />
        </div>
      </section>

      {/* Note */}
      <section className="mx-auto max-w-4xl px-4 py-10">
        <p className="text-center text-lg font-bold sm:text-2xl">
          <span className="text-accent">NOTE:</span> All worksheets are in soft copy format, and you
          will receive them instantly via email.
        </p>
      </section>

      {/* Inside the bundle — carousels */}
      <section id="inside-bundle" className="mx-auto max-w-6xl px-4 pb-12 scroll-mt-6">
        <SectionHeading>Inside this Kids Worksheet Bundle you will discover</SectionHeading>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {insideBundle.map((group) => (
            <div key={group.label}>
              <Carousel images={group.images} interval={3200} />
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-lg font-bold text-accent">
                <Bookmark />
                <span>{group.label}</span>
              </p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xl font-extrabold sm:text-2xl">
          And Many More!... Discover the joy of Learning Through Playful Kids Worksheets!
        </p>
        <CtaButton href={CHECKOUT_URL} className="mt-8" />
      </section>

      {/* Videos */}
      <section className="bg-primary/30 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading>
            Happy Parents <span className="text-accent">Happy Kids</span>
          </SectionHeading>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {vimeoIds.map((id, i) => (
              <div key={id} className="aspect-[9/16] overflow-hidden rounded-xl bg-card">
                <VimeoLite id={id} title={`Happy parent testimonial ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp love */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-center text-xl font-extrabold leading-snug sm:text-3xl">
          Join 94,000+ Happy Parents Supercharging Their Child’s Learning{" "}
          <span className="text-accent">Loved, Trusted & Shared on WhatsApp 💚</span>
        </h2>
        <div className="mt-8">
          <Carousel images={whatsappImages} perView={{ base: 1, md: 2, lg: 3 }} interval={3500} />
        </div>
      </section>

      {/* Unlock offer */}
      <section id="buy" className="bg-primary/30 py-12">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeading>UNLOCK YOUR CHILD&apos;S BRIGHT FUTURE TODAY!</SectionHeading>
          <ul className="mt-8 space-y-2">
            {unlockList.map((item) => (
              <li key={item} className="flex gap-3 text-base font-semibold sm:text-lg">
                <span className="text-accent">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-xl font-bold sm:text-2xl">
            Regular Price: <span className="line-through opacity-70">₹1999</span>
          </p>
          <p className="mt-1 text-center text-2xl font-extrabold text-accent sm:text-4xl">
            Buy Today At Just ₹199/-
          </p>
          <CtaButton className="mt-6" />
        </div>
      </section>

      {/* Samples carousel */}
      <section id="samples" className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeading>Here Are The Samples</SectionHeading>
        <div className="mt-8">
          <Carousel images={sampleImages} perView={{ base: 1, md: 2, lg: 3 }} interval={3000} />
        </div>
        <CtaButton href={CHECKOUT_URL} className="mt-8" />
      </section>

      {/* Reviews */}
      <section className="bg-primary/30 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading>
            What Parents Are Loving <span className="text-accent">Real Stories, Real Results!</span>
          </SectionHeading>
          <div className="mx-auto mt-4 h-1 w-24 rounded bg-accent" />
          <div className="mt-8">
            <ReviewsSlider reviews={reviews} />
          </div>
          <CtaButton className="mt-8" />
        </div>
      </section>

      {/* Easy steps / requirements */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <SectionHeading>Easy Steps to Follow</SectionHeading>
        <p className="mt-3 flex items-center justify-center gap-2 text-center text-lg font-semibold text-accent">
          <Bookmark /> <span>Reduce your stress tremendously</span>
        </p>
        <div className="mx-auto my-8 h-1 w-40 rounded bg-accent/60" />
        <h3 className="text-center text-xl font-bold sm:text-2xl">
          What you need for this Premium eBook bundle
        </h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {["A CURIOUS 2 – 7 YEARS OLD KID", "15 MINUTES IN A DAY", "AND A PRINTER"].map((x) => (
            <li
              key={x}
              className="rounded-xl bg-card p-4 text-center text-base font-bold text-accent"
            >
              {x}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          Don’t want to get these colored? Try it in grayscale as well.
        </p>
      </section>

      {/* Progress */}
      <section className="bg-primary/30 py-12">
        <div className="mx-auto max-w-4xl px-4">
          <p className="text-center text-lg font-extrabold uppercase text-accent">
            Limited Time Offer
          </p>
          <p className="mt-1 text-center text-2xl">⭐⭐⭐⭐⭐</p>
          <p className="mt-1 text-center text-base font-bold sm:text-xl">
            37,678+ POSITIVE FEEDBACK &amp; STILL COUNTING
          </p>
          <div className="mt-8">
            <ProgressBars
              items={[
                {
                  label: "Improvement in Attitude (Enthusiasm, Creativity and much more !)",
                  value: 85,
                },
                { label: "Improvement in Skills", value: 89 },
                { label: "Improvement in Knowledge", value: 91 },
              ]}
            />
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href={SAMPLES_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta inline-flex items-center gap-2 rounded-lg px-6 py-3 text-center text-sm font-extrabold uppercase transition hover:scale-[1.02] sm:text-base"
            >
              <span>CLICK HERE TO VIEW SAMPLE WORKSHEETS HERE</span>
              <span aria-hidden="true" className="text-base">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Print / Track / Award */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <SectionHeading>Kids Premium Worksheet Bundle...</SectionHeading>
        <img
          src="/images/2024_02_Printer.webp"
          alt="Printer printing worksheets"
          loading="lazy"
          decoding="async"
          className="mx-auto mt-6 w-full max-w-sm"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.tag} className="rounded-xl bg-card p-5 text-center">
              <p className="text-xl font-extrabold text-accent">{s.tag}</p>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="bg-primary/30 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading>Why Parents &amp; Teachers Recommend Us ?</SectionHeading>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="rounded-xl bg-card p-6 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-2xl text-accent-foreground">
                  {w.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which will you choose */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <SectionHeading>Which Will You Choose ?</SectionHeading>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="text-center">
            <h3 className="text-lg font-bold sm:text-xl">
              <span className="text-accent">A.</span> Keep Your Rs.200/- &amp; Spend Anywhere
            </h3>
            <img
              src="/images/2024_02_A.webp"
              alt="Option A illustration"
              loading="lazy"
              decoding="async"
              className="mx-auto mt-4 w-full max-w-sm rounded-xl"
            />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-bold sm:text-xl">
              <span className="text-accent">B.</span> Invest Rs.200/- In Your Kids Education
            </h3>
            <img
              src="/images/2024_02_B.webp"
              alt="Option B illustration"
              loading="lazy"
              decoding="async"
              className="mx-auto mt-4 w-full max-w-sm rounded-xl"
            />
          </div>
        </div>
        <CtaButton className="mt-10" />
        <div className="mt-8">
          <Countdown seconds={4500} label="Limited Time Offer" />
        </div>
      </section>

      {/* Value Comparison & Guarantee */}
      <ComparisonTable />

      {/* FAQ */}
      <section className="bg-primary/30 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <SectionHeading>Frequently Asked Questions</SectionHeading>
          <div className="mt-8">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="mx-auto max-w-4xl px-4 py-12 text-center">
        <img
          src="/images/2024_02_Satisfaction-Guarantee.webp"
          alt="100% satisfaction guarantee badge"
          loading="lazy"
          decoding="async"
          className="mx-auto w-40 sm:w-52"
        />
        <h2 className="mt-6 text-2xl font-extrabold text-accent sm:text-3xl">
          100% INSTANT DELIVERY GUARANTEE!
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Receive your product directly to your email within moments of purchase. Enjoy immediate
          access, hassle-free! If any issues arise, email us at {SUPPORT_EMAIL} for swift
          resolution. Your satisfaction is our priority. Shop confidently with us!
        </p>
        <p className="mt-6 text-base font-bold sm:text-lg">
          Still have questions? Mail us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent underline">
            {SUPPORT_EMAIL}
          </a>{" "}
          (support 24×7, 365 Days a Year)
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-primary/40 pb-28 pt-12">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <div className="mt-4">
            <Countdown seconds={4500} showDays={false} label="Limited Time Offer" />
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-6 text-base font-bold">
            <li>14000 Kids Worksheets</li>
            <li>Team of Experts</li>
            <li>Years Of Experience</li>
          </ul>
          <p className="mx-auto mt-8 max-w-3xl text-xs text-muted-foreground">
            This site is not part of the Facebook or Instagram website or Facebook Inc.
            Additionally, this site is NOT endorsed by Facebook or Instagram in any way. Facebook is
            a trademark of FACEBOOK, Inc.
          </p>
          <div className="mx-auto my-6 h-px w-full max-w-3xl bg-foreground/20" />
          <ul className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground">
            <li>
              <Link to="/privacy-policy" className="transition hover:text-accent">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="transition hover:text-accent">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="transition hover:text-accent">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition hover:text-accent">
                Contact Us
              </Link>
            </li>
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            © {new Date().getFullYear()} Simpexmedia Kids. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Sticky timer & buy bar */}
      <StickyTimerBar checkoutUrl={CHECKOUT_URL} />

      {/* Social proof purchase popup */}
      <PurchasePopup />

      {/* AI Sales Closer Live Chat (WhatsApp Style) */}
      <SalesCloserChat checkoutUrl={CHECKOUT_URL} />

      {/* Exit Intent ₹149 Discount Modal */}
      <ExitIntentModal
        checkoutUrl={CHECKOUT_URL}
        whatsappUrl="https://wa.me/?text=Hi%20Admin%2C%20I%20want%20to%20get%20the%2014000%2B%20Kids%20Worksheets%20Bundle%20at%20a%20special%20discount.%20Please%20guide%20me!"
        originalPrice={199}
        discountPrice={149}
      />
    </main>
  );
}
