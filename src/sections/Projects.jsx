import { useEffect } from 'react';

function Projects() {
  useEffect(() => {
    const fetchRepo = async () => {
      let page = 1;
      let allRepos = [];

      if (!localStorage.getItem('repos')) {
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
        const filterRepo = allRepos.filter((repo) =>
          repo.topics?.includes('portfolio-showcase'),
        );
        localStorage.setItem('repos', JSON.stringify(filterRepo));
        console.log(filterRepo);
      } else {
        console.log(`Already got repos ${localStorage.getItem('repos')}`);
      }
    };

    fetchRepo();
  }, []);
  return (
    <>
      <section className="flex items-center justify-center bg-zinc-950 font-grotesk">
        <div className="container py-30">
          <h1 className="text-zinc-200 text-4xl font-black flex">
            <svg className="h-10 w-10">
              <use href="#icon-github" className="fill-zinc-200"></use>
            </svg>{' '}
            My Projects
          </h1>
        </div>
      </section>
    </>
  );
}

export default Projects;
