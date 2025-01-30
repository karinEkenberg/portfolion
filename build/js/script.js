import { Header } from "./header.js";
import { projects } from "./projects.js";
import { Skills, LoadSkills } from "./skills.js";
import { LoadAbout } from "./about.js";
import { LoadFooter } from "./footer.js";
import { Hero } from "./hero.js";
import { LoadContact } from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {
  Header();
  projects();
  Skills();
  LoadSkills();
  LoadAbout();
  LoadFooter();
  Hero();
  LoadContact();
});
