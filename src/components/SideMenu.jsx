import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function SideMenu({ shown, setShown }) {
  useEffect(() => {
    if (shown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [shown]);

  useEffect((e) => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        setShown(false);
      }
    });
  });
  return (
    <div
      className={`flex justify-end fixed z-20 inset-0 bg-zinc-950/50 backdrop-blur-sm transition-opacity duration-300 ${
        shown
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => setShown(false)}
    >
      <div
        className={`bg-zinc-900 w-screen  sm:w-120 h-full flex flex-col p-7.5 transform transition-transform duration-300  ${
          shown ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="flex flex-col justify-between h-full font-grotesk">
          <div className="flex justify-between items-center border-b border-zinc-800 pb-4 text-sm">
            <p className="font-grotesk uppercase">navigation</p>
            <div
              className="flex  bg-zinc-800/20  flex items-center rounded-full p-2 border-1 border-zinc-800 cursor-pointer"
              onClick={() => setShown(false)}
            >
              <span className="flex items-center relative z-10 px-6 py-1 rounded-full">
                ~<span>{location.pathname}/</span>
                <span className="ml-0.5 inline-block animate-[pulseDisappear_1.5s_ease-in-out_infinite] h-3.5 w-2 bg-zinc-200/70"></span>
              </span>
            </div>
          </div>
          <div>
            <ul className="flex flex-col text-zinc-500/40 gap-10">
              <li onClick={() => setShown(false)}>
                <NavLink
                  to="/about-me"
                  className="cursor-pointer text-4xl  uppercase font-grotesk font-black hover:text-zinc-200 transition-colors"
                >
                  About Me
                </NavLink>
              </li>
              <li onClick={() => setShown(false)}>
                <NavLink
                  to="/skills"
                  className="cursor-pointer text-4xl  uppercase font-grotesk font-black hover:text-zinc-200 transition-colors"
                >
                  Skills
                </NavLink>
              </li>
              <li onClick={() => setShown(false)}>
                <NavLink
                  to="/projects"
                  className="cursor-pointer text-4xl  uppercase font-grotesk font-black hover:text-zinc-200 transition-colors"
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="border-t border-zinc-800 pt-4">
            <div className="flex justify-between flex-wrap gap-5">
              <p className="flex items-center bg-zinc-800/20 border border-zinc-800  rounded-3xl px-4 py-2">
                <span className="w-2 h-2 rounded-full inline-block bg-green-500 animate-[pulseDisappear_2s_ease-in-out_infinite] mr-1"></span>
                Open to Work
              </p>
              <p className="flex items-center bg-zinc-800/20 border border-zinc-800  rounded-3xl px-4 py-2 cursor-pointer">
                Contact Me
              </p>
            </div>
            <div className="pt-5">
              <p className="font-jetbrains uppercase text-zinc-500">Socials</p>
              <ul className="flex pt-2 gap-3 flex-wrap">
                <li className="group">
                  <a
                    className="flex text-zinc-500 gap-1 items-center font-grotesk group-hover:text-zinc-200 "
                    href="https://github.com/MstyslavSoroka"
                  >
                    <svg className="h-5 w-5">
                      <use
                        href="#icon-github"
                        className="fill-zinc-500 group-hover:fill-zinc-200 transition-all"
                      ></use>
                    </svg>
                    GitHub
                  </a>
                </li>
                <li className="group">
                  <a
                    className="flex text-zinc-500  gap-1 items-center font-grotesk group-hover:text-zinc-200 "
                    href="mailto:mstyslavv@proton.me"
                  >
                    <svg className="h-5 w-5">
                      <use
                        href="#icon-email"
                        className="fill-zinc-500 group-hover:fill-zinc-200 transition-all"
                      ></use>
                    </svg>
                    Email
                  </a>
                </li>
                <li className="group">
                  <a
                    className="flex text-zinc-500  gap-1 font-grotesk group-hover:text-zinc-200 "
                    href="https://www.linkedin.com/in/mstyslav-soroka-173903298"
                  >
                    <svg className="h-5 w-5">
                      <use
                        href="#icon-linkedin"
                        className="fill-zinc-500 group-hover:fill-zinc-200 transition-all"
                      ></use>
                    </svg>
                    LinkedIn
                  </a>
                </li>

                <li className="group">
                  <a
                    className="flex text-zinc-500 gap-1 items-center font-grotesk group-hover:text-zinc-200 "
                    href="https://t.me/mstyslavv"
                  >
                    <svg className="h-5 w-5">
                      <use
                        href="#icon-telegram"
                        className="fill-zinc-500 group-hover:fill-zinc-200 transition-all"
                      ></use>
                    </svg>
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideMenu;
