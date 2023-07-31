// cambiar por url de api
const backendUrl = "https://apinew-portolio-production.up.railway.app";

var projectIndex = 0;
function getCurrentProjects() {
  return db.projects.slice(projectIndex, projectIndex + 3);
}

function nextProject() {
  projectIndex++;
  if (projectIndex > db.projects.length - 3) {
    projectIndex = 0;
  }
  render();
}

async function loadProjects() {
  const url = `${backendUrl}/projects`;
  const result = await fetch(url);

  return await result.json();
}

async function load() {
  try {
    db.projects = await loadProjects();
  } catch (e) {
    console.log("ERROR!");
  }

  render();
}

document.addEventListener("DOMContentLoaded", () => {
  load();
  render();
  // setInterval(nextProject, 5000);
});
