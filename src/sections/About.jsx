import Map from '../components/Map';
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
      <section className="bg-zinc-800 text-zinc-200 py-10 px-4 flex items-center justify-center">
        <div className="flex flex-col-reverse md:flex-row container mx-auto items-center justify-center gap-10">
          <div className="flex flex-col px-4 lg:container mx-auto justify-center">
            <h1 className="text-4xl font-bold text-5xl ">
              Hey, I'm{' '}
              <span className="bg-gradient-to-tl from-[#E8E8E8] via-[#C0C0C0] to-[#A0A0A0] bg-clip-text text-transparent pr-4  ">
                Mstyslav
              </span>
              <span className="inline-flex cursor-pointer  hover:animate-wiggle">
                👋
              </span>
            </h1>
            <p className="py-4 text-lg">
              I'm a 15 year old web developer from Aberdeen,
              <span
                className="cursor-pointer"
                onMouseOver={(e) => handleMouseOver(e, '🏴󠁧󠁢󠁳󠁣󠁴󠁿')}
                onMouseOut={handleMouseOut}
              >
                {' '}
                Scotland.{' '}
              </span>
              I specialise in creating modern and responsible websites in
              <span
                className="cursor-pointer"
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
                className="cursor-pointer"
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
            <p>
              Languages Spoken:{' '}
              <span
                className="cursor-pointer"
                onMouseOver={(e) => handleMouseOver(e, '🇬🇧')}
                onMouseOut={handleMouseOut}
              >
                English,{' '}
              </span>
              <span
                className="cursor-pointer"
                onMouseOver={(e) => handleMouseOver(e, '🇺🇦')}
                onMouseOut={handleMouseOut}
              >
                Ukrainian,{' '}
              </span>
              <span
                className="cursor-pointer"
                onMouseOver={(e) => handleMouseOver(e, '🇷🇺')}
                onMouseOut={handleMouseOut}
              >
                Russian
              </span>
            </p>
            <ul className="flex gap-5 py-5">
              <li>
                <a
                  href="https://github.com/MstyslavSoroka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex border-2 border-zinc-200 rounded-md p-1.5 hover:bg-zinc-200 hover:shadow-lg shadow-zinc-700 transition-all duration-200"
                >
                  <svg className="w-7 h-7">
                    <use
                      href="#icon-github"
                      className="fill-zinc-200 group-hover:fill-zinc-900"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="mailto:mstyslavv@proton.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex border-2 border-zinc-200 rounded-md p-1.5 hover:bg-zinc-200 hover:shadow-lg shadow-zinc-700 transition-all duration-200"
                >
                  <svg className="w-7 h-7">
                    <use
                      href="#icon-email"
                      className="fill-zinc-200  group-hover:fill-zinc-900"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mstyslav-soroka-173903298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex border-2 border-zinc-200 rounded-md p-1.5 hover:bg-zinc-200 hover:shadow-lg shadow-zinc-700 transition-all duration-200"
                >
                  <svg className="w-7 h-7">
                    <use
                      href="#icon-linkedin"
                      className="fill-zinc-200  group-hover:fill-zinc-900"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/mstyslavv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex border-2 border-zinc-200 rounded-md p-1.5 hover:bg-zinc-200 hover:shadow-lg shadow-zinc-700 transition-all duration-200"
                >
                  <svg className="w-7 h-7">
                    <use
                      href="#icon-telegram"
                      className="fill-zinc-200  group-hover:fill-zinc-900"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <Map />
        </div>
      </section>
    </>
  );
}

export default AboutSection;
