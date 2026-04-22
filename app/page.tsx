'use client';

import { TextScramble } from '@/components/ui/text-scrammble';
import { MapPin } from 'lucide-react';

const phrases = [
  'With great honour...',
  'You are cordially invited',
  'To celebrate',
  'Dagmawi Tefera',
  'Upon his graduation',
  'Graduation Ceremony MMXXVI',
  'April 26, 2026 · 6:00 Local time',
  "DAGGI'S",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center px-5 py-10 overflow-x-hidden relative">
      {/* Ambient gold glow behind card */}
      <div 
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[520px]">
        {/* Outer gold border frame */}
        <div 
          className="relative rounded-sm p-[3px] animate-fade-up"
          style={{
            background: 'linear-gradient(135deg, #FFD966, #C9A84C, #8B6914, #C9A84C, #FFD966)',
            backgroundSize: '200% auto',
            animation: 'shimmer 4s linear infinite, fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) both',
          }}
        >
          <div 
            className="relative overflow-hidden px-12 pt-14 pb-12"
            style={{
              background: '#080808',
            }}
          >
            {/* Subtle noise texture overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
                backgroundSize: '150px 150px',
              }}
            />

            {/* Inner double-rule border */}
            <div 
              className="absolute pointer-events-none"
              style={{
                inset: '14px',
                border: '1px solid rgba(201,168,76,0.25)',
              }}
            >
              <div 
                className="absolute"
                style={{
                  inset: '4px',
                  border: '1px solid rgba(201,168,76,0.10)',
                }}
              />
            </div>

            {/* Corner ornaments */}
            <div 
              className="absolute w-6 h-6 border border-[#C9A84C] opacity-70"
              style={{ top: '22px', left: '22px', borderWidth: '1px 0 0 1px' }}
            />
            <div 
              className="absolute w-6 h-6 border border-[#C9A84C] opacity-70"
              style={{ top: '22px', right: '22px', borderWidth: '1px 1px 0 0' }}
            />
            <div 
              className="absolute w-6 h-6 border border-[#C9A84C] opacity-70"
              style={{ bottom: '22px', left: '22px', borderWidth: '0 0 1px 1px' }}
            />
            <div 
              className="absolute w-6 h-6 border border-[#C9A84C] opacity-70"
              style={{ bottom: '22px', right: '22px', borderWidth: '0 1px 1px 0' }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">

              {/* University */}
              <div 
                className="animate-fade-up mb-5"
                style={{ 
                  animationDelay: '300ms',
                  fontFamily: 'var(--font-cinzel), Cinzel, serif',
                }}
              >
                <span className="text-[15px] font-semibold tracking-[0.35em] text-[#C9A84C] uppercase">
                  INVITATION
                </span>
              </div>

              {/* Divider */}
              <div 
                className="flex items-center gap-2.5 w-4/5 mb-5 animate-fade-up"
                style={{ animationDelay: '350ms' }}
              >
                <div 
                  className="flex-1 h-px"
                  style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
                />
                <div 
                  className="w-[5px] h-[5px] bg-[#C9A84C] flex-shrink-0"
                  style={{ transform: 'rotate(45deg)' }}
                />
                <div 
                  className="flex-1 h-px"
                  style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
                />
              </div>

              {/* Text Scramble - Main Feature */}
              <div 
                className="mb-8 animate-fade-up"
                style={{ animationDelay: '400ms' }}
              >
                <TextScramble
                  phrases={phrases}
                  chars="!<>-_\\/[]{}—=+*^?#________"
                  scrambleMs={400}
                  pauseMs={2600}
                  autoStart={true}
                  loop={false}
                  textClass="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#C9A84C]"
                  dudClass="text-[#C9A84C]/40"
                />
              </div>

              {/* Event Title */}
              <div 
                className="mb-8 animate-fade-up"
                style={{ 
                  animationDelay: '600ms',
                  fontFamily: 'var(--font-cinzel), Cinzel, serif',
                }}
              >
                <span className="text-[14px] font-semibold tracking-[0.3em] text-[#E8C96A] uppercase">
                  Graduation Ceremony · MMXXVI
                </span>
              </div>

              {/* Details Block */}
              <div 
                className="w-[85%] grid grid-cols-2 gap-0 py-5 mb-7 animate-fade-up"
                style={{ 
                  animationDelay: '700ms',
                  borderTop: '1px solid rgba(201,168,76,0.2)',
                  borderBottom: '1px solid rgba(201,168,76,0.2)',
                }}
              >
                {/* Date */}
                <div className="flex flex-col items-center gap-1.5 px-2.5">
                  <div className="text-base text-[#C9A84C] mb-0.5">◈</div>
                  <div 
                    className="text-[9px] tracking-[0.25em] text-[#C9A84C] uppercase opacity-70"
                    style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif' }}
                  >
                    Date
                  </div>
                  <div 
                    className="text-[16px] font-medium text-[#F7F2E8] text-center leading-tight"
                    style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
                  >
                    April 26<br/>2026
                  </div>
                </div>

                {/* Time */}
                <div 
                  className="flex flex-col items-center gap-1.5 px-2.5"
                  style={{ borderLeft: '1px solid rgba(201,168,76,0.15)' }}
                >
                  <div className="text-base text-[#C9A84C] mb-0.5">◈</div>
                  <div 
                    className="text-[9px] tracking-[0.25em] text-[#C9A84C] uppercase opacity-70"
                    style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif' }}
                  >
                    Time
                  </div>
                  <div 
                    className="text-[16px] font-medium text-[#F7F2E8] text-center leading-tight"
                    style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
                  >
                    6:00 Local time
                  </div>
                </div>
              </div>

              {/* Venue Link */}
              <a
                href="https://maps.app.goo.gl/bH3Kh7YvNnj6mc6Y9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 mb-8 text-[16px] italic text-[#D4C9B0] tracking-wide transition-all duration-200 hover:text-[#FFD966] hover:opacity-85"
                style={{
                  fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif',
                  animation: 'fadeUp 1.2s 750ms cubic-bezier(0.22, 1, 0.36, 1) both, bounce 1.6s ease-in-out 2s infinite',
                }}
              >
                <MapPin className="w-5 h-5" />
                lafto, lehulum real estate
              </a>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
