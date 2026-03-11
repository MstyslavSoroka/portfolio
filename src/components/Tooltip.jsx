import { useEffect, useRef, useState } from 'react';

function ToolTip({ anchor, content }) {
  //   const elemRef = useRef();
  const [pos, setPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    if (!anchor) return;
    setPos({
      x:
        anchor.getBoundingClientRect().x +
        anchor.getBoundingClientRect().width / 2 -
        15,
      y:
        anchor.getBoundingClientRect().top +
        window.scrollY -
        anchor.getBoundingClientRect().height -
        15,
    });
  }, [anchor]);

  return (
    <>
      <div
        className="absolute"
        style={{ left: pos.x || -100, top: pos.y || -100 }}
      >
        <div
          className={`flex flex-col items-center transition-all duration-300 ${
            anchor ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'
          }`}
        >
          <div className="bg-zinc-900 rounded-md px-1.5 z-20">
            <p className="text-2xl text-center">{content}</p>
          </div>

          <div className="w-3 h-3 -mt-2 z-10">
            <div className="w-full h-full bg-zinc-900 rotate-45 transform origin-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToolTip;
