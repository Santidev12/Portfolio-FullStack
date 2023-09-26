const skillsDiv = document.getElementById("skills-container");
const skillsDescription = document.getElementById('skills-description');
const gallery = document.getElementById("gallery");

function clickSkill(index) {
  const skill = db.skills[index];
  skillsDescription.textContent = skill.description ? skill.description : "";
}

function render() {
  skillsDiv.innerHTML = "";
  db.skills.forEach((skill, i) => {
    skillsDiv.innerHTML += `<button class="btn-common" onclick="clickSkill(${i})">${skill.name}</button>`;
  });

  const projects = getCurrentProjects();
  const firstProject = projects[0];
  if (!firstProject) {
    return;
  }

  const array = [];
  if(firstProject.description){
    console.log(firstProject.description);
   
    var arraytho = firstProject.description.split(',');
    array.push(arraytho);
    console.log(array);
  }

  let opciones = "";

  if(array.length){
    array[0].forEach((p) => {
      opciones+=`<button class="btn-common">${p}</button>` ;
    });
  }
  gallery.innerHTML = `
      <div class="img-one d-flex-p-b" style="background-image: url('${firstProject.img}');">
          <a class="btona" href="https://dall-e-kappa-lilac.vercel.app/" target="blank_">
            <i class="fa-solid fa-arrow-up-right-from-square">
            
            </i>
          </a>
          <div class="section-project">
            <h3>${firstProject.name}</h3>
            ${opciones}
            </div>
      </div>
      <div class="half-width" id="projects-container"></div>
  `;

  const projectsDiv = document.getElementById("projects-container");
  const secondZone = projects.slice(1, 3);
  secondZone.forEach((project) => {
    let descripciones = "";
    // const array = [];
    var array = project.description.split(',');
    if(projectsDiv){
      if(array.length){
        array.forEach((p) => {
          descripciones+=`<button class="btn-common">${p}</button>` ;
        });
      }
      projectsDiv.innerHTML += `
        <div class="full-height d-flex-p-b" style="background-image: 
        url('https://images.unsplash.com/photo-1486326658981-ed68abe5868e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'); background-position: center;">
        <a class="btona" href="https://car-showcase-mwqlc845s-santidev12.vercel.app/" target="blank_">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
          <div class="section-project">
            <h3>${project.name} </h3>
            ${descripciones}
          </div>
        </div>
      `;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  var typed = new Typed("#dev-text", {
    strings: ["Developer.", "Creator.", "Designer."],
    typeSpeed: 50,
    loop: true,
  });
});
