"use client";

import { useState } from 'react';
import CloudImage from "@/components/CloudImage";

const starPatternUrl = `data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M12 3 C13 9 15 11 21 12 C15 13 13 15 12 21 C11 15 9 13 3 12 C9 11 11 9 12 3 Z' fill='rgba(255,255,255,0.15)'/></svg>"
)}`;

interface FAQItem {
  q: string;
  a: string;
}

const QUESTIONS: FAQItem[] = [
  {
    q: 'What is IYD 2026 "Future Forward"?',
    a: "Future Forward is AIESEC Nigeria's event marking International Youth Day 2026.",
  },
  {
    q: 'When and where is it happening?',
    a: 'It is a physical event that will be held on Saturday, 29th August 2026 in Lagos, Nigeria.',
  },
  {
    q: 'Who can attend IYD 2026?',
    a: 'Youth aged 18–30, including final year students preparing for the job market, early graduates seeking opportunities, and youth early in their careers.',
  },
  {
    q: 'What will happen at the event?',
    a: 'Expect 5 key activities: a Keynote Session on career positioning, Breakout Workshops in AI Prompt Engineering or Personal Branding, a Mental Health Session on pressure and burnout, a Financial Empowerment Keynote on budgeting and tax laws, and a Networking Space to connect with other youth.',
  },
  {
    q: 'How do I register for IYD 2026, and is there a fee?',
    a: 'Registration is completely free. However registration has ended.',
  },
];

interface ChatMessage {
  from: 'bot' | 'user';
  text: string;
}

const IYDFAQ = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      from: 'bot',
      text: "Hey 👋 Welcome to Future Forward. Tap any question below and I'll answer it instantly.",
    },
  ]);
  const [askedIndexes, setAskedIndexes] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleAsk = (index: number) => {
    const { q, a } = QUESTIONS[index];

    // user message + pill disabled immediately
    setMessages((prev) => [...prev, { from: 'user', text: q }]);
    setAskedIndexes((prev) => [...prev, index]);
    setIsTyping(true);

    // bot reply after a short delay, simulating typing
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: 'bot', text: a }]);
    }, 1100);
  };

  return (
    <section className="relative w-full overflow-hidden py-10 md:py-20">
      {/* Dot pattern — replace with shared background asset/component */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("${starPatternUrl}")`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-[42px] lg:text-5xl text-white">
          Got questions?
          <br />
          We&apos;ve got{' '}
          <span className="italic text-[#B9FB02] font-bold">answers</span>
        </h2>

        <div className="mt-8 overflow-hidden border border-white/10">
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 bg-[#2A412A]/90">
            <div className="flex items-center justify-center rounded-full bg-[#B9FB02] p-1 md:p-2">
              <CloudImage
                id="ain/iyd/FutureForwardIcon"
                alt=""
                className="h-3 w-3 md:h-7 md:w-7"
              />
            </div>
            <div>
              <p className="text-base md:text-lg lg:text-xl font-semibold text-white leading-[120%] tracking-[-2%]">
                Future Forward
              </p>
              <p className="flex items-center gap-1.5 text-sm md:text-base lg:text-lg text-[#B9FB02] leading-[120%] tracking-[-2%]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B9FB02]" />
                Online · We have answered your questions
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-3 px-5 py-5 bg-[#fff]/10 min-h-[50vh]">
            {messages.map((m, i) => (
              <div key={i}>
                <div
                  className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[75%] md:max-w-[65%] lg:max-w-[55%] px-3 md:px-5 py-4 md:py-6 text-base md:text-lg lg:text-xl leading-[120%] tracking-[-2%] ${
                      m.from === 'user'
                        ? 'bg-[#B9FB02] text-[#2A412A]'
                        : 'bg-[#2A412A]/90 text-white'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
                {i === messages.length - 1 && !isTyping && (
                  <p
                    className={`mt-1 text-[10px] md:text-xs lg:text-sm text-white ${m.from === 'user' ? 'text-right' : 'text-left'}`}
                  >
                    Now
                  </p>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 rounded-md bg-[#2A412A]/90 px-5 py-4">
                  <span
                    className="h-2 w-2 rounded-full bg-white/60 animate-bounce"
                    style={{ animationDelay: '0ms' }}
                  />
                  <span
                    className="h-2 w-2 rounded-full bg-white/60 animate-bounce"
                    style={{ animationDelay: '150ms' }}
                  />
                  <span
                    className="h-2 w-2 rounded-full bg-white/60 animate-bounce"
                    style={{ animationDelay: '300ms' }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Question chips */}
          <div className=" px-5 py-5 bg-[#2A412A]/90">
            <p className="mb-3 font-medium text-base md:text-lg lg:text-xl text-white/80 leading-[120%] tracking-[-2%]">
              Tap a question
            </p>
            <div className="flex flex-wrap gap-4 w-[80%]">
              {QUESTIONS.map((item, index) =>
                askedIndexes.includes(index) ? null : (
                  <button
                    key={index}
                    onClick={() => handleAsk(index)}
                    className=" border border-white/10 px-2.5 md:px-3.5 py-1 md:py-2 text-left text-base md:text-lg lg:text-xl text-white/90 transition hover:border-[#B9FB02] hover:text-[#B9FB02]"
                  >
                    {item.q}
                  </button>
                )
              )}
              {askedIndexes.length === QUESTIONS.length && (
                <p className="text-xs text-white/40">
                  That's everything we've got — see you there!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IYDFAQ;
