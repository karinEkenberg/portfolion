export function Skills() {
  fetch("./techstack.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("skills-container");

      data.forEach((skill) => {
        const skillDiv = document.createElement("div");
        skillDiv.classList.add("mx-auto");

        skillDiv.innerHTML = `
            <img class="w-16 h-auto mx-auto" src="${skill.img}" alt="${skill.name}" class="w-full h-auto">
            <p class="text-center text-lightText font-semibold">${skill.name}</p>
          `;
        container.appendChild(skillDiv);
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}

export async function LoadSkills() {
  try {
    const response = await fetch("skills.html");
    if (!response.ok) throw new Error("Could not fetch skills.html");

    const htmlContent = await response.text();
    document.getElementById("skills-placeholder").innerHTML = htmlContent;
  } catch (error) {
    console.error("Error loading skills:", error);
  }
}
