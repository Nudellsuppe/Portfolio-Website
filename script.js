// Object to keep track of the current slide index for each carousel
let slideIndices = {};

// Initialize the slide index for each carousel
function initSlides() {
  document.querySelectorAll(".modal").forEach((modal) => {
    const modalId = modal.id;
    slideIndices[modalId] = 1; // Start at the first slide
    showSlides(1, modalId); // Show the first slide
  });
}

// Event listener for opening modals
document.querySelectorAll(".project-card img").forEach((img, index) => {
  img.onclick = function () {
    let modalId = `carousel-modal-${index + 1}`;
    let modal = document.getElementById(modalId);
    modal.style.display = "block";
    showSlides(slideIndices[modalId] || 1, modalId); // Show the current slide
  };
});

// Event listener for closing modals
document.querySelectorAll(".modal .close").forEach((closeBtn) => {
  closeBtn.onclick = function () {
    let modalId = this.getAttribute("data-modal");
    let modal = document.getElementById(modalId);
    modal.style.display = "none";
  };
});

// Function to navigate through slides
function plusSlides(n, modalId) {
  showSlides((slideIndices[modalId] += n), modalId);
}

// Function to show the specific slide
function showSlides(n, modalId) {
  let slides = document
    .getElementById(modalId)
    .getElementsByClassName("carousel-slide");
  if (!slides.length) return;

  if (n > slides.length) {
    slideIndices[modalId] = 1;
  }
  if (n < 1) {
    slideIndices[modalId] = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndices[modalId] - 1].style.display = "block";
}

// Initialize slides when the document is ready
window.onload = initSlides;
