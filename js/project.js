const categories = document.querySelector(".categories");
const projectsContainer = document.querySelector(".projects");
const projects = document.querySelectorAll(".project");

// 이벤트객체를 실행했을때, e로 받고, e가 클릭되면(target) dataset.categoty를 받아옴.
categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.category;
  //   console.log(filter);
  //   console.log(e.target);
  if (filter == null) {
    return;
  }
  activeSelection(e.target);
  filterProjects(filter);
});

function activeSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  projects.forEach((project) => {
    if (filter == "all" || filter == project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 500);
}
