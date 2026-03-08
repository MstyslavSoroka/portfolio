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
        className={`bg-zinc-900 w-100 h-full flex flex-col p-7.5 transform transition-transform duration-300  ${
          shown ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav>
          <div className="flex justify-between items-center border-b border-zinc-800 pb-2 text-sm">
            <p className="font-grotesk uppercase">navigation</p>
            <div
              className="flex  bg-zinc-900/60  flex items-center rounded-full p-2 border-1 border-zinc-800 cursor-pointer"
              onClick={() => setShown(false)}
            >
              <span className="flex items-center relative z-10 px-6 py-1 rounded-full">
                ~<span>{location.pathname}/</span>
                <span className="ml-0.5 inline-block animate-[pulseDisappear_1.5s_ease-in-out_infinite] h-4 w-2 bg-zinc-200/70"></span>
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
        </nav>
      </div>
    </div>
  );
}

export default SideMenu;
