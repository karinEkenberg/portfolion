import { Header } from "./header.js";
import { projects } from "./projects.js";
import { Skills, LoadSkills } from "./skills.js";

document.addEventListener("DOMContentLoaded", () => {
  Header();
  projects();
  Skills();
  LoadSkills();
});
