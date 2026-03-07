function SideMenu({ shown }) {
  if (!shown) return null;
  console.log('SideMenu rendered');
  return (
    <>
      <div className="flex justify-end absolute z-999 w-screen h-screen">
        <div className="bg-zinc-900 w-[300px] ">
          <h1>HEllo</h1>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
