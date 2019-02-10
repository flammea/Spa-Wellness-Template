const nestedMenu = document.querySelector(".nested-menu");
const menuTriggerEl = document.querySelector(".menu-trigger-el");

menuTriggerEl.addEventListener("mouseover", function () {
    nestedMenu.style.display = 'block';
});

nestedMenu.addEventListener("mouseout", function () {
    nestedMenu.style.display = 'none';
});

// Read More / Read Less

const btns = document.querySelectorAll(".read-more-less-btn");

function showHideText() {
    const sibilingText = this.previousElementSibling;
    if (sibilingText.style.display === "none" || sibilingText.style.display === "") {
        sibilingText.style.display = "block";
        btns.textContent = "Czytaj mniej";
    } else {
        sibilingText.style.display = "none";
        btns.textContent = "Czytaj więcej";
    }
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", showHideText);
}

// Newsletter

const input = document.querySelector(".newsletter-form input");
const newsletterBtn = document.querySelector(".newsletter-form button");
const formInfo = document.querySelector(".form-info");

newsletterBtn.addEventListener("click", function (event) {
    event.preventDefault();
    formInfo.style.display = "block";

    if (input.value !== "") {
        formInfo.textContent = "Zapisano do newslettera";
        input.value = "";
    } else {
        formInfo.textContent = "Pole nie może być puste"
    }
})


// Gallery

const slider = document.querySelector(".slider");
const sliderStage = document.querySelector(".slider-stage");
const prev = document.querySelector(".previous-arrow");
const next = document.querySelector(".next-arrow");
const slides = document.querySelectorAll(".slider li");

const slideWidth = slides[0].clientWidth;
let currentIndex = 0;
let slideNumber = slides.length - 1;

function goToSlide(index) {
    if (index < 0) {
        index = slideNumber;
    } else if (index > slideNumber) {
        index = 0;
    }
    slider.style.left = index * (-slideWidth) + "px";
    currentIndex = index;
}

function goToNext() {
    goToSlide(currentIndex + 1)
}

function goToPrev() {
    goToSlide(currentIndex - 1)
}

next.addEventListener("click", goToNext);
prev.addEventListener("click", goToPrev);

setInterval(goToNext, 4000);

// Go up button

const goUpButton = document.querySelector(".go-up");
goUpButton.addEventListener("click", function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})