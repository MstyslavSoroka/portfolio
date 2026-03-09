import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-500 flex justify-center pt-10 pb-20 px-5">
      <div className="container flex gap-5 flex-wrap justify-between">
        <div>
          <h3 className="text-zinc-200 pb-5">
            Mstyslav Soroka <br></br>{' '}
            <span className="text-zinc-500">&copy;2026</span>
          </h3>
          <p className="p-2 px-4 border border-zinc-400 rounded-2xl text-zinc-200">
            Built with <br></br>
            <span className="text-zinc-500">
              React.js, Tailwindcss, JavaScript
            </span>
          </p>
        </div>
        <div className="flex gap-20">
          <div>
            <h3 className="text-zinc-200 uppercase pb-3">Explore</h3>
            <ul className="flex flex-col gap-2">
              <li className=" ">
                <NavLink
                  to="/about-me"
                  className="relative group hover:text-zinc-200  transition-all"
                >
                  About Me
                  <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-zinc-200 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/skills"
                  className="relative group hover:text-zinc-200  transition-all "
                >
                  Skills
                  <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-zinc-200 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </NavLink>
              </li>
              <li className=" ">
                <NavLink
                  to="/projects"
                  className="relative group hover:text-zinc-200  transition-all"
                >
                  Projects
                  <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-zinc-200 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-zinc-200 uppercase pb-3">Socials</h3>
            <ul className="flex flex-col gap-2 ">
              <li className="">
                <a
                  className="inline-block text-zinc-500 gap-1 items-center font-grotesk relative group transition-all hover:text-zinc-200 "
                  href="https://github.com/MstyslavSoroka"
                >
                  <svg className="h-5 w-5 float-left mr-2">
                    <use
                      href="#icon-github"
                      className="fill-zinc-500 group-hover:fill-zinc-200 transition-all"
                    ></use>
                  </svg>
                  GitHub
                  <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-zinc-200 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
              <li className="">
                <a
                  className="inline-block text-zinc-500  gap-1 items-center font-grotesk hover:text-zinc-200 relative group transition-all"
                  href="mailto:mstyslavv@proton.me"
                >
                  <svg className="h-5 w-5 float-left mr-2">
                    <use
                      href="#icon-email"
                      className="fill-zinc-500 group-hover:fill-zinc-200 transition-all"
                    ></use>
                  </svg>
                  Email
                  <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-zinc-200 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
              <li className="">
                <a
                  className="inline-block text-zinc-500  gap-1 font-grotesk hover:text-zinc-200 relative group transition-all"
                  href="https://www.linkedin.com/in/mstyslav-soroka-173903298"
                >
                  <svg className="h-5 w-5 float-left mr-2">
                    <use
                      href="#icon-linkedin"
                      className="fill-zinc-500 group-hover:fill-zinc-200 transition-all"
                    ></use>
                  </svg>
                  LinkedIn
                  <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-zinc-200 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>

              <li className="">
                <a
                  className="inline-block text-zinc-500 gap-1 items-center font-grotesk hover:text-zinc-200 relative group transition-all "
                  href="https://t.me/mstyslavv"
                >
                  <svg className="h-5 w-5 float-left mr-2">
                    <use
                      href="#icon-telegram"
                      className="fill-zinc-500 group-hover:fill-zinc-200 transition-all"
                    ></use>
                  </svg>
                  Telegram
                  <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-zinc-200 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 p-2 px-4 border border-zinc-400 rounded-2xl text-zinc-500 group hover:border-zinc-200">
            <p className="group-hover:text-zinc-200 transition-colors">
              Contact Me
            </p>
            <button className="bg-zinc-200 p-1.5 md:pr-5 rounded-full">
              <svg className="w-5 h-5 group-hover:translate-x-4 transition-all">
                <use href="#icon-arrow" className="fill-zinc-950"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
