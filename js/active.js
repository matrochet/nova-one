// Récupérer l'URL actuelle
const currentPage = window.location.pathname;

// Ajouter la classe 'active' au lien correspondant
const menuLinks = document.querySelectorAll(".menu-link");
menuLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
