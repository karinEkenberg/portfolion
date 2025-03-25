import { projects } from "./projects.js";
import { Skills, LoadSkills } from "./skills.js";
import { LoadAbout } from "./about.js";
import { LoadFooter } from "./footer.js";
import { Hero } from "./hero.js";
import { LoadContact } from "./contact.js";

// const script = document.createElement("script");
// script.async = true;
// script.src = googleTagManagerConfig.scriptSrc;
// document.head.appendChild(script);

// window.dataLayer = window.dataLayer || [];
// function gtag() {
//   dataLayer.push(arguments);
// }
// gtag("js", new Date());
// gtag("config", googleTagManagerConfig.id);

document.addEventListener("DOMContentLoaded", () => {
  projects();
  Skills();
  LoadSkills();
  LoadAbout();
  LoadFooter();
  Hero();
  LoadContact();
});
