class TodoList {
  public tasques: [string, boolean][] = [];
  constructor(tasca: string, completada: boolean) {
    this.tasques = []}

  mostrarTasques(): [string, boolean][] {
    return this.tasques;
  }
  afegirTasca(): void {
    const tasca: string = "";
    const completada: boolean = false;
    this.tasques.push([tasca, completada]);
  }
  eliminarTasca(): void {
    const index: number = 0;
    if (index > 0 && index < this.tasques.length) {
      this.tasques.splice(index, 1);
    }
  }
}

export default TodoList;
