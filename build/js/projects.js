export function projects() {
  let currentIndex = 0;
  let projectsData = [];
  const projectsPerPage = 3;
  const container = document.getElementById("projects-container");
  const loadMoreButton = document.getElementById("load-more-btn");

  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      projectsData = data.sort((a, b) => b.id - a.id);
      renderProjects();
    })
    .catch((error) => console.error("Error fetching JSON:", error));

  function renderProjects() {
    const nextProjects = projectsData.slice(
      currentIndex,
      currentIndex + projectsPerPage
    );
    nextProjects.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add(
        "w-[80%]",
        "mx-auto",
        "lg:w-[30%]",
        "md:w-[45%]",
        "text-lightText",
        "bg-gradient-to-b",
        "from-secondaryBackground",
        "to-accent",
        "shadow-lg",
        "rounded-lg",
        "hover:shadow-xl",
        "transition-shadow",
        "duration-300",
        "relative",
        "overflow-hidden"
      );

      const link = project.link
        ? `<a class="font-bold underline" href="${project.link}" target="_blank">Check out the project</a>`
        : "<span>No project available for viewing</span>";

      const githubLink = project.linkToGithub
        ? `<a class="font-bold underline" href="${project.linkToGithub}" target="_blank">GitHub Repo</a>`
        : "<span>No GitHub repo available.</span>";

      projectDiv.innerHTML = `
          <img src="${project.image}" alt="${project.title}" class="w-full h-auto">
          <h3 class="font-bold text-center pt-5 text-2xl">${project.title}</h3>
          <div class="py-5">
            <p class="description pl-5 pr-5">${project.description}</p>
          </div>
          <div class="pb-2">
          <div class="flex flex-wrap gap-2 justify-center mt-2">
  ${project.tools
    .map(
      (tool) =>
        `<span class="bg-secondaryBackground text-lightText px-2 py-1 rounded-full text-sm transition-all">${tool}</span>`
    )
    .join("")}
</div>
          </div>
          <p class="text-center pb-5">${link} | ${githubLink}</p>
        `;

      container.appendChild(projectDiv);
    });

    currentIndex += projectsPerPage;

    if (currentIndex >= projectsData.length) {
      loadMoreButton.style.display = "none";
    }
  }

  loadMoreButton.addEventListener("click", renderProjects);
}
