import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import icon from '../assets/sprite.svg';

const navItems = [
  { label: 'About Me', path: '/about-me' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
];

function Header() {
  const [active, setActive] = useState(0);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  const containerRef = useRef(null);
  const buttonsRef = useRef([]);
  const location = useLocation();

  useEffect(() => {
    const activeIndex = navItems.findIndex(
      (item) => item.path === location.pathname,
    );
    if (activeIndex !== -1) {
      setActive(activeIndex);
    }
  }, [location]);

  useEffect(() => {
    const activeButton = buttonsRef.current[active];
    if (activeButton) {
      const { offsetLeft, offsetWidth } = activeButton;
      setPillStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [active]);

  return (
    <header className="flex bg-zinc-800 text-zinc-200 justify-center px-5">
      <nav className="flex items-center w-full py-4 lg:container justify-between">
        <div className="flex font-mono relative h-[64px] scale-100  flex items-center rounded-full p-2">
          <div className="absolute inset-0 rounded-full bg-linear-to-b from-neutral-700 to-neutral-800 shadow-[0_8px_32px_rgba(0,0,0,0.6)]" />
          <div className="absolute inset-0.75 rounded-full bg-linear-to-b from-neutral-800 to-neutral-900" />
          <div className="absolute inset-2 rounded-full bg-white/5 backdrop-blur-sm" />
          <span className="relative z-10 px-6 py-3 rounded-full">
            <NavLink to="/" className="cursor-pointer">
              ~
            </NavLink>
            <span>{location.pathname}/</span>
          </span>
        </div>

        <div className="hidden md:flex md:absolute left-[50%] md:-translate-x-1/2">
          <div
            ref={containerRef}
            className="relative h-[64px] flex items-center rounded-full p-2"
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

            {navItems.map((item, i) => (
              <NavLink key={item.path} to={item.path}>
                <span
                  ref={(el) => (buttonsRef.current[i] = el)}
                  className="relative z-10 px-6 py-3 rounded-full cursor-pointer inline-block"
                >
                  <span
                    className={`text-base font-medium transition-colors ${
                      i === active ? 'text-neutral-900' : 'text-neutral-300'
                    }`}
                  >
                    {item.label}
                  </span>
                </span>
              </NavLink>
            ))}
          </div>
        </div>

        <div className="font-mono scale-100 relative h-[64px] flex items-center rounded-full p-2">
          <div className="absolute inset-0 rounded-full bg-linear-to-b from-neutral-700 to-neutral-800 shadow-[0_8px_32px_rgba(0,0,0,0.6)]" />
          <div className="absolute inset-0.75 rounded-full bg-linear-to-b from-neutral-800 to-neutral-900" />
          <div className="absolute inset-2 rounded-full bg-white/5 backdrop-blur-sm" />
          <button className="relative z-10 p-2">
            <svg className="h-5 w-5 fill-white ">
              <use href="#icon-menu" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
