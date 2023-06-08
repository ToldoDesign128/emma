let cursor = document.querySelector(".cursor");
let links = document.querySelectorAll("a");

document.addEventListener("mousemove", function (e) {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.transform = `translate( calc( ${x}px - 50%), calc( ${y}px - 50%) )`;
});

links.forEach((link) => {
  link.addEventListener("mouseover", function () {
    cursor.classList.add("hover");
  });
  link.addEventListener("mouseleave", function () {
    cursor.classList.remove("hover");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Maglietta
document.addEventListener("DOMContentLoaded", function() {
  // Aggiungi un listener per il clic sull'elemento con classe "maglietta-toggle"
  var toggleElement = document.getElementsByClassName("maglietta-toggle")[0];
  toggleElement.addEventListener("click", function(event) {
    // Aggiungi la classe "open" all'elemento con id "maglietta__mobile"
    var mobileElement = document.getElementById("maglietta__mobile");
    mobileElement.classList.add("open");
    event.stopPropagation(); // Impedisci la propagazione del clic agli altri elementi
  });

  // Aggiungi un listener per il clic in qualsiasi punto dello schermo
  document.addEventListener("click", function() {
    // Rimuovi la classe "open" dall'elemento con id "maglietta__mobile"
    var mobileElement = document.getElementById("maglietta__mobile");
    mobileElement.classList.remove("open");
  });
});

// Risotto
document.addEventListener("DOMContentLoaded", function() {
  // Aggiungi un listener per il clic sull'elemento con classe "risotto-toggle"
  var toggleElement = document.getElementsByClassName("risotto-toggle")[0];
  toggleElement.addEventListener("click", function(event) {
    // Aggiungi la classe "open" all'elemento con id "risotto__mobile"
    var mobileElement = document.getElementById("risotto__mobile");
    mobileElement.classList.add("open");
    event.stopPropagation(); // Impedisci la propagazione del clic agli altri elementi
  });

  // Aggiungi un listener per il clic in qualsiasi punto dello schermo
  document.addEventListener("click", function() {
    // Rimuovi la classe "open" dall'elemento con id "risotto__mobile"
    var mobileElement = document.getElementById("risotto__mobile");
    mobileElement.classList.remove("open");
  });
});

// Libro
document.addEventListener("DOMContentLoaded", function() {
  // Aggiungi un listener per il clic sull'elemento con classe "libro-toggle"
  var toggleElement = document.getElementsByClassName("libro-toggle")[0];
  toggleElement.addEventListener("click", function(event) {
    // Aggiungi la classe "open" all'elemento con id "libro__mobile"
    var mobileElement = document.getElementById("libro__mobile");
    mobileElement.classList.add("open");
    event.stopPropagation(); // Impedisci la propagazione del clic agli altri elementi
  });

  // Aggiungi un listener per il clic in qualsiasi punto dello schermo
  document.addEventListener("click", function() {
    // Rimuovi la classe "open" dall'elemento con id "libro__mobile"
    var mobileElement = document.getElementById("libro__mobile");
    mobileElement.classList.remove("open");
  });
});

// Poster
document.addEventListener("DOMContentLoaded", function() {
  // Aggiungi un listener per il clic sull'elemento con classe "poster-toggle"
  var toggleElement = document.getElementsByClassName("poster-toggle")[0];
  toggleElement.addEventListener("click", function(event) {
    // Aggiungi la classe "open" all'elemento con id "poster__mobile"
    var mobileElement = document.getElementById("poster__mobile");
    mobileElement.classList.add("open");
    event.stopPropagation(); // Impedisci la propagazione del clic agli altri elementi
  });

  // Aggiungi un listener per il clic in qualsiasi punto dello schermo
  document.addEventListener("click", function() {
    // Rimuovi la classe "open" dall'elemento con id "poster__mobile"
    var mobileElement = document.getElementById("poster__mobile");
    mobileElement.classList.remove("open");
  });
});

// Cartoline
document.addEventListener("DOMContentLoaded", function() {
  // Aggiungi un listener per il clic sull'elemento con classe "cartoline-toggle"
  var toggleElement = document.getElementsByClassName("cartoline-toggle")[0];
  toggleElement.addEventListener("click", function(event) {
    // Aggiungi la classe "open" all'elemento con id "cartoline__mobile"
    var mobileElement = document.getElementById("cartoline__mobile");
    mobileElement.classList.add("open");
    event.stopPropagation(); // Impedisci la propagazione del clic agli altri elementi
  });

  // Aggiungi un listener per il clic in qualsiasi punto dello schermo
  document.addEventListener("click", function() {
    // Rimuovi la classe "open" dall'elemento con id "cartoline__mobile"
    var mobileElement = document.getElementById("cartoline__mobile");
    mobileElement.classList.remove("open");
  });
});

// Video
document.addEventListener("DOMContentLoaded", function() {
  // Aggiungi un listener per il clic sull'elemento con classe "video-toggle"
  var toggleElement = document.getElementsByClassName("video-toggle")[0];
  toggleElement.addEventListener("click", function(event) {
    // Aggiungi la classe "open" all'elemento con id "video__mobile"
    var mobileElement = document.getElementById("video__mobile");
    mobileElement.classList.add("open");
    event.stopPropagation(); // Impedisci la propagazione del clic agli altri elementi
  });

  // Aggiungi un listener per il clic in qualsiasi punto dello schermo
  document.addEventListener("click", function() {
    // Rimuovi la classe "open" dall'elemento con id "video__mobile"
    var mobileElement = document.getElementById("video__mobile");
    mobileElement.classList.remove("open");
  });
});

// Vestiti
document.addEventListener("DOMContentLoaded", function() {
  // Aggiungi un listener per il clic sull'elemento con classe "vestiti-toggle"
  var toggleElement = document.getElementsByClassName("vestiti-toggle")[0];
  toggleElement.addEventListener("click", function(event) {
    // Aggiungi la classe "open" all'elemento con id "vestiti__mobile"
    var mobileElement = document.getElementById("vestiti__mobile");
    mobileElement.classList.add("open");
    event.stopPropagation(); // Impedisci la propagazione del clic agli altri elementi
  });

  // Aggiungi un listener per il clic in qualsiasi punto dello schermo
  document.addEventListener("click", function() {
    // Rimuovi la classe "open" dall'elemento con id "vestiti__mobile"
    var mobileElement = document.getElementById("vestiti__mobile");
    mobileElement.classList.remove("open");
  });
});
