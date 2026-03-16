import { useEffect, useState } from 'react';
import Cursor from '../components/Cursor';
import Modal from '../components/Modal';
import { BarWave } from 'react-cssfx-loading';
import { GitHubCalendar } from 'react-github-calendar';

function Projects() {
  const [filterRepo, setFilterRepo] = useState([]);
  const [cursorIsActive, setCursorIsActive] = useState(false);
  const [modalIsActive, setModalIsActive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepo = async () => {
      const cached = localStorage.getItem('repos');

      if (cached) {
        setFilterRepo(JSON.parse(cached));
        console.log(`using cached stuff`);
        setLoading(false);
        console.log(JSON.parse(cached));

        return;
      }

      let page = 1;
      let allRepos = [];

      while (true) {
        const res = await fetch(
          `https://api.github.com/users/MstyslavSoroka/repos?page=${page}&per_page=100`,
          {
            headers: {
              Accept: 'application/vnd.github+json',
              Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            },
          },
        );

        const repos = await res.json();
        if (repos.length === 0) break;

        allRepos = [...allRepos, ...repos];
        page++;
      }

      const filtered = allRepos.filter((repo) =>
        repo.topics?.includes('portfolio-showcase'),
      );

      setFilterRepo(filtered);
      localStorage.setItem('repos', JSON.stringify(filtered));
      setLoading(false);
      console.log(filtered);
    };

    fetchRepo();
  }, []);

  return (
    <>
      <Modal active={modalIsActive}></Modal>
      <Cursor active={cursorIsActive}></Cursor>
      <section className="flex items-center justify-center bg-zinc-950 font-grotesk px-5">
        <div className="container py-10 sm:py-30">
          <div className="flex justify-center">
            <GitHubCalendar
              username="MstyslavSoroka"
              responsive
              showTotalCount={false}
              showColorLegend={false}
              showMonthLabels={false}
              blockSize={12}
              theme={{
                dark: ['#18181b', '#3f3f46', '#52525b', '#71717a', '#a1a1aa'],
              }}
            />
          </div>
          <div className=" sm:flex justify-between items-center">
            <h1 className="text-zinc-200 text-4xl gap-5 font-black flex py-5">
              <svg className="h-10 w-10">
                <use href="#icon-github" className="fill-zinc-200"></use>
              </svg>{' '}
              My Projects
            </h1>
            <button
              className="uppercase text-zinc-200 text-xl border border-zinc-800 px-5 py-2 rounded-full font-jetbrains hover:border-zinc-200 transition-colors"
              onClick={() => {
                localStorage.removeItem('repos');
                setModalIsActive(true);
              }}
            >
              Reload
            </button>
          </div>
          <div className="py-10 flex gap-10 w-full  flex-wrap justify-between">
            {loading ? (
              <div className="flex justify-center items-center py-30 w-full">
                <BarWave color="#e4e4e7" />
              </div>
            ) : (
              filterRepo.map((item) => (
                <div
                  onMouseOver={() => {
                    setCursorIsActive(true);
                  }}
                  onMouseOut={() => {
                    setCursorIsActive(false);
                  }}
                  key={item.id}
                  className="text-zinc-500 border border-zinc-800 rounded-2xl w-full md:w-[calc(50%-80px/2)] lg:w-[calc(33%-80px/3)] hover:border-zinc-200/30 transition-all cursor-none"
                >
                  <div className="bg-zinc-800/50 p-5 rounded-t-2xl">
                    <div>
                      <div className="flex justify-between">
                        <ul className="flex items-center gap-2">
                          <li className="bg-[#FF5F57] rounded-full group">
                            <svg className="opacity-0 w-4 h-4 group-hover:opacity-100 transition-opacity">
                              <use
                                href="#icon-close"
                                className="fill-black"
                              ></use>
                            </svg>
                          </li>
                          <li className="bg-[#FEBC2E] rounded-full group">
                            <svg className="opacity-0 w-4 h-4 group-hover:opacity-100 transition-opacity">
                              <use
                                href="#icon-minimize"
                                className="fill-black"
                              ></use>
                            </svg>
                          </li>
                          <li className="bg-[#28C840] rounded-full group p-1">
                            <svg className="opacity-0 w-2 h-2 group-hover:opacity-100 transition-opacity">
                              <use
                                href="#icon-maximize"
                                className="fill-black"
                              ></use>
                            </svg>
                          </li>
                        </ul>

                        <p className="flex items-center gap-2">
                          <svg className="w-4 h-4">
                            <use
                              href="#icon-star"
                              className="fill-amber-300"
                            ></use>
                          </svg>{' '}
                          {item.stargazers_count}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h2 className="py-2 text-xl text-zinc-200">
                        {item.owner.login} / {item.name}
                      </h2>
                      <p>Link to</p>
                      <ul className="flex gap-4">
                        <li className="relative group ">
                          <a
                            href={item.homepage}
                            target="_blank"
                            className="group-hover:text-zinc-200 cursor-none"
                          >
                            Preview
                            <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-zinc-200 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
                          </a>
                        </li>
                        <li className="relative group ">
                          <a
                            href={item.html_url}
                            target="_blank"
                            className="group-hover:text-zinc-200 cursor-none"
                          >
                            Github page
                            <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-zinc-200 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="flex justify-between pb-2">
                      {item.name} <span>{item.created_at.slice(0, 10)}</span>
                    </h3>
                    <p className="pb-5">{item.description}</p>
                    <div>
                      <ul className="flex gap-2 flex-wrap items-center">
                        <li>
                          <svg className="w-4 h-4">
                            <use
                              href="#icon-tag"
                              className="fill-zinc-200"
                            ></use>
                          </svg>
                        </li>
                        {item.topics
                          .filter((topic) => topic !== 'portfolio-showcase')
                          .map((topic) => (
                            <li
                              className="border border-zinc-800 px-3 rounded-2xl hover:border-zinc-200/80 transition-colors"
                              key={topic}
                            >
                              {topic}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
