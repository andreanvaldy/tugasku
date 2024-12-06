// Script interaktif untuk website

document.getElementById("explore-btn").addEventListener("click", function () {
  alert("Selamat menjelajah! Klik fitur yang menarik untuk Anda.");
});

// Animasi scroll
window.addEventListener("scroll", () => {
  const features = document.querySelector(".features");
  const featuresPosition = features.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.5;

  if (featuresPosition < screenPosition) {
    features.style.opacity = "1";
    features.style.transform = "translateY(0)";
  } else {
    features.style.opacity = "0";
    features.style.transform = "translateY(50px)";
  }
});

// Inisialisasi
document.addEventListener("DOMContentLoaded", () => {
  const features = document.querySelector(".features");
  features.style.opacity = "0";
  features.style.transform = "translateY(50px)";
});
