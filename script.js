// Hämta data från JSON-filen och visa den i HTML
fetch("/data.json")
  .then((response) => response.json())
  .then((data) => {
    // Logga data för att kolla hur den ser ut
    console.log("Original data:", data);

    // Sortera projekten i omvänd ordning (nyaste först)
    const sortedData = data.sort((a, b) => b.id - a.id); // Omvänd ordning: b.id - a.id gör att nyaste kommer först

    // Logga de sorterade projekten för att bekräfta korrekt sortering
    console.log("Sorted data:", sortedData);

    const container = document.getElementById("projects-container");

    sortedData.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add(
        "w-full",
        "mx-auto",
        "lg:w-1/4",
        "text-whiteish",
        "bg-darkestish",
        "shadow-lg",
        "rounded-lg",
        "hover:shadow-xl",
        "transition-shadow",
        "duration-300"
      );

      // Hantera tomma länkar
      const link = project.link
        ? `<a class="font-bold underline" href="${project.link}" target="_blank">Check out the project</a>`
        : "<span>No project available for viewing</span>";

      const githubLink = project.linkToGithub
        ? `<a class="font-bold underline" href="${project.linkToGithub}" target="_blank">GitHub Repo</a>`
        : "<span>No GitHub repo available.</span>";

      // Generera HTML för projektet
      projectDiv.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="w-full h-auto">
        <h3 class="font-bold text-center pt-5 text-2xl">${project.title}</h3>
        <div class="py-5"><p class="mx-5">${project.description}</p></div>
        <p class="text-center"><strong>Tools:</strong> ${project.tools.join(", ")}.</p>
        <p class="text-center pb-5">${link} | ${githubLink}</p>
      `;

      container.appendChild(projectDiv);
    });
  })
  .catch((error) => console.error("Error fetching JSON:", error));
