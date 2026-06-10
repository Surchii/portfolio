// // =========================
// // THEME TOGGLE
// // =========================
// const btn = document.getElementById("theme-btn");

// const applyTheme = (isLight) => {
//   document.body.classList.toggle("light", isLight);
//   btn.textContent = isLight ? "🌞" : "🌙";
// };

// const saved = localStorage.getItem("theme");
// if (saved) {
//   applyTheme(saved === "light");
// } else {
//   applyTheme(window.matchMedia("(prefers-color-scheme: light)").matches);
// }

// btn.addEventListener("click", () => {
//   const isLight = document.body.classList.toggle("light");
//   localStorage.setItem("theme", isLight ? "light" : "dark");
//   btn.textContent = isLight ? "🌞" : "🌙";
// });

// // =========================
// // NAV ACTIVE ON SCROLL
// // =========================
// const sections = document.querySelectorAll("section[id]");
// const navLinks = document.querySelectorAll(".nav-links a");

// window.addEventListener(
//   "scroll",
//   () => {
//     let current = "";
//     sections.forEach((section) => {
//       if (window.scrollY >= section.offsetTop - 200) {
//         current = section.id;
//       }
//     });
//     navLinks.forEach((link) => {
//       link.classList.toggle(
//         "active",
//         link.getAttribute("href") === "#" + current,
//       );
//     });
//   },
//   { passive: true },
// );

// // =========================
// // SCROLL FADE IN
// // =========================
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   { threshold: 0.1 },
// );

// document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
// =========================
// THEME TOGGLE
// =========================
const themeBtn = document.getElementById("theme-btn");

const applyTheme = (isLight) => {
  document.body.classList.toggle("light", isLight);
  themeBtn.textContent = isLight ? "🌞" : "🌙";
};

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme === "light");
} else {
  applyTheme(window.matchMedia("(prefers-color-scheme: light)").matches);
}

themeBtn.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  themeBtn.textContent = isLight ? "🌞" : "🌙";
});

// =========================
// MOBILE MENU
// =========================
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-label", isOpen ? "Stäng meny" : "Öppna meny");
});

// Close menu when clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// =========================
// NAV ACTIVE ON SCROLL
// =========================
const sections = document.querySelectorAll("section[id]");
const allNavLinks = document.querySelectorAll(".nav-links a");

window.addEventListener(
  "scroll",
  () => {
    let current = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 200) {
        current = section.id;
      }
    });
    allNavLinks.forEach((link) => {
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
