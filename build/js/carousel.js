// Funktion för att ladda och initiera karusellen
export function loadCarousel() {
  // Hämta karusellens HTML från en extern fil
  fetch("./carousel.html")
    .then((response) => response.text())
    .then((data) => {
      // Lägger in karusellens HTML i en specifik container på sidan
      document.getElementById("carousel-placeholder").innerHTML = data;

      // Ladda in techstack.json
      fetch("./techstack.json")
        .then((response) => response.json())
        .then((data) => {
          // Skapa HTML för varje techstack
          const carousel = document.getElementById("carousel");

          data.forEach((item) => {
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("w-16", "flex-shrink-0");

            const img = document.createElement("img");
            img.src = item.img;
            img.alt = item.name;
            img.classList.add("w-16", "h-auto");

            const name = document.createElement("p");
            name.classList.add("text-center", "text-white");
            name.innerText = item.name;

            carouselItem.appendChild(img);
            carouselItem.appendChild(name);
            carousel.appendChild(carouselItem);
          });

          // Initiera karusellen efter att bilder och namn har lagts till
          initializeCarousel();
        })
        .catch((error) =>
          console.error("Error loading techstack.json:", error)
        );
    })
    .catch((error) => console.error("Error loading carousel:", error));
}

// Funktion för att initiera och köra den kontinuerliga karusellen
export function initializeCarousel() {
  const carousel = document.getElementById("carousel");
  const items = carousel.children;
  const totalItems = items.length;
  const itemsToShow = 3;

  // Duplicera bilderna för att skapa en oändlig loop
  for (let i = 0; i < totalItems; i++) {
    const clone = items[i].cloneNode(true);
    carousel.appendChild(clone); // Lägg till den duplicerade bilden i slutet av karusellen
  }

  // Uppdatera bredden på karusellen efter duplikering
  const totalWidth = totalItems * 2 * (100 / itemsToShow);
  carousel.style.width = `${totalWidth}%`;

  // Applicera CSS-animationen för kontinuerlig rörelse
  carousel.style.animation = "scrollCarousel 60s linear infinite"; // För långsammare rörelse
}
