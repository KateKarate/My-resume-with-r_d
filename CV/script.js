class GitHubAPI {
    constructor(token, username) {
        this.token = token;
        this.username = username;
    }

    async getRepos() {
        const response = await fetch(`https://api.github.com/users/${this.username}/repos`, {
            headers: {
                'Authorization': `token ${this.token}`
            }
        });
        const data = await response.json();
        return data;
    }
}

const api = new GitHubAPI('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', 'KateKarate');
api.getRepos().then(data => {
    data.forEach(d => {
        createElement(d);
    })
});

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
        navA.scrollIntoView({ behavior: "smooth" });
    }
});

document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "b") {
        navB.scrollIntoView({ behavior: "smooth" });
    }
});

document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "c") {
        navC.scrollIntoView({ behavior: "smooth" });
    }
});

document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "d") {
        navD.scrollIntoView({ behavior: "smooth" });
    }
});

document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "e") {
        navD.scrollIntoView({ behavior: "smooth" });
    }
});

const repositories = document.querySelector('.repositories');

function createElement(data) {
    const repository = document.createElement('div');
    repository.classList.add('repository');

    const a = document.createElement('a');
    a.textContent = data.full_name;
    a.setAttribute('href', data.html_url);
    a.setAttribute('target', '_blank');
    a.style.color = '#1C2E8C';
    a.style.marginBottom = '10px';
    a.style.display = 'block';

    a.addEventListener('mouseover', function () {
        a.style.color = '#1E1E1E';
        a.style.textDecoration = 'none';
    });

    a.addEventListener('mouseout', function () {
        a.style.color = '#1C2E8C';
        a.style.textDecoration = 'underline';
    });

    repository.appendChild(a);

    if (data.description) {
        const desc = document.createElement('div');
        desc.textContent = data.description;

        repository.appendChild(desc);
    }

    repositories.appendChild(repository);
}