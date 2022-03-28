// =============== Header Changer
// Header navbar link
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);
// Header navbar active color
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");
    var e = document.querySelector(`.nav .menu a[href*=${sectionId}]`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      e.classList.add("active");
    } else {
      document;
      e.classList.remove("active");
    }
  });
}
window.addEventListener("scroll", scrollActive);
function con() {
  const contact_a = document.getElementById("contact_a"),
    contact = document.getElementById("contact");
  if (window.pageYOffset > contact.offsetTop - 58) {
    contact_a.classList.add("active");
  } else {
    contact_a.classList.remove("active");
  }
}
window.addEventListener("scroll", con);
function po() {
  const portfolio_a = document.getElementById("portfolio_a"),
    contact = document.getElementById("portfolio");
  if (
    window.pageYOffset > portfolio.offsetTop - 58 &&
    window.pageYOffset <= portfolio.offsetTop - 58 + portfolio.offsetHeight
  ) {
    portfolio_a.classList.add("active");
  } else {
    portfolio_a.classList.remove("active");
  }
}
window.addEventListener("scroll", po);

// =============== Services Modal
const modalViews = document.querySelectorAll(" .modal"),
  modalButton = document.querySelectorAll(" .modal-open"),
  modalClose = document.querySelectorAll(" .close");
let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};
modalButton.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});
modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

//  =============== Porfolio
// mixer
let portfolioMixer = mixitup(".portfolio .container", {
  selectors: { target: ".portfolio .card" },
  animation: { duration: 300 },
});
// active link
const activePortfolio = document.querySelectorAll(".portfolio .filter span");
function active() {
  activePortfolio.forEach((l) => l.classList.remove("active"));
  this.classList.add("active");
}
activePortfolio.forEach((l) => l.addEventListener("click", active));
// =============== Testimonials Swiper
// Testimonials Swiper
var swiper = new Swiper(".swiper", {
  spaceBtween: 24,
  loop: true,
  grapCursor: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  breakpoints: {
    100: { slidesPerView: 1, spaceBetween: 24 },
    992: { slidesPerView: 2, spaceBetween: 48 },
  },
});
// =============== Light Dark Theme
// Header navbar link
const themeButton = document.getElementById("theme"),
  lightTheme = "light-theme",
  iconTheme = "bx-sun",
  selectedTheme = localStorage.getItem("selected-theme"),
  selectedIcon = localStorage.getItem("selected-icon"),
  getCurrentTheme = () =>
    document.body.classList.contains(lightTheme) ? "dark" : "light";
getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}
function changeTheme() {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-Theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
}
themeButton.addEventListener("click", changeTheme);

// =============== Scroll Reveal Animation
const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1500,
  delay: 100,
  // reset:true
});
sr.reveal(".home");
sr.reveal(".home .img", { delay: 700 });
sr.reveal(".home .scroll,.home .social", { delay: 900, origin: "bottom" });
// sr.reveal(".about");
// sr.reveal(".skills");
// sr.reveal(".services");
// sr.reveal(".portfolio");
// sr.reveal(".testimonials");
// sr.reveal(".contact");
