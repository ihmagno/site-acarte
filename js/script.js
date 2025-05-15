document.addEventListener("DOMContentLoaded", () => {
  console.log("✨ ACARTE Site Ativo");

  // === FAQ Interativo ===
  const faqQuestions = document.querySelectorAll(".faq-question");
  faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      const isVisible = answer.style.display === "block";
      answer.style.display = isVisible ? "none" : "block";
    });
  });

  // === Galeria com Lightbox Simples ===
  const galeriaImagens = document.querySelectorAll(".galeria-imagens img");
  galeriaImagens.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.classList.add("lightbox-overlay");
      const enlarged = document.createElement("img");
      enlarged.src = img.src;
      enlarged.classList.add("lightbox-img");
      overlay.appendChild(enlarged);
      document.body.appendChild(overlay);
      overlay.addEventListener("click", () => {
        document.body.removeChild(overlay);
      });
    });
  });

  // === Validação Simples de Formulário ===
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const inputs = form.querySelectorAll("input[required], textarea[required]");
      let valid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.border = "2px solid red";
          valid = false;
        } else {
          input.style.border = "1px solid #ccc";
        }
      });

      if (!valid) {
        e.preventDefault();
        alert("Por favor, preencha todos os campos obrigatórios.");
      }
    });
  }
});
