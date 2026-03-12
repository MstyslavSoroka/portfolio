import { useEffect, useState } from 'react';

function Projects() {
  const [filterRepo, setFilterRepo] = useState([]);

  useEffect(() => {
    const fetchRepo = async () => {
      const cached = localStorage.getItem('repos');

      if (cached) {
        setFilterRepo(JSON.parse(cached));
        console.log(`using cached stuff`);
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
      console.log(filtered);
    };

    fetchRepo();
  }, []);
  return (
    <>
      <section className="flex items-center justify-center bg-zinc-950 font-grotesk">
        <div className="container py-30">
          <h1 className="text-zinc-200 text-4xl gap-5 font-black flex">
            <svg className="h-10 w-10">
              <use href="#icon-github" className="fill-zinc-200"></use>
            </svg>{' '}
            My Projects
          </h1>
          <div>
            {filterRepo.map((item) => (
              <div key={item.id} className="text-zinc-500">
                <div>
                  <div>
                    <div>
                      <ul>
                        <li>o</li>
                        <li>o</li>
                        <li>o</li>
                      </ul>
                      <p>{item.stargazers_count}</p>
                    </div>
                  </div>
                  <div>
                    <h2>
                      {item.owner.login} / {item.name}
                    </h2>
                    <p>Link to</p>
                    <ul>
                      <li>
                        <a href={item.homepage} target="_blank">
                          Preview
                        </a>
                      </li>
                      <li>
                        <a href={item.html_url} target="_blank">
                          Github page
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3>
                    {item.name} <span>{item.created_at.slice(0, 10)}</span>
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
