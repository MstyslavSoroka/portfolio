function Header() {
  return (
    <>
      <header className="flex bg-zinc-800 text-zinc-200 justify-center">
        <nav className="flex items-center w-full py-4 lg:container justify-between">
          <a>
            ~/
            <span></span>
          </a>

          <ul className="flex justify-between gap-5 border-zinc-600 border-2 rounded-2xl px-4 py-2 bg-zinc-900">
            <li className="cursor-pointer p-1 rounded-lg transition ease-in-out duration-200 hover:bg-zinc-300 hover:text-zinc-900">
              About Me
            </li>
            <li>Skills</li>
            <li>Projects</li>
          </ul>
          <button className="">|||</button>
        </nav>
      </header>
    </>
  );
}

export default Header;
