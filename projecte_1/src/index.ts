type tasca = {tasca: string, completada: boolean};

const tasques: tasca[] = []

function afegirTasca(): void {
    const tasca: string = "";
    const completada: boolean = false;
    tasques.push({tasca: tasca, completada: completada});
}

function eliminarTasca(): void {
    const index: number = 0;
    tasques.splice(index, 1);
}

function mostrarTasques(): [string, boolean][] {
    return tasques.map((tasca) => [tasca.tasca?? "", tasca.completada]);
}

function tascaCompletada(): boolean {
    const index: number = 0;
    return tasques[index].completada;
}

export default { afegirTasca, eliminarTasca, mostrarTasques, tascaCompletada, tasques };