function Modal({ active }) {
  if (!active) {
    return;
  }
  console.log('modal');
  return (
    <>
      <div className="flex justify-end fixed z-20 inset-0 bg-zinc-950/50 backdrop-blur-sm transition-opacity duration-300 ">
        <div className="bg-zinc-950 absolute top-1/2 left-1/2">
          <h1 className="text-zinc-200">Reload the Page to see changes</h1>
        </div>
      </div>
    </>
  );
}

export default Modal;
