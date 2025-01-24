// carousel.js
export function loadCarousel() {
    // Hämta karusellens HTML från en extern fil
    fetch('./carousel.html')
      .then((response) => response.text())
      .then((data) => {
        // Lägger in karusellens HTML i en specifik container på sidan
        document.getElementById('carousel-placeholder').innerHTML = data;
  
        // Initiera karusellen efter att HTML har laddats in
        initializeCarousel();
      })
      .catch((error) => console.error('Error loading carousel:', error));
  }
  
  // Funktion för att initiera och köra den automatiska karusellen
  function initializeCarousel() {
    const carousel = document.getElementById('carousel');
    const items = carousel.children;
    const totalItems = items.length;
    let currentIndex = 0;
  
    const moveToNextSlide = () => {
      currentIndex = (currentIndex + 1) % totalItems;
      const offset = -currentIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    };
  
    // Flytta till nästa bild var 3:e sekund
    setInterval(moveToNextSlide, 3000);
  }
  