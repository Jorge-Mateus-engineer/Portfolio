const projectTabs = document.querySelectorAll(".project-tab");

projectTabs.forEach((t) =>
  t.addEventListener("click", (e) => {
    projectTabs.forEach((pt) => {
      pt.classList.remove("active-tab");
    });
    e.target.classList.add("active-tab");
  })
);
