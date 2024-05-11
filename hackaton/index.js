const areas = {
  ["R-C"]: false,
};

/////////////////////
function toggleInfarction(area) {
  areas[area] = !areas[area];
  const element = document.getElementById(area);
  
  if (areas[area]) {
    element.classList.add("infarction");
    document.getElementById("redOverlay").style.opacity = 1; // Mostrar overlay rojo
    setTimeout(() => {
      document.getElementById("redOverlay").style.opacity = "0";
    }, 400);
    document.getElementById("greenOverlay").style.opacity = 0; // Ocultar overlay verde
  } else {
    element.classList.remove("infarction");
    document.getElementById("redOverlay").style.opacity = 0; // Ocultar overlay rojo
    setTimeout(() => {
      document.getElementById("greenOverlay").style.opacity = "0";
    }, 400);
    document.getElementById("greenOverlay").style.opacity = 1; // Mostrar overlay verde
  }
  
  updateInfarctionMessage();
}


function updateInfarctionMessage() {
  const infarctedAreas = Object.values(areas).filter(area => area).length;
  document.getElementById("infarctionMessage").textContent = `Zonas infartadas: ${infarctedAreas}`;

  
}
