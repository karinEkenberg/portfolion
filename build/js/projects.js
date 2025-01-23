export function projects() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      const sortedData = data.sort((a, b) => b.id - a.id);

      const container = document.getElementById("projects-container");

      sortedData.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add(
          "w-full",
          "lg:w-1/4",
          "text-whiteish",
          "bg-darkestish",
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
            <p class="description hidden">${project.description}</p>
            <button class="toggle-description mx-5 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">
              Show More
            </button>
          </div>
          <div>
          <p class="text-center"><strong>Tools:</strong> ${project.tools.join(", ")}.</p>
          </div>
          <p class="text-center pb-5">${link} | ${githubLink}</p>
        `;

        container.appendChild(projectDiv);

        const toggleButton = projectDiv.querySelector(".toggle-description");
        const description = projectDiv.querySelector(".description");

        toggleButton.addEventListener("click", () => {
          if (description.classList.contains("hidden")) {
            description.classList.remove("hidden");
            toggleButton.textContent = "Show Less";
          } else {
            description.classList.add("hidden");
            toggleButton.textContent = "Show More";
          }
        });
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}
