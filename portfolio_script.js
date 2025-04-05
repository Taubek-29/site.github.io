document.addEventListener("DOMContentLoaded", function() {
    // Загружаем данные
    const portfolioData = JSON.parse(localStorage.getItem("portfolioData"));
    if (!portfolioData) window.location.href = "index.html";

    // Заполняем слайды
    document.getElementById("portfolio-name").textContent = portfolioData.name;
    document.getElementById("portfolio-job").textContent = portfolioData.job;
    document.getElementById("about-text").textContent = portfolioData.about;

    // Управление слайдами
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
    slides[currentSlide].style.display = "flex";

    document.getElementById("next-btn").addEventListener("click", () => {
        if (currentSlide < slides.length - 1) {
            slides[currentSlide].style.display = "none";
            currentSlide++;
            slides[currentSlide].style.display = "flex";
        }
    });

    document.getElementById("prev-btn").addEventListener("click", () => {
        if (currentSlide > 0) {
            slides[currentSlide].style.display = "none";
            currentSlide--;
            slides[currentSlide].style.display = "flex";
        }
    });
});