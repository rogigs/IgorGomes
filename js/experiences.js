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
        title: "Estágiario | Desenvolvedor WEB",
        company: "Cromai",
        time: "01/2020 - Atuando no momento",
        acting: "Desenvolvimento da plataforma WEB responsável pela visualizaçao de diagnóstico das fazendas."
        
    },
    {
        title: "Mentoria",
        company: "",
        time: "+10 horas de aulas dadas",
        acting: "Auxílio na aprendizagem de lógica de programação com a linguagem Python e os paradigmas de Orientação a Objetos"
    },
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