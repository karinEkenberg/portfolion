import { projects } from "./projects.js";
import { Skills, LoadSkills } from "./skills.js";
import { LoadAbout } from "./about.js";
import { LoadFooter } from "./footer.js";
import { Hero } from "./hero.js";
import { LoadContact } from "./contact.js";
import { ITSecSkills, LoadITSecSkills } from "./itsecskills.js";

document.addEventListener("DOMContentLoaded", () => {
  projects();
  Skills();
  LoadSkills();
  ITSecSkills();
  LoadITSecSkills();
  LoadAbout();
  LoadFooter();
  Hero();
  LoadContact();
});
