function sendToWhatsApp() {
  const message = document.getElementById("whatsapp-message").value.trim();
  if (message === "") {
    alert("Por favor, digite uma mensagem.");
    return;
  }
  const phoneNumber = "5533991993858";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
}

const toggleInput = document.getElementById("theme-toggle");
const body = document.body;

toggleInput.checked = body.classList.contains("dark-mode");

toggleInput.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
});

// Menu hamburguer toggle
const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// scrol suave

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
