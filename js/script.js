const projectTabs = document.querySelectorAll(".project-tab");
const projectImg = document.querySelector(".project-img");
const projectDescription = document.querySelector(".project-description");
const tagsContainer = document.querySelector(".tags-container");
const projectsData = [
  {
    index: "p1",
    description:
      "Aplicación fullstack, capaz de realizar todas las operaciones CRUD en una base de datos de Microsoft SQL. Cuenta con sistema de autenticación de usuarios basado en JWT (Json Web Tokens) y encripatación de contraseñas con SHA256. El frontend de Angular cuenta con proteccion de rutas usando sesiones de JWT. El backend es una API hecha con estructura de capas.",
    src: "./img/Images/CRUD_app.webp",
    technologies: [
      "Angular",
      "Typescript",
      "CSS",
      "C#",
      ".NET Framework",
      "JWT Authentication",
      "Microsoft SQL Server",
    ],
  },
  {
    index: "p2",
    description:
      "Pagina web fullstack, el frontend fue realizado con plantillas PUG. El backend fue diseñado con el modelo MVC utilizando Node.js y Express JS, cuenta con sistema de autenticacion basado en JWT. Para la base de datos se usó MongoDB con funcionalidades avanzadas como queries geograficas.",
    src: "./img/Images/Growth_Crafter.webp",
    technologies: [
      "Node.js",
      "Express JS",
      "JWT Authentication",
      "Pug Templates",
      "MongoDB",
    ],
  },
  {
    index: "p3",
    description:
      "Landing page sencilla realizada a pedido de Growth Crafter para promocionar su curso de analitica de datos en Salesforce, es totalmente responsiva y cuenta con el uso de Google Apps Script para almacenamiento basico de respuestas de un formulario.",
    src: "./img/Images/Growth_Crafter.webp",
    technologies: ["Google Apps Script", "HTML", "CSS", "Javascript"],
  },
  {
    index: "p4",
    description:
      "Proyecto personal sencillo para trabajar manipulación basica del DOM, es una aplicación que permite acceder a un gran repertorio de acordes de guitarra, es totalmente responsiva.",
    src: "./img/Images/Chordmaster.webp",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    index: "p5",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nonreprehenderit consectetur quibusdam animi soluta! Eos",
    src: "./img/Images/Portfolio_Jessica.webp",
    technologies: ["Node.js", "HTML", "CSS", "Javascript"],
  },
];

const updateProject = function (filteredProject) {
  //Change img src
  projectImg.src = filteredProject.src;
  //Change project description
  projectDescription.textContent = filteredProject.description;
  //Revmoe old tachnology tags
  tagsContainer.innerHTML = null;
  //Add new technology tags
  filteredProject.technologies.forEach((t) => {
    tagsContainer.insertAdjacentHTML(
      "beforeend",
      `<span class="tag">${t}</span>`
    );
  });
};

projectTabs.forEach((t) =>
  t.addEventListener("click", (e) => {
    projectTabs.forEach((pt) => {
      pt.classList.remove("active-tab");
    });
    e.target.classList.add("active-tab");
    let project = projectsData.filter(
      (pj) => pj.index === e.target.dataset.project
    );
    updateProject(project[0]);
  })
);
