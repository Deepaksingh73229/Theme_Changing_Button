const mbtn = document.querySelector(".menu-box");
const theme_box = document.querySelector(".theme-box");
const colour = document.querySelector(".colour");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const color5 = document.querySelector(".color5");
const color6 = document.querySelector(".color6");
const background = document.querySelector(".container");

let count;

function init() {
    count = 0;
    btn_clr();
    theme_box.classList.remove("active");
    background.classList.add("base");
}

init();

function btn_clr(){
    colour.classList.remove("active");
    color1.classList.remove("active");
    color2.classList.remove("active");
    color3.classList.remove("active");
    color4.classList.remove("active");
    color5.classList.remove("active");
    color6.classList.remove("active");
}

function tap() {
    if (count === 0) {
        theme_box.classList.add("active");
        colour.classList.add("active");
        color1.classList.add("active");
        color2.classList.add("active");
        color3.classList.add("active");
        color4.classList.add("active");
        color5.classList.add("active");
        color6.classList.add("active");

        count = 1;
    }

    else {
        count = 0;
        btn_clr();
        theme_box.classList.remove("active");
    }
}

function bgrd_remove(){
    background.classList.remove("base");
    background.classList.remove("b1");
    background.classList.remove("b2");
    background.classList.remove("b3");
    background.classList.remove("b4");
    background.classList.remove("b5");
    background.classList.remove("b6");
}

mbtn.addEventListener("click", tap);

color1.addEventListener("click", () => {
    bgrd_remove();
    background.classList.add("b1");
});

color2.addEventListener("click", () => {
    bgrd_remove();
    background.classList.add("b2");
});

color3.addEventListener("click", () => {
    bgrd_remove();
    background.classList.add("b3");
});

color4.addEventListener("click", () => {
    bgrd_remove();
    background.classList.add("b4");
});

color5.addEventListener("click", () => {
    bgrd_remove();
    background.classList.add("b5");
});

color6.addEventListener("click", () => {
    bgrd_remove();
    background.classList.add("b6");
});
