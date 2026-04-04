// ================= NAV ACTIVE ON SCROLL =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// ================= THEME TOGGLE =================
const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
  const savedTheme = localStorage.getItem("theme");

  // 1️⃣ Om användaren redan valt tema
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    toggleBtn.textContent = "🌞";
  } else if (savedTheme === "dark") {
    toggleBtn.textContent = "🌙";
  }

  // 2️⃣ Om inget sparat → följ systeminställning
  if (!savedTheme) {
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)",
    ).matches;
    if (prefersLight) {
      document.body.classList.add("light-mode");
      toggleBtn.textContent = "🌞";
    } else {
      toggleBtn.textContent = "🌙";
    }
  }

  // 3️⃣ Toggle klick
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌞";
    } else {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "🌙";
    }
  });
}
