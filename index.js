function setHeaderScrolledClass() {
  const header = document.querySelector("header")
  if (!header) return

  if (window.scrollY > 0) {
    header.classList.add("scrolling")
  } else {
    header.classList.remove("scrolling")
  }
}

function initTyped() {
  const target = document.querySelector("#typed")
  if (!target) return
  if (typeof Typed === "undefined") return

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
  })
}

document.addEventListener("DOMContentLoaded", () => {
  setHeaderScrolledClass()
  window.addEventListener("scroll", setHeaderScrolledClass, { passive: true })
  initTyped()
})