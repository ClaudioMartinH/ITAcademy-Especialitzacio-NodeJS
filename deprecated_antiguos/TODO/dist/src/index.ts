let tasques: [string, boolean][] = [];

function verTareas() {
  let tascaUsuari: HTMLElement | null = document.getElementById("tskUs");
  let llista: HTMLElement | null = document.getElementById("showTsk");
  if (tascaUsuari !== null && llista !== null) {
    tasques.forEach((tasca, index) => {
      llista.innerHTML += `<li id="${index}">${tasca[0]} ${tasca[1]}</li>`;
    });
  }
}

function agregarTarea() {
  let tasca: string = "";
  let completada: boolean = false;
  let tascaUsuari: HTMLElement | null = document.getElementById("tskUs");
  if (tascaUsuari !== null) {
    tasca = tascaUsuari.id;
  }
  tasques.push([tasca, completada]);
}

function eliminarTarea() {
  let tascaUsuari: HTMLElement | null = document.getElementById("tskUs");
  let index: number = 0;
  if (tascaUsuari !== null) {
    index = parseInt(tascaUsuari.id);
  }
  if (index > 0 && index < tasques.length) {
    tasques.splice(index, 1);
  }
}

function completarTarea() {
  let tascaUsuari: HTMLElement | null = document.getElementById("tskUs");
  let index: number = 0;
  if (tascaUsuari !== null) {
    index = parseInt(tascaUsuari.id);
  }
  if (index > 0 && index < tasques.length) {
    tasques[index][1] = true;
  }
}

export {
  tasques, verTareas, completarTarea, eliminarTarea, agregarTarea
}