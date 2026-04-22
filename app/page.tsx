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
  'April 26, 2026 · 12:00 Noon',
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
              
              {/* Laurel Crest */}
              <div 
                className="mb-5 animate-fade-up"
                style={{ animationDelay: '200ms' }}
              >
                <svg 
                  viewBox="0 0 100 80" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 opacity-90"
                  style={{ filter: 'drop-shadow(0 0 12px rgba(201,168,76,0.4))' }}
                >
                  {/* Left laurel branch */}
                  <g stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round">
                    <path d="M50 70 Q38 60 30 48"/>
                    <path d="M50 70 Q36 55 26 45"/>
                    <ellipse cx="26" cy="42" rx="7" ry="4" transform="rotate(-35 26 42)" fill="#C9A84C" opacity="0.5"/>
                    <ellipse cx="30" cy="34" rx="7" ry="4" transform="rotate(-50 30 34)" fill="#C9A84C" opacity="0.5"/>
                    <ellipse cx="36" cy="27" rx="6" ry="3.5" transform="rotate(-60 36 27)" fill="#C9A84C" opacity="0.5"/>
                    <ellipse cx="43" cy="22" rx="6" ry="3" transform="rotate(-70 43 22)" fill="#C9A84C" opacity="0.5"/>
                    <path d="M50 70 Q35 52 22 42 Q28 38 32 44"/>
                    <path d="M50 70 Q33 48 20 36"/>
                    <ellipse cx="20" cy="33" rx="7" ry="4" transform="rotate(-25 20 33)" fill="#C9A84C" opacity="0.4"/>
                  </g>
                  {/* Right laurel branch (mirror) */}
                  <g stroke="#C9A84C" strokeWidth="1.2" strokeLinecap="round">
                    <path d="M50 70 Q62 60 70 48"/>
                    <path d="M50 70 Q64 55 74 45"/>
                    <ellipse cx="74" cy="42" rx="7" ry="4" transform="rotate(35 74 42)" fill="#C9A84C" opacity="0.5"/>
                    <ellipse cx="70" cy="34" rx="7" ry="4" transform="rotate(50 70 34)" fill="#C9A84C" opacity="0.5"/>
                    <ellipse cx="64" cy="27" rx="6" ry="3.5" transform="rotate(60 64 27)" fill="#C9A84C" opacity="0.5"/>
                    <ellipse cx="57" cy="22" rx="6" ry="3" transform="rotate(70 57 22)" fill="#C9A84C" opacity="0.5"/>
                    <path d="M50 70 Q65 52 78 42 Q72 38 68 44"/>
                    <path d="M50 70 Q67 48 80 36"/>
                    <ellipse cx="80" cy="33" rx="7" ry="4" transform="rotate(25 80 33)" fill="#C9A84C" opacity="0.4"/>
                  </g>
                  {/* Cap mortarboard */}
                  <rect x="35" y="13" width="30" height="4" rx="1" fill="#C9A84C"/>
                  <polygon points="50,6 67,13 50,20 33,13" fill="#C9A84C" opacity="0.85"/>
                  <circle cx="50" cy="6" r="2" fill="#C9A84C"/>
                  {/* tassel */}
                  <line x1="50" y1="8" x2="58" y2="14" stroke="#C9A84C" strokeWidth="1"/>
                  <line x1="58" y1="14" x2="58" y2="20" stroke="#C9A84C" strokeWidth="1.2"/>
                </svg>
              </div>

              {/* University */}
              <div 
                className="animate-fade-up mb-5"
                style={{ 
                  animationDelay: '300ms',
                  fontFamily: 'var(--font-cinzel), Cinzel, serif',
                }}
              >
                <span className="text-[12px] font-semibold tracking-[0.35em] text-[#C9A84C] uppercase">
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
                  pauseMs={1200}
                  autoStart={true}
                  loop={false}
                  textClass="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[#C9A84C]"
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
                <span className="text-[11px] font-semibold tracking-[0.3em] text-[#E8C96A] uppercase">
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
                    className="text-[7px] tracking-[0.25em] text-[#C9A84C] uppercase opacity-70"
                    style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif' }}
                  >
                    Date
                  </div>
                  <div 
                    className="text-[13px] font-medium text-[#F7F2E8] text-center leading-tight"
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
                    className="text-[7px] tracking-[0.25em] text-[#C9A84C] uppercase opacity-70"
                    style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif' }}
                  >
                    Time
                  </div>
                  <div 
                    className="text-[13px] font-medium text-[#F7F2E8] text-center leading-tight"
                    style={{ fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
                  >
                    12:00 Noon<br/>
                    <span className="italic text-[11px] text-[#D4C9B0]">Luncheon to follow</span>
                  </div>
                </div>
              </div>

              {/* Venue Link */}
              <a
                href="https://maps.app.goo.gl/bH3Kh7YvNnj6mc6Y9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 mb-8 text-[11px] italic text-[#D4C9B0] tracking-wide transition-all duration-200 hover:text-[#FFD966] hover:opacity-85 animate-fade-up"
                style={{ animationDelay: '750ms', fontFamily: 'var(--font-cormorant), Cormorant Garamond, serif' }}
              >
                <MapPin className="w-3.5 h-3.5" />
                lafto, lehulu realestate
              </a>

              {/* Bottom Divider */}
              <div 
                className="flex items-center gap-2.5 w-4/5 mb-6 animate-fade-up"
                style={{ animationDelay: '800ms' }}
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

              {/* Seal */}
              <div 
                className="relative w-[72px] h-[72px] animate-fade-up"
                style={{ animationDelay: '850ms' }}
              >
                <svg 
                  viewBox="0 0 80 80" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  style={{ filter: 'drop-shadow(0 0 10px rgba(201,168,76,0.35))' }}
                >
                  <circle cx="40" cy="40" r="36" fill="none" stroke="#C9A84C" strokeWidth="1"/>
                  <circle cx="40" cy="40" r="30" fill="none" stroke="#C9A84C" strokeWidth="0.5" strokeDasharray="3 3"/>
                  <circle cx="40" cy="40" r="24" fill="rgba(201,168,76,0.06)" stroke="#C9A84C" strokeWidth="0.8"/>
                  {/* Star points around rim */}
                  <g fill="#C9A84C" opacity="0.6">
                    <polygon points="40,4 41.5,8.5 40,7.5 38.5,8.5" />
                    <polygon points="76,40 71.5,41.5 72.5,40 71.5,38.5" />
                    <polygon points="40,76 38.5,71.5 40,72.5 41.5,71.5" />
                    <polygon points="4,40 8.5,38.5 7.5,40 8.5,41.5" />
                    <polygon points="65,15 61,19 62,17 60,16" />
                    <polygon points="65,65 60,64 62,63 61,61" />
                    <polygon points="15,65 19,61 17,62 16,60" />
                    <polygon points="15,15 16,20 17,18 19,19" />
                  </g>
                </svg>
                <div 
                  className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-[#FFD966] tracking-wide"
                  style={{ fontFamily: 'var(--font-cinzel), Cinzel, serif' }}
                >
                  2026
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
