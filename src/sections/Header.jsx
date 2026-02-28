import React from 'react';
import { useEffect, useRef, useState } from 'react';
import icon from '../assets/sprite.svg';

const navItems = ['About Me', 'Skills', 'Projects'];

function Header() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);
  const buttonsRef = useRef([]);

  const [pillStyle, setPillStyle] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const activeButton = buttonsRef.current[active];
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setPillStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [active]);

  return (
    <>
      <header className="flex bg-zinc-800 text-zinc-200 justify-center">
        <nav className="flex items-center w-full py-4 lg:container justify-between">
          <a className="font-mono">
            ~/
            <span></span>
          </a>
          <div
            ref={containerRef}
            className="relative h-[64px] scale-75 sm:scale-100 flex items-center rounded-full p-2"
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-b from-neutral-700 to-neutral-800 shadow-[0_8px_32px_rgba(0,0,0,0.6)]" />
            <div className="absolute inset-0.75 rounded-full bg-linear-to-b from-neutral-800 to-neutral-900" />

            <div className="absolute inset-2 rounded-full bg-white/5 backdrop-blur-sm" />

            <div
              className="absolute top-2 h-[48px] rounded-full bg-linear-to-b from-[#E8E8E8] via-[#C0C0C0] to-[#A0A0A0] shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
              }}
            />

            {navItems.map((label, i) => (
              <button
                key={label}
                ref={(el) => (buttonsRef.current[i] = el)}
                onClick={() => setActive(i)}
                className="relative z-10 px-6 py-3 rounded-full cursor-pointer"
              >
                <span
                  className={`text-base font-medium transition-colors ${
                    i === active ? 'text-neutral-900' : 'text-neutral-300'
                  }`}
                >
                  {label}
                </span>
              </button>
            ))}
          </div>

          <button className="p-2 rounded-md border border-zinc-600 hover:border-zinc-400 transition-colors">
            <svg className="h-5 w-5 fill-white hover:rotate-90 transition-transform">
              <use href={`#icon-menu`} />
            </svg>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
