export function Hero() {
  fetch("./hero.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("hero-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Error loading hero:", error));
}
