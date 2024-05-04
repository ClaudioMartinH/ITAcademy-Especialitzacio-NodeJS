interface Tasca {
  index: number;
  nombre: string;
  completada: boolean;
}
let tasques: Tasca[] = [];


function afegirTasca() {
  let tascaTexto = "";
  let index = 0;
  let completada = false;
  tasques.push({ index: index+1, nombre: tascaTexto, completada: completada });
}

function mostrarTasca() {
  return tasques;
}
function eliminarTasca() {
  let index = 0;
  tasques.splice(index, 1);
  return tasques;
}

function completarTasca() {
  let index = 0;
  tasques[index].completada = true;
}

export {
  tasques,
  mostrarTasca,
  completarTasca,
  eliminarTasca,
  afegirTasca,
};
