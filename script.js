// Hämta data från JSON-filen och visa den i HTML
fetch('/data.json')
.then(response => response.json())
.then(data => {
  const container = document.getElementById('projects-container');

  data.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add(
        'flex',
        'flex-row',
        'text-white',
        'bg-black', 
        'shadow-lg', 
        'rounded-lg', 
        'p-6', 
        'm-4', 
        'w-', 
        'hover:shadow-xl', 
        'transition-shadow', 
        'duration-300'
      );
    // Hantera tomma länkar
    const link = project.link 
      ? `<a href="${project.link}" target="_blank">Kika in projektet</a>` 
      : '<span>Inget projekt tillgängligt för visning</span>';
      
    const githubLink = project.linkToGithub 
      ? `<a href="${project.linkToGithub}" target="_blank">GitHub Repo</a>` 
      : '<span>Inget GitHub repository tillgänglig.</span>';

    // Generera HTML för projektet
    projectDiv.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <p><strong>Verktyg:</strong> ${project.tools.join(', ')}</p>
      <p>${link} | ${githubLink}</p>
      <img src="${project.image}" alt="${project.title}" class="h-40 ">
    `;
    
    container.appendChild(projectDiv);
  });
})
.catch(error => console.error('Error fetching JSON:', error));