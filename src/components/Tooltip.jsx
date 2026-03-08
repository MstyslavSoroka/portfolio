import { useRef } from 'react';

function ToolTip({ anchor, content }) {
  //   const elemRef = useRef();

  let xPos = 0;
  let yPos = 0;

  if (anchor !== null) {
    xPos =
      anchor.getBoundingClientRect().x +
      anchor.getBoundingClientRect().width / 2 -
      15;
    yPos =
      anchor.getBoundingClientRect().y -
      anchor.getBoundingClientRect().height -
      15;
  }

  return (
    <>
      <div
        className="absolute"
        style={{ left: xPos || -100, top: yPos || -100 }}
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
