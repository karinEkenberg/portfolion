// Funktion för att ladda och initiera karusellen
export function loadCarousel() {
  // Hämta karusellens HTML från en extern fil
  fetch("./carousel.html")
    .then((response) => response.text())
    .then((data) => {
      // Lägger in karusellens HTML i en specifik container på sidan
      document.getElementById("carousel-placeholder").innerHTML = data;

      // Initiera karusellen efter att HTML har laddats in
      initializeCarousel();
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
  carousel.style.animation = "scrollCarousel 30s linear infinite";
}
