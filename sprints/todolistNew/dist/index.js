let tasques = [];
function netejarText() {
    let tascaUsuari = document.getElementById("numUs");
    if (tascaUsuari !== null) {
        tascaUsuari.value = "";
    }
}
function afegirTasca() {
    let tascaTexto = "";
    let tascaUsuari = document.getElementById("tskUs");
    if (tascaUsuari !== null) {
        tascaTexto = tascaUsuari.value;
    }
    tasques.push({ index: +1, nombre: tascaTexto, completada: false });
}
function mostrarTasca() {
    let llista = document.getElementById("showTsk");
    if (llista !== null) {
        llista.innerHTML = "";
        tasques.forEach((tarea, index) => {
            let tareaHTML = `${index + 1} - ${tarea.nombre} ${tarea.completada ? "Completada" : "Pendiente"}`;
            llista.innerHTML += tareaHTML;
        });
    }
}
function eliminarTasca() {
    let tascaUsuari = document.getElementById("tskUs");
    if (tascaUsuari !== null) {
        let index = parseInt(tascaUsuari.value);
        if (!isNaN(index) && index >= 0 && index < tasques.length) {
            tasques.splice(index, 1);
        }
    }
}
function completarTasca() {
    let tascaUsuari = document.getElementById("tskUs");
    if (tascaUsuari !== null) {
        let index = parseInt(tascaUsuari.value);
        if (!isNaN(index) && index >= 0 && index < tasques.length) {
            tasques[index].completada = true;
        }
    }
}
export { tasques, netejarText, mostrarTasca, completarTasca, eliminarTasca, afegirTasca, };
