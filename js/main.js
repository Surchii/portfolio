console.log("Portfolio loaded");

const about = document.getElementById("about");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

about.addEventListener("click", () => {
  window.location.href = "#about";
});
skills.addEventListener("click", () => {
  window.location.href = "#skills";
});
projects.addEventListener("click", () => {
  window.location.href = "#projects";
});
contact.addEventListener("click", () => {
  window.location.href = "#contact";
});

// const about = document.getElementById("about");
// const skills = document.getElementById("skills");
// const projects = document.getElementById("projects");
// const contact = document.getElementById("contact");
