import { useEffect } from 'react';

function Cursor({ active }) {
  if (!active) {
    return;
  }
  useEffect(() => {
    const dot = document.querySelector('.dot');
    const outline = document.querySelector('.outline');

    window.addEventListener('mousemove', (e) => {
      const posY = e.clientY;
      const posX = e.clientX;

      dot.style.left = `${posX}px`;
      dot.style.top = `${posY}px`;

      outline.style.left = `${posX}px`;
      outline.style.top = `${posY}px`;

      outline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 100, fill: 'forwards' },
      );
    });
    window.addEventListener('mousedown', (e) => {
      outline.style.width = '50px';
      outline.style.height = '50px';
    });
    window.addEventListener('mouseup', (e) => {
      setTimeout(() => {
        outline.style.width = '32px';
        outline.style.height = '32px';
      }, 200);
    });
  });

  return (
    <>
      <div className="dot w-1 h-1 fixed bg-zinc-200 top-0 left-0 -translate-1/2 rounded-full z-1 pointer-events-none"></div>
      <div className="outline w-8 h-8 border-2 border-zinc-200/50 transition-all fixed top-0 left-0 -translate-1/2 rounded-full z-1 pointer-events-none"></div>
    </>
  );
}

export default Cursor;
