const nestedMenu = document.querySelector(".nested-menu");
const menuTriggerEl = document.querySelector(".menu-trigger-el");

menuTriggerEl.addEventListener("mouseover", function () {
    nestedMenu.style.display = 'block';
});

nestedMenu.addEventListener("mouseout", function () {
    nestedMenu.style.display = 'none';
});

// Read More / Read Less

const btn = document.querySelector(".read-more-less-btn");
const additionalParagraph = document.querySelector(".additional-paragraph");

function showHideText() {
    if (additionalParagraph.style.display === "none" || additionalParagraph.style.display === "") {
        additionalParagraph.style.display = "block";
        btn.textContent = "Czytaj mniej";
    } else {
        additionalParagraph.style.display = "none";
        btn.textContent = "Czytaj więcej";
    }
}


btn.addEventListener("click", showHideText);