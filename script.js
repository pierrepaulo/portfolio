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
