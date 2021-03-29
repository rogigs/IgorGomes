const experiencesTec = [
    {
        title: "Front-end",
        know: ["Html/Css", "Javascript", "React/Redux"]
    },
    {
        title: "Back-end",
        know: ["Node.js", "Python/Flask", "Java", "SQL"]
    },
    {
        title: "Outros",
        know: ["Orientação a objetos", "Testes unitários (Jest/Enzyme/Pytest)"]
    },
]

const experiencesPro = [
    {
        title: "Estagiário | Desenvolvedor WEB",
        company: "Cromai",
        time: "01/2020 - Atuando no momento",
        acting: "Desenvolvimento da plataforma WEB de visualização de diagnósticos " + 
            "e Desktop de criação de diagnósticos, ambas utilizando React no front-end e Flask no back-end "
    }
]

const componentExperience = document.getElementById("cards")

function getExperiencesProfessional() {

    for (let i = 0; i < experiencesPro.length; i++) {
        componentExperience.innerHTML += `<div class="card">` +
            `<h2>${experiencesPro[i].title}</h2>` +
            `<ul>` +
            `<li><h6>${experiencesPro[i].company}</h6></li>` +
            `<li><h6>${experiencesPro[i].time}</h6></li>` +
            `<li><h6>${experiencesPro[i].acting}</h6></li>` +

            `</div>`
    }

}

function getExperiencesTechniques() {

    for (let i = 0; i < experiencesTec.length; i++) {
        componentExperience.innerHTML += `<div class="card">` +
            `<h2>${experiencesTec[i].title}</h2>` +
            `<ul>` +
            `<li>${experiencesTec[i].know[0] ? experiencesTec[i].know[0] : ""}</li>` +
            `<li>${experiencesTec[i].know[1] ? experiencesTec[i].know[1] : ""}</li>` +
            `<li>${experiencesTec[i].know[2] ? experiencesTec[i].know[2] : ""}</li>` +
            `<li>${experiencesTec[i].know[3] ? experiencesTec[i].know[3] : ""} </li>` +
            `</ul>` +
            `</div>`
    }

}

window.addEventListener("load", function (event) {
    getExperiencesTechniques()
    getExperiencesProfessional()
});