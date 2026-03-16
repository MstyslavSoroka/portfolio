function Modal({ active }) {
  if (!active) {
    return;
  }
  console.log('modal');
  return (
    <>
      <div className="flex justify-center items-center fixed z-20 inset-0 bg-zinc-950/50 backdrop-blur-sm transition-opacity duration-300 ">
        <div className="bg-zinc-950 py-5 px-10 rounded-2xl border border-zinc-800">
          <h1 className="text-zinc-200">Reload the Page to see changes</h1>
        </div>
      </div>
    </>
  );
}

export default Modal;
