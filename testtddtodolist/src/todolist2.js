"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoList {
    tasques = [];
    mostrarTasques() {
        return this.tasques;
    }
    afegirTasca() {
        const tasca = "";
        const completada = false;
        this.tasques.push([tasca, completada]);
    }
    eliminarTasca() {
        const index = 0;
        if (index > 0 && index < this.tasques.length) {
            this.tasques.splice(index, 1);
        }
    }
}
exports.default = TodoList;
