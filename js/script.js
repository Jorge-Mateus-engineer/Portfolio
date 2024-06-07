const projectTabs = document.querySelectorAll(".project-tab");
const projectImg = document.querySelector(".project-img");
const projectDescription = document.querySelector(".project-description");
const tagsContainer = document.querySelector(".tags-container");
const projectsData = [
  {
    index: "p1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nonreprehenderit consectetur quibusdam animi soluta! Eos",
    src: "./img/Images/Portfolio_Jessica.webp",
    technologies: ["Node.js", "HTML", "CSS", "Javascript"],
  },
  {
    index: "p2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nonreprehenderit consectetur quibusdam animi soluta! Eos",
    src: "./img/Images/Chordmaster.webp",
    technologies: ["HTML", "CSS", "Javascript"],
  },
  {
    index: "p3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nonreprehenderit consectetur quibusdam animi soluta! Eos",
    src: "./img/Images/Growth_Crafter.webp",
    technologies: ["Google Apps Script", "HTML", "CSS", "Javascript"],
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
