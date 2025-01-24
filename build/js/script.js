import { Header } from "./header.js";
import { projects } from "./projects.js";
import { loadCarousel, initializeCarousel } from "./carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  Header();
  projects();
  loadCarousel();
  initializeCarousel();
});
