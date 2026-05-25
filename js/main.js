// =========================
// THEME TOGGLE
// =========================
const btn = document.getElementById("theme-btn");

const applyTheme = (isLight) => {
  document.body.classList.toggle("light", isLight);
  btn.textContent = isLight ? "🌞" : "🌙";
};

const saved = localStorage.getItem("theme");
if (saved) {
  applyTheme(saved === "light");
} else {
  applyTheme(window.matchMedia("(prefers-color-scheme: light)").matches);
}

btn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  btn.textContent = isLight ? "🌞" : "🌙";
});

// =========================
// NAV ACTIVE ON SCROLL
// =========================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener(
  "scroll",
  () => {
    let current = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 200) {
        current = section.id;
      }
    });
    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === "#" + current,
      );
    });
  },
  { passive: true },
);

// =========================
// SCROLL FADE IN
// =========================
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
