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