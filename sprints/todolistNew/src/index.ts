interface Tasca {
  index: number;
  nombre: string;
  completada: boolean;
}
export const tasques: Tasca[] = [];

export function netejarText(): void {
  const tascaUsuari = document.getElementById("tskUs") as HTMLInputElement;
  if (tascaUsuari !== null) {
    tascaUsuari.value = "";
  }
}

export function afegirTasca(): void {
  const tascaUsuari = document.getElementById("tskUs") as HTMLInputElement;
  let tascaTexto = "";
  if (tascaUsuari !== null && tascaUsuari.value.trim() !== "") {
    tascaTexto = tascaUsuari.value.trim();
    const novaTasca: Tasca = {
      index: tasques.length + 1,
      nombre: tascaTexto,
      completada: false,
    };
    tasques.push(novaTasca);
    mostrarTasca();
    netejarText();
  } else {
    alert("Debes escribir una tarea");
  }
}

export function mostrarTasca(): void {
  const llistaTasques = document.getElementById("showTsk");
  if (llistaTasques !== null) {
    llistaTasques.innerHTML = "";
    tasques.forEach((tarea, index) => {
      const tareaHTML = `${index + 1} - ${tarea.nombre} ${
        tarea.completada ? "✅ Completada" : "❌ Pendiente"
      }</br>`;
      llistaTasques.innerHTML += tareaHTML;
    });
  }
}
export function eliminarTasca(): void {
  const tascaUsuari = document.getElementById("tskUs") as HTMLInputElement;
  if (tascaUsuari !== null) {
    const indexUsuari = parseInt(tascaUsuari.value) - 1;
    if (
      !isNaN(indexUsuari) &&
      indexUsuari >= 0 &&
      indexUsuari < tasques.length
    ) {
      tasques.splice(indexUsuari, 1);
      mostrarTasca();
    }
  } else alert("Debes introducir un número de tarea válido");
  netejarText();
}

export function completarTasca(): void {
  const tascaUsuari = document.getElementById("tskUs") as HTMLInputElement;
  if (tascaUsuari !== null) {
    const indexUsuari = parseInt(tascaUsuari.value) - 1;
    if (
      !isNaN(indexUsuari) &&
      indexUsuari >= 0 &&
      indexUsuari < tasques.length &&
      tasques[indexUsuari] !== undefined
    ) {
      tasques[indexUsuari].completada = true;
      mostrarTasca();
    } else {
      alert("La tarea indicada no existe");
    }
  }
  netejarText();
}
