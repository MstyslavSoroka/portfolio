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
          <div className="py-20 px-4 lg:container mx-auto">
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
                onMouseOver={(e) => handleMouseOver(e, '🏴󠁧󠁢󠁳󠁣󠁴󠁿')}
                onMouseOut={handleMouseOut}
              >
                {' '}
                Scotland.{' '}
              </span>
              I specialise in creating modern and responsible websites in react
              Js.
            </p>
            <p>
              Languages Spoken:{' '}
              <span
                onMouseOver={(e) => handleMouseOver(e, '🇬🇧')}
                onMouseOut={handleMouseOut}
              >
                English
              </span>
              , Ukrainian, Russian
            </p>
            <ul className="flex gap-5">
              <li>
                <a
                  href="https://github.com/MstyslavSoroka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-10 h-10">
                    <use href="#icon-github" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <svg className="w-10 h-10">
                    <use href="#icon-email" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <svg className="w-10 h-10">
                    <use href="#icon-linkedin" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <svg className="w-10 h-10">
                    <use href="#icon-telegram" />
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
