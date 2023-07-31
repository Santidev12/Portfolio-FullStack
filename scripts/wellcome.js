const messageDiv = document.getElementById("wellcome-message");
let ip = localStorage.getItem("ip");
let lastVisit = localStorage.getItem("last-visit");
lastVisit = !isNaN(lastVisit) ? lastVisit : 0;

console.log("Last: ", lastVisit);
document.addEventListener("DOMContentLoaded", async () => {
  const url = "https://api.ipify.org/?format=json";

  // Obtener fecha
  const currentTimestamp = Date.now();
  console.log("Current: ", currentTimestamp);
  const dateDifference = currentTimestamp - parseInt(lastVisit);
  console.log("Difference: ", dateDifference);

  // Validar que sea mayor al dia actual
  if (!ip || dateDifference > 10000) {
    // hacer fetch a https://api.ipify.org/?format=json
    const response = await fetch(url);
  
    // obtener la ip de la respuesta
    const miip = await response.json();
    ip = miip.ip;

    // Guardar ip en el localStorage
    localStorage.setItem("ip", ip);
  }

  // ajustar el mensaje rederizado
  messageDiv.innerHTML = `
    <h2> Hola, ${ip}. Bienvenido a mi web! </h2>
  `;

  localStorage.setItem("last-visit", currentTimestamp);
});
