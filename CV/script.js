const makeLarge = document.querySelector(".profile-picture");

makeLarge.addEventListener("click", () => {
    makeLarge.classList.toggle("inlarge");
});

const navA = document.getElementById("a");
const navB = document.getElementById("b");
const navC = document.getElementById("c");
const navD = document.getElementById("d");

document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "a") {
        navA.scrollIntoView({behavior: "smooth"});
    }
});

document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "b") {
        navB.scrollIntoView({behavior: "smooth"});
    }
});

document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "c") {
        navC.scrollIntoView({behavior: "smooth"});
    }
});

document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "d") {
        navD.scrollIntoView({behavior: "smooth"});
    }
});