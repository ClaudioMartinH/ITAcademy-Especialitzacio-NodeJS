let tasques = [];
let tasca = {};
function netejarText() {
  document.getElementById("numUs").value = "";
}

function afegirTasca() {
  let tascaTexto = "";
  let tascaUsuari = document.getElementById("tskUs");
  if (tascaUsuari !== null) {
    tascaTexto = tascaUsuari.querySelector("textarea").value;
  }
  tasques.push({ nombre: tascaTexto, completada: false });
  mostrarTasca();
}
function mostrarTasca() {
  let llista = document.getElementById("showTsk");
  if (llista !== null) {
    llista.innerHTML = "";
    tasques.forEach((tarea, index) => {
      let tareaHTML = `${index + 1} - ${tarea.nombre} - ${
        tarea.completada ? "✅ Completada" : "❌ Pendiente"
      }<br>`;
      llista.innerHTML += tareaHTML;
    });
  }
}

function eliminarTasca() {
  let textareaValue = document.getElementById("numUs").value.trim();
  let index = parseInt(textareaValue);

  if (!isNaN(index) && index > 0 && index <= tasques.length) {
    tasques.splice(index - 1, 1);
  }
  mostrarTasca();
}

function completarTasca() {
  let completada = false;
  let textareaValue = document.getElementById("numUs").value.trim();
  let index = parseInt(textareaValue) - 1;
  if (index >= 0 && index < tasques.length) {
    tasques[index].completada = true;
    if (completada) {
      tasques[index].completada = "✅ Completada";
    }
  }
  mostrarTasca();
}
