import { useState, useEffect, useRef } from "react";
import { generateGeminiResponse } from "@/lib/gemini";

type Message = {
  id: string;
  sender: "agent" | "user";
  text: string;
  time: string;
  cta?: {
    label: string;
    url: string;
  };
};

const KIDS_KNOWLEDGE_BASE_PROMPT = `You are a top-tier senior educational consultant & sales closing master from the "Simpex Media Team" representing the "14,000+ Printable Kids Worksheets Bundle".

YOUR PSYCHOLOGICAL SALES MISSION:
Your goal is to turn ANY hesitant parent, teacher, or visitor from "just browsing" into an enthusiastic, confident buyer within 1-2 exchanges. You talk like a real, caring, warm human advisor on WhatsApp (NOT an AI robot).

COMPLETE KNOWLEDGE BASE ABOUT THE KIDS BUNDLE:
1. WHAT IS INSIDE:
   - 14,000+ High-Resolution Printable Worksheets across 100+ categories.
   - Ages 2 to 3 (Toddler): Strokes, lines, curves, big shapes, colors, animal & fruit tracing.
   - Ages 3 to 5 (Nursery & LKG): English Alphabet A-Z tracing, Phonics sounds, Numbers 1-50, Hindi Varnamala (Swar & Vyanjan), Sight words, Mazes, Connect dots, Coloring.
   - Ages 5 to 7 (UKG & Class 1): Addition/Subtraction, Word search, Logic puzzles, Sentence formation, Clock & time reading, Money concepts, EVS.
   - 4 FREE BONUSES: (1) 500+ Montessori Activity Flashcards, (2) 100+ Bedtime Moral Storybooks, (3) Drawing & Doodling Master Guide, (4) Daily Habit & Routine Tracker.
2. CORE EMOTIONAL BENEFIT:
   - Eliminates harmful mobile phone screen addiction.
   - Boosts child handwriting, cognitive thinking, pencil grip, and IQ in just 15 minutes/day.
   - Unlimited home printing on standard A4 paper for all siblings/kids forever.
3. DELIVERY & ACCESS:
   - Permanent Google Drive lifetime access link sent to WhatsApp & Email within 60 seconds of payment.
   - Over 94,400+ satisfied Indian parents. 100% Risk-Free Money-Back Delivery Guarantee.
4. PRICING & SPECIAL CUSTOMER DISCOUNT RULE:
   - Standard Price: ₹199 (One-time payment, zero subscriptions).
   - If user asks for a discount, coupon, says price is high, or hesitates on ₹199, you MUST enthusiastically say:
     "Sir/Ma'am, you are our special customer! 🎁 For the next 10 minutes only, we have unlocked our VIP ₹149 offer for you." and close them with the ₹149 offer.
5. ANTI-BYPASS & FOCUS GUARDRAIL:
   - If user asks unrelated random questions, coding, off-topic, or asks for free piracy links without paying, politely and firmly guide them back:
     "Main yahan aapke child ke learning & 14,000+ worksheets bundle unlock karne ke liye hoon! 😊 Kya main aapko ₹199 (ya VIP ₹149) offer link share karoon?"
6. HUMAN CONVERSATIONAL STYLE:
   - Reply in 1 to 2 warm, punchy, conversational sentences.
   - Mirror the user's exact language (Hinglish, Hindi, English, Tamil, Telugu, Marathi, Bengali, etc.).
   - Always end with a comforting, low-friction buying nudge.`;

function getPsychologicalFallback(userText: string): { reply: string; isDiscount?: boolean } {
  const t = userText.toLowerCase();

  // Discount Query
  if (
    t.includes("discount") ||
    t.includes("kam") ||
    t.includes("price") ||
    t.includes("149") ||
    t.includes("offer") ||
    t.includes("coupon") ||
    t.includes("sasta") ||
    t.includes("paisa") ||
    t.includes("less") ||
    t.includes("bargain")
  ) {
    return {
      reply:
        "Sir/Ma'am, you are our special customer! 🎁 For the next 10 minutes only, we have unlocked our VIP ₹149 offer for you. Niche diye button par tap karke instant lifetime access grab kar lijiye: 👇",
      isDiscount: true,
    };
  }

  // Delivery / Drive Link
  if (
    t.includes("link") ||
    t.includes("kaise") ||
    t.includes("how") ||
    t.includes("receive") ||
    t.includes("delivery") ||
    t.includes("drive") ||
    t.includes("kaha") ||
    t.includes("email") ||
    t.includes("whatsapp")
  ) {
    return {
      reply:
        "Payment complete hote hi 60 seconds ke andar Google Drive ka permanent lifetime link aapke WhatsApp aur Email dono par turant mil jayega! ⚡ Jab chahein download aur print kijiye. 📥",
    };
  }

  // Content / What's inside / Ages
  if (
    t.includes("age") ||
    t.includes("saal") ||
    t.includes("year") ||
    t.includes("class") ||
    t.includes("kid") ||
    t.includes("bacha") ||
    t.includes("bacche") ||
    t.includes("content") ||
    t.includes("kya hai") ||
    t.includes("inside")
  ) {
    return {
      reply:
        "Isme 2 se 7 saal (Playgroup to Class 1) ke liye 14,000+ worksheets hain — English, Hindi Varnamala, Phonics, Math, Mazes, Coloring aur 4 Free Montessori Bonuses! 🎨",
    };
  }

  // Printing / Paper
  if (t.includes("print") || t.includes("paper") || t.includes("printer") || t.includes("hardcopy")) {
    return {
      reply:
        "Haan ji! Ye standard A4 PDF format me hain. Aap apne normal home printer ya pass ke cyber cafe se jitni baar chahein print nikaal sakte hain. 🖨️",
    };
  }

  // Trust / Safe / Guarantee
  if (
    t.includes("safe") ||
    t.includes("trust") ||
    t.includes("fake") ||
    t.includes("real") ||
    t.includes("scam") ||
    t.includes("refund") ||
    t.includes("guarantee")
  ) {
    return {
      reply:
        "100% Safe & Trusted! 🛡️ 94,400+ parents already use kar rahe hain. 60-second instant Google Drive delivery or 100% money-back guarantee hai. Aap confidently le sakte hain! ✅",
    };
  }

  // General / Objection Re-route
  return {
    reply:
      "Ji bilkul! Is 14,000+ worksheets bundle se baccho ka phone screen time turant band ho jata hai aur writing/brain development boost hota hai. Abhi sirf ₹199 mein lifetime access mil raha hai. Kya main checkout link share karoon? 😊",
  };
}

export function SalesCloserChat({
  checkoutUrl = "https://simpexmedia.co",
}: {
  checkoutUrl?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "m1",
      sender: "agent",
      text: "Hey! 👋 We are from Simpex Media team. How can we help you?",
      time: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: String(Date.now()),
      sender: "user",
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    const isDiscountQuery =
      text.toLowerCase().includes("discount") ||
      text.toLowerCase().includes("kam") ||
      text.toLowerCase().includes("149") ||
      text.toLowerCase().includes("offer") ||
      text.toLowerCase().includes("sasta") ||
      text.toLowerCase().includes("less") ||
      text.toLowerCase().includes("paisa") ||
      text.toLowerCase().includes("coupon");

    const isBuyIntent =
      isDiscountQuery ||
      text.toLowerCase().includes("buy") ||
      text.toLowerCase().includes("link") ||
      text.toLowerCase().includes("purchase") ||
      text.toLowerCase().includes("pay") ||
      text.toLowerCase().includes("drive") ||
      text.toLowerCase().includes("kaise milega") ||
      text.toLowerCase().includes("kaise kharide") ||
      text.toLowerCase().includes("lena hai") ||
      text.toLowerCase().includes("order") ||
      text.toLowerCase().includes("price") ||
      text.toLowerCase().includes("cost");

    let cta: { label: string; url: string } | undefined = undefined;
    if (isDiscountQuery) {
      cta = { label: "CLAIM ₹149 VIP ACCESS (VALID 10 MIN) ➔", url: checkoutUrl };
    } else if (isBuyIntent) {
      cta = { label: "GET 14,000+ WORKSHEETS @ ₹199 ➔", url: checkoutUrl };
    }

    try {
      let replyText = "";
      try {
        replyText = await generateGeminiResponse(KIDS_KNOWLEDGE_BASE_PROMPT, text, messages);
      } catch {
        const fb = getPsychologicalFallback(text);
        replyText = fb.reply;
      }

      setTimeout(() => {
        setIsTyping(false);
        const agentMsg: Message = {
          id: String(Date.now() + 1),
          sender: "agent",
          text: replyText,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          cta: cta,
        };
        setMessages((prev) => [...prev, agentMsg]);
      }, 650);
    } catch {
      setIsTyping(false);
      const fb = getPsychologicalFallback(text);
      const agentMsg: Message = {
        id: String(Date.now() + 1),
        sender: "agent",
        text: fb.reply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        cta: cta,
      };
      setMessages((prev) => [...prev, agentMsg]);
    }
  };

  const quickChips = [
    "Google Drive link kaise milega? 📥",
    "Special discount milega kya? 🎁",
    "Kitne saal ke baccho ke liye hai? 🧒",
    "Payment safe hai na? 🔒",
  ];

  return (
    <>
      {/* Floating WhatsApp Bubble Trigger */}
      <aside
        aria-label="Live sales assistant"
        className="fixed bottom-24 right-4 z-40 flex items-center gap-2 sm:bottom-24 sm:right-6"
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="hidden md:flex items-center gap-2 rounded-full border border-emerald-500/40 bg-card/95 px-3.5 py-1.5 text-xs font-extrabold text-foreground shadow-2xl backdrop-blur-md transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
          </span>
          <span>Have a question? <strong className="text-[#25D366]">Chat with Us</strong></span>
        </button>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open sales chat"
          className="relative grid h-13 w-13 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-600/60 transition-transform duration-200 hover:bg-[#20bd5a] hover:scale-110 active:scale-95 cursor-pointer sm:h-14 sm:w-14"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] font-black text-white items-center justify-center">
              1
            </span>
          </span>
          <svg className="h-7 w-7 fill-current sm:h-8 sm:w-8" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.044-1.045-.078-.518-.154-1.18-.432-2.029-1.282-.85-.85-1.127-1.512-1.281-2.03-.122-.411-.123-.733-.078-1.045.05-.333.419-1.026.824-1.17.13-.046.26-.046.39-.046.13 0 .26 0 .39.046.144.405.492 1.2.492 1.2s.072.155.021.261c-.05.106-.108.188-.179.271-.072.083-.153.174-.219.239-.083.083-.169.174-.072.34.097.167.432.712.928 1.153.637.568 1.174.743 1.341.826.167.083.266.072.366-.043.1-.115.426-.497.54-.668.115-.17.23-.142.388-.083.158.058 1.002.472 1.174.558.173.086.288.13.331.203.044.072.044.419-.1.824zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.954-1.407C8.423 21.503 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.637 0-3.174-.488-4.468-1.328l-.32-.208-2.946.838.838-2.946-.208-.32C3.688 15.174 3.2 13.637 3.2 12 3.2 7.148 7.148 3.2 12 3.2s8.8 3.948 8.8 8.8-3.948 8.2-8.8 8.2z" />
          </svg>
        </button>
      </aside>

      {/* WhatsApp Styled Live Chat Modal Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-3 z-50 flex h-[520px] max-h-[82vh] w-[92vw] max-w-sm flex-col overflow-hidden rounded-3xl border-2 border-[#075E54]/40 bg-[#0B141A] shadow-2xl shadow-black animate-scale-in sm:bottom-24 sm:right-6">
          {/* Header */}
          <div className="flex items-center justify-between bg-[#075E54] px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-base font-black text-[#075E54]">
                  👩‍🏫
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#075E54] bg-[#25D366]" />
              </div>
              <div>
                <p className="text-sm font-black flex items-center gap-1">
                  <span>Simpex Media Team</span>
                  <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full font-bold">Verified</span>
                </p>
                <p className="text-[10px] text-emerald-200">Online • Instant Google Drive Support</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="grid h-8 w-8 place-items-center rounded-full bg-black/20 text-sm font-bold text-white transition hover:bg-black/40 cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto bg-[#0b141a] p-3.5 space-y-3">
            <div className="rounded-xl bg-[#182229] p-2 text-center text-[10px] font-bold text-[#8696A0]">
              🔒 Messages are end-to-end encrypted &amp; powered by Instant AI Support
            </div>

            {messages.map((m) => {
              const isMe = m.sender === "user";
              return (
                <div key={m.id} className={`flex flex-col ${isMe ? "items-end" : "items-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed shadow-md ${
                      isMe
                        ? "rounded-tr-none bg-[#005C4B] text-white"
                        : "rounded-tl-none bg-[#202C33] text-[#E9EDEF]"
                    }`}
                  >
                    <p>{m.text}</p>
                    {m.cta && (
                      <a
                        href={m.cta.url}
                        className="mt-2.5 block rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 py-2.5 text-center text-[11px] font-black uppercase text-black shadow-md transition hover:scale-102 active:scale-98"
                      >
                        {m.cta.label}
                      </a>
                    )}
                    <span className="mt-1 block text-right text-[9px] text-[#8696a0]">
                      {m.time} {isMe && "✓✓"}
                    </span>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-none bg-[#202C33] px-3.5 py-2 text-xs text-[#8696a0] w-fit animate-pulse">
                <span>Simpex Team is typing</span>
                <span className="animate-bounce">...</span>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          {/* Quick Tap Suggestion Chips */}
          <div className="bg-[#111B21] px-2 py-1.5 overflow-x-auto flex gap-1.5 no-scrollbar border-t border-[#222E35]">
            {quickChips.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => sendMessage(c)}
                className="shrink-0 rounded-full border border-[#2A3942] bg-[#202C33] px-2.5 py-1 text-[10px] font-bold text-[#D1D7DB] transition hover:bg-[#005C4B] hover:text-white cursor-pointer"
              >
                {c}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(inputValue);
            }}
            className="flex items-center gap-2 bg-[#202C33] p-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type in Hindi, Hinglish or English..."
              className="flex-1 rounded-xl bg-[#2A3942] px-3 py-2 text-xs text-white placeholder-[#8696a0] focus:outline-none focus:ring-1 focus:ring-[#00A884]"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="grid h-9 w-9 place-items-center rounded-xl bg-[#00A884] text-white transition hover:bg-[#008f72] disabled:opacity-40 cursor-pointer"
            >
              ➔
            </button>
          </form>
        </div>
      )}
    </>
  );
}
