// Hämta data från JSON-filen och visa den i HTML
fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    // Logga data för att kolla hur den ser ut
    console.log('Original data:', data);

    // Sortera projekten i omvänd ordning (nyaste först)
    const sortedData = data.sort((a, b) => b.id - a.id);  // Omvänd ordning: b.id - a.id gör att nyaste kommer först

    // Logga de sorterade projekten för att bekräfta korrekt sortering
    console.log('Sorted data:', sortedData);

    const container = document.getElementById('projects-container');

    sortedData.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add(
          'text-white',
          'bg-black', 
          'shadow-lg', 
          'rounded-lg', 
          'p-6', 
          'w-1/4', 
          'hover:shadow-xl', 
          'transition-shadow', 
          'duration-300'
        );

      // Hantera tomma länkar
      const link = project.link 
        ? `<a class="font-bold underline" href="${project.link}" target="_blank">Kika in projektet</a>` 
        : '<span>Inget projekt tillgängligt för visning</span>';

      const githubLink = project.linkToGithub 
        ? `<a class="font-bold underline" href="${project.linkToGithub}" target="_blank">GitHub Repo</a>` 
        : '<span>Inget GitHub repository tillgänglig.</span>';

      // Generera HTML för projektet
      projectDiv.innerHTML = `
        <h2 class="font-bold">${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" class="h-40 w-auto">
        <p>${project.description}</p>
        <p><strong>Verktyg:</strong> ${project.tools.join(', ')}.</p>
        <p>${link} | ${githubLink}</p>
      `;
      
      container.appendChild(projectDiv);
    });
  })
  .catch(error => console.error('Error fetching JSON:', error));
