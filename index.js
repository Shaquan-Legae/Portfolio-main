function setHeaderScrolledClass() {
  const header = document.querySelector("header");
  if (!header) return;

  if (window.scrollY > 0) {
    header.classList.add("scrolling");
  } else {
    header.classList.remove("scrolling");
  }
}

function initTyped() {
  const target = document.querySelector("#typed");
  if (!target) return;
  if (typeof Typed === "undefined") return;

  new Typed("#typed", {
    strings: [
      "ICT Student",
      "Software Developer",
      "Passionate About Technology",
      "Building Real Projects"
    ],
    loop: true,
    typeSpeed: 75,
    shuffle: true
  });
}

function setActiveNavLink() {
  const sections = [
    { id: "home", element: document.body },
    { id: "About-Us", element: document.querySelector("#About-Us") },
    { id: "projects", element: document.querySelector("#projects") },
    { id: "contact", element: document.querySelector("#contact") }
  ];

  const navLinks = document.querySelectorAll(".nav-masthead .nav-link");
  if (!navLinks.length) return;

  const scrollPosition = window.scrollY + window.innerHeight * 0.3;

  let activeId = "home";

  sections.forEach((section) => {
    if (!section.element || section.id === "home") {
      return;
    }

    const rect = section.element.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY;
    const offsetBottom = offsetTop + section.element.offsetHeight;

    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    link.removeAttribute("aria-current");

    const href = link.getAttribute("href");

    if ((activeId === "home" && href === "#") || (href === `#${activeId}`)) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setHeaderScrolledClass();
  setActiveNavLink();

  window.addEventListener("scroll", () => {
    setHeaderScrolledClass();
    setActiveNavLink();
  }, { passive: true });

  initTyped();
});