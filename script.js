document.addEventListener("DOMContentLoaded", function() {
    // Создаем частицы для фона
    function createParticles() {
        const container = document.querySelector(".bg-animation");
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle");
            particle.style.width = `${Math.random() * 20 + 10}px`;
            particle.style.height = particle.style.width;
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.animationDelay = `${Math.random() * 10}s`;
            container.appendChild(particle);
        }
    }
    createParticles();

    // Обработка формы
    const form = document.getElementById("portfolio-form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const portfolioData = {
            name: document.getElementById("name").value,
            job: document.getElementById("job").value,
            about: document.getElementById("about").value
        };

        // Сохраняем данные и переходим к портфолио
        localStorage.setItem("portfolioData", JSON.stringify(portfolioData));
        window.location.href = "portfolio.html";
    });
});