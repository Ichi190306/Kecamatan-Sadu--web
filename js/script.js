const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

function toggleLike(button) {
    button.classList.toggle('liked');
    button.textContent = button.classList.contains('liked') ? 'Liked' : 'Like';
}

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    // Update the current slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Adjust the transform property to show the current slide
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelectorAll('.accordion-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        // Toggle display
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }

        // Optionally, toggle button text
        button.textContent = content.style.display === "block" ? "Tutup" : "Detail";
    });
});
