export let tasques = [];
export function verTareas() {
    let tascaUsuari = document.getElementById("tskUs");
    let llista = document.getElementById("showTsk");
    if (tascaUsuari !== null && llista !== null) {
        tasques.forEach((tasca, index) => {
            llista.innerHTML += `<li id="${index}">${tasca[0]} ${tasca[1]}</li>`;
        });
    }
}
export function agregarTarea() {
    let tasca = "";
    let completada = false;
    let tascaUsuari = document.getElementById("tskUs");
    if (tascaUsuari !== null) {
        tasca = tascaUsuari.id;
    }
    tasques.push([tasca, completada]);
}
export function eliminarTarea() {
    let tascaUsuari = document.getElementById("tskUs");
    let index = 0;
    if (tascaUsuari !== null) {
        index = parseInt(tascaUsuari.id);
    }
    if (index > 0 && index < tasques.length) {
        tasques.splice(index, 1);
    }
}
export function completarTarea() {
    let tascaUsuari = document.getElementById("tskUs");
    let index = 0;
    if (tascaUsuari !== null) {
        index = parseInt(tascaUsuari.id);
    }
    if (index > 0 && index < tasques.length) {
        tasques[index][1] = true;
    }
}
