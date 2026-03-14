import Map from '../components/Map';
import Header from './Header';

import ToolTip from '../components/Tooltip';
import { useState } from 'react';

function AboutSection() {
  const [anchor, setAnchor] = useState(null);
  const [content, setContent] = useState('');

  const handleMouseOver = (e, tooltipContent) => {
    setAnchor(e.currentTarget);
    setContent(tooltipContent);
  };

  const handleMouseOut = () => {
    setAnchor(null);
    setContent('');
  };

  return (
    <>
      <ToolTip anchor={anchor} content={content} />
      <section className="bg-zinc-950 font-grotesk bg-[url(/gradient.png)] bg-no-repeat bg-center bg-size-[auto_100%] text-zinc-400 py-10 min-h-[calc(100vh-90px)]  px-4 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row container mx-auto items-center justify-center gap-10">
          <div className="flex flex-col container mx-auto justify-center">
            <p className="py-2 font-jetbrains">// welcome to my portfolio</p>
            <h1 className="text-4xl font-bold text-5xl text-zinc-200">
              Hey, I'm{' '}
              <span className="bg-gradient-to-tl from-[#E8E8E8] via-[#C0C0C0] to-[#A0A0A0] bg-clip-text text-transparent pr-4  ">
                Mstyslav
              </span>
              <span className="inline-flex cursor-pointer  hover:animate-wiggle">
                👋
              </span>
            </h1>
            <p className="py-4 text-lg max-w-125">
              I'm a 15 year old web developer from Aberdeen,
              <span
                className="cursor-pointer font-black text-zinc-200"
                onMouseOver={(e) => handleMouseOver(e, '🏴󠁧󠁢󠁳󠁣󠁴󠁿')}
                onMouseOut={handleMouseOut}
              >
                {' '}
                Scotland.{' '}
              </span>
              I specialise in creating modern and responsible websites in
              <span
                className="cursor-pointer font-black text-zinc-200"
                onMouseOver={(e) =>
                  handleMouseOver(
                    e,
                    <svg className="w-7 h-7">
                      <use href="#icon-react" className="fill-[#61DBFB]" />
                    </svg>,
                  )
                }
                onMouseOut={handleMouseOut}
              >
                {' '}
                React.Js{' '}
              </span>
              and
              <span
                className="cursor-pointer font-black text-zinc-200"
                onMouseOver={(e) =>
                  handleMouseOver(
                    e,
                    <svg className="w-7 h-7">
                      <use
                        href="#icon-tailwindcss"
                        className="fill-[#61DBFB]"
                      />
                    </svg>,
                  )
                }
                onMouseOut={handleMouseOut}
              >
                {' '}
                Tailwind CSS
              </span>
            </p>
            <div className="flex gap-5 text-lg items-center flex-wrap">
              <p>Languages Spoken: </p>
              <ul className="flex gap-2 text-zinc-200 flex-wrap">
                <li
                  className="cursor-pointer bg-zinc-800 py-0.5 px-3 rounded-full"
                  onMouseOver={(e) => handleMouseOver(e, '🇬🇧')}
                  onMouseOut={handleMouseOut}
                >
                  English
                </li>
                <li
                  className="cursor-pointer bg-zinc-800 py-0.5 px-3 rounded-full"
                  onMouseOver={(e) => handleMouseOver(e, '🇺🇦')}
                  onMouseOut={handleMouseOut}
                >
                  Ukrainian
                </li>
                <li
                  className="cursor-pointer bg-zinc-800 py-0.5 px-3 rounded-full"
                  onMouseOver={(e) => handleMouseOver(e, '🇷🇺')}
                  onMouseOut={handleMouseOut}
                >
                  Russian
                </li>
              </ul>
            </div>
            <ul className="flex gap-5 py-5">
              <li>
                <a
                  href="https://github.com/MstyslavSoroka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex border-2 border-zinc-400 rounded-xl p-1.5 hover:bg-zinc-200 hover:shadow-lg shadow-zinc-700 transition-all duration-200"
                >
                  <svg className="w-7 h-7">
                    <use
                      href="#icon-github"
                      className="fill-zinc-400 group-hover:fill-zinc-900"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mstyslavv@proton.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex border-2 border-zinc-400 rounded-xl p-1.5 hover:bg-zinc-200 hover:shadow-lg shadow-zinc-700 transition-all duration-200"
                >
                  <svg className="w-7 h-7">
                    <use
                      href="#icon-email"
                      className="fill-zinc-400  group-hover:fill-zinc-900"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mstyslav-soroka-173903298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex border-2 border-zinc-400 rounded-xl p-1.5 hover:bg-zinc-200 hover:shadow-lg shadow-zinc-700 transition-all duration-200"
                >
                  <svg className="w-7 h-7">
                    <use
                      href="#icon-linkedin"
                      className="fill-zinc-400  group-hover:fill-zinc-900"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/mstyslavv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex border-2 border-zinc-400 rounded-xl p-1.5 hover:bg-zinc-200 hover:shadow-lg shadow-zinc-700 transition-all duration-200"
                >
                  <svg className="w-7 h-7">
                    <use
                      href="#icon-telegram"
                      className="fill-zinc-400  group-hover:fill-zinc-900"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <div className="flex">
              <div className="bg-zinc-800/40 px-7 py-5 border border-zinc-800 rounded-2xl ">
                <ul className="flex gap-7 flex-wrap">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full inline-block bg-green-500 animate-[pulseDisappear_2s_ease-in-out_infinite] mr-1"></span>
                    <div>
                      <h4 className="uppercase font-jetbrains text-sm">
                        status
                      </h4>
                      <p className="text-md text-zinc-200">Open to work</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full inline-block bg-zinc-500  mr-1"></span>
                    <div>
                      <h4 className="uppercase font-jetbrains text-sm">
                        work experience
                      </h4>
                      <p className="text-md text-zinc-200">0 years</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full inline-block bg-zinc-500  mr-1"></span>
                    <div>
                      <h4 className="uppercase font-jetbrains text-sm">
                        coding experience
                      </h4>
                      <p className="text-md text-zinc-200">2.5 years</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Map />
        </div>
        <div className="hidden absolute bottom-5 md:bottom-10 lg:flex flex-col items-center gap-2">
          <p className="font-jetbrains tracking-widest">SCROLL</p>
          <div className="w-[1.5px] h-8 bg-linear-to-b from-zinc-200 via-zinc-500 to-zinc-900"></div>
        </div>
      </section>
    </>
  );
}

export default AboutSection;
