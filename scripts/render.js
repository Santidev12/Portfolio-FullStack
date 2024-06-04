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

  const arrayFirst = [];
  if(firstProject.description){
   
    var arraytho = firstProject.description.split(',');
    arrayFirst.push(arraytho);
  }

  let opciones1 = "";

  if(arrayFirst.length){
    arrayFirst[0].forEach((p) => {
      opciones1+=`<button class="btn-common">${p}</button>` ;
    });
  }

  const secondProject = projects[1];
  if (!secondProject ) return;

  const arraySecond = [];
  if(secondProject.description){
   
    var arraytho = secondProject.description.split(',');
    arraySecond.push(arraytho);
  }

  let opciones2 = "";

  if(arraySecond.length){
    arraySecond[0].forEach((p) => {
      opciones2+=`<button class="btn-common">${p}</button>` ;
    });
  }

  const thirdProject = projects[2];
  if (!thirdProject ) return;

  const arrayThird = [];
  if(secondProject.description){
   
    var arraytho = thirdProject.description.split(',');
    arrayThird.push(arraytho);
  }

  let opciones3 = "";

  if(arrayThird.length){
    arrayThird[0].forEach((p) => {
      opciones3+=`<button class="btn-common">${p}</button>` ;
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
            ${opciones1}
            </div>
      </div>
      <div class="half-width" id="projects-container">
      <div class="full-height d-flex-p-b" style="background-image: url('https://images.unsplash.com/photo-1658328565500-c5c668e6a52b?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); background-position: center;">
      <a class="btona" href="https://car-showcase-mwqlc845s-santidev12.vercel.app/" target="blank_">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <div class="section-project">
          <h3>${projects[1].name} </h3>
          ${opciones2}
        </div>
      </div>
      <div class="full-height d-flex-p-b" style="background-image: url('https://images.unsplash.com/photo-1578242174372-e26b3681587f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'); background-position: center;">
      <a class="btona" href="https://calendariomern-production.up.railway.app/" target="blank_">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <div class="section-project">
          <h3>${thirdProject.name} </h3>
          ${opciones3}
        </div>
      </div>
      </div>
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
      // projectsDiv.innerHTML += `
      //   <div class="full-height d-flex-p-b" style="background-image: 
      //   url("${project.img}"); background-position: center;">
      //   <a class="btona" href="https://car-showcase-mwqlc845s-santidev12.vercel.app/" target="blank_">
      //       <i class="fa-solid fa-arrow-up-right-from-square"></i>
      //     </a>
      //     <div class="section-project">
      //       <h3>${project.name} </h3>
      //       ${descripciones}
      //     </div>
      //   </div>
      // `;
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
