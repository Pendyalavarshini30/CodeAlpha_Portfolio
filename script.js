// Portfolio Website Loaded Message

console.log("Portfolio Website Loaded Successfully");

// Smooth Button Animation

const button = document.querySelector("button");

button.addEventListener("mouseover", () => {

    button.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";

});

button.addEventListener("mouseout", () => {

    button.style.boxShadow = "none";

});

// Scroll Animation

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .edu-card, .cert-card, .workshop-card"
);

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(cardTop < windowHeight - 100){

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }

    });

});

// Initial Style for Animation

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform = "translateY(40px)";

    card.style.transition = "0.6s";

});