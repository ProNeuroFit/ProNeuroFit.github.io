const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const header = document.getElementById("header");

navToggle.addEventListener("click", () => {
  header.classList.toggle("menu-open");
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", !expanded);
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const audienceGrid = document.querySelector(".audience-grid");
const prevBtn = document.getElementById("audiencePrev");
const nextBtn = document.getElementById("audienceNext");

if (audienceGrid && prevBtn && nextBtn) {
  const scrollAmount = 300; // ширина картки

  nextBtn.addEventListener("click", () => {
    audienceGrid.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  prevBtn.addEventListener("click", () => {
    audienceGrid.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });
}

const resultsWrap = document.querySelector(".results-wrap");
const resultsPrev = document.getElementById("resultsPrev");
const resultsNext = document.getElementById("resultsNext");

if (resultsWrap && resultsPrev && resultsNext) {
  const resultCard = resultsWrap.querySelector(".result-card");
  const scrollAmount = resultCard ? resultCard.offsetWidth + 15 : 300;

  resultsNext.addEventListener("click", () => {
    resultsWrap.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  resultsPrev.addEventListener("click", () => {
    resultsWrap.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });
}

const programWrap = document.querySelector(".program-wrap");
const programPrev = document.getElementById("programPrev");
const programNext = document.getElementById("programNext");

if (programWrap && programPrev && programNext) {
  const programCard = programWrap.querySelector(".program-card");
  const scrollAmount = programCard ? programCard.offsetWidth + 15 : 300;

  programNext.addEventListener("click", () => {
    programWrap.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });

  programPrev.addEventListener("click", () => {
    programWrap.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });
}

const programModal = document.getElementById("programModal");
const programModalOverlay = document.getElementById("programModalOverlay");
const programModalClose = document.getElementById("programModalClose");
const programModalTitle = document.getElementById("programModalTitle");
const programModalText = document.getElementById("programModalText");
const programButtons = document.querySelectorAll(".program-card-button");

programButtons.forEach((button) => {
  button.addEventListener("click", () => {
    programModalTitle.textContent = button.dataset.programTitle;
    programModalText.textContent = button.dataset.programText;
    programModal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });
});

function closeProgramModal() {
  programModal.classList.remove("is-open");
  document.body.style.overflow = "";
}

if (programModalOverlay) {
  programModalOverlay.addEventListener("click", closeProgramModal);
}

if (programModalClose) {
  programModalClose.addEventListener("click", closeProgramModal);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && programModal.classList.contains("is-open")) {
    closeProgramModal();
  }
});

const moduleSaleToggles = document.querySelectorAll(".module-sale-toggle");

moduleSaleToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".module-sale-card");
    card.classList.toggle("open");
    button.textContent = card.classList.contains("open")
      ? "Сховати"
      : "Детальніше";
  });
});
