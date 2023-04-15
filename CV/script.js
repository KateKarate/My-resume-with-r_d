const makeLarge = document.querySelector(".profile-picture");

makeLarge.addEventListener("click", () => {
    makeLarge.classList.toggle("inlarge");
});

const navA = document.getElementById("a");
const navB = document.getElementById("b");
const navC = document.getElementById("c");
const navD = document.getElementById("d");
const navE = document.getElementById("e");

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

document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "e") {
        navD.scrollIntoView({behavior: "smooth"});
    }
});


const url = 'https://api.github.com/users/KateKarate/repos';
const repositories = document.querySelector('.repositories');

function createElement(data) {
    const repository = document.createElement('div');
    repository.classList.add('repository');

    const a = document.createElement('a');
    a.textContent = data.full_name;
    a.setAttribute('href', data.html_url);
    a.setAttribute('target', '_blank');
    a.style.color = '#1C2E8C';
    a.style.lineHeight = '10px';
    a.style.:hover.color = '1E1E1E';
    a.style.:hover.textDecoration = 'none';


    repository.appendChild(a);

    if(data.description) {
        const desc = document.createElement('div');
        desc.textContent = data.description;

        repository.appendChild(desc);
    }

    repositories.appendChild(repository);
}

function handleData(data) {
    if(!data.length) {
        return
    }

    data.forEach(d => {
        createElement(d);
    })
}

fetch(url) {
    .then(response => response.json());
    .then(handleData);
}


