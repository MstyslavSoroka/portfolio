import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import icon from '../assets/sprite.svg';
import SideMenu from '../components/SideMenu';

const navItems = [
  { label: 'About Me', path: '/about-me' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
];

function Header() {
  const [active, setActive] = useState(0);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

  const [menuShown, setMenuShown] = useState(false);

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
    <header className="flex bg-zinc-950 text-zinc-200 justify-center px-5">
      <SideMenu shown={menuShown} setShown={setMenuShown} />
      <nav className="flex font-jetbrains items-center w-full py-4 lg:container justify-between">
        <div className="flex  bg-zinc-900/60  flex items-center rounded-full p-2 border-1 border-zinc-800">
          <span className="flex items-center relative z-10 px-6 py-3 rounded-full">
            <NavLink to="/" className="cursor-pointer">
              ~
            </NavLink>
            <span>{location.pathname}/</span>
            <span className="ml-0.5 inline-block animate-[pulseDisappear_1.5s_ease-in-out_infinite] h-4 w-2 bg-zinc-200/70"></span>
          </span>
        </div>

        <div className="hidden md:flex md:absolute left-[50%] md:-translate-x-1/2">
          <div
            ref={containerRef}
            className="relative bg-zinc-900/60 flex items-center rounded-full p-2 border-1 border-zinc-800"
          >
            <div
              className="absolute top-2 h-[74%] rounded-full bg-linear-to-b from-[#E8E8E8] via-[#C0C0C0] to-[#A0A0A0] shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out"
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

        <div
          className="group h-full aspect-square flex items-center justify-center rounded-full bg-zinc-900/60 border-1 border-zinc-800 hover:shadow-[0_0_15px_0_rgba(82,82,91,0.6)] transition-all duration-300 cursor-pointer"
          onClick={() => setMenuShown(true)}
        >
          <button className="p-2 cursor-pointer group-hover:rotate-90 transition-transform duration-300">
            <svg className="h-6 w-6 fill-zinc-200 transition-colors">
              <use href="#icon-menu" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
