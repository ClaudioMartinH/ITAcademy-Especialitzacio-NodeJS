"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const todolist_1 = __importDefault(require("../src/todolist"));
(0, vitest_1.describe)("Todolist", () => {
    (0, vitest_1.test)("mostrarTasques() deberia mostrar el arreglo de tareas", () => {
        const todolist = new todolist_1.default();
        (0, vitest_1.expect)(todolist.mostrarTasques()).toEqual(todolist.tasques);
    });
    (0, vitest_1.test)("afegirTasca() debería agregar una tarea al arreglo", () => {
        const todolist = new todolist_1.default();
        todolist.afegirTasca();
        (0, vitest_1.expect)(todolist.mostrarTasques()).toEqual([["", false]]);
    });
    (0, vitest_1.test)("eliminarTasca() debería eliminar una tasca del arreglo si el índice es válido", () => {
        const todolist = new todolist_1.default();
        todolist.eliminarTasca();
        (0, vitest_1.expect)(todolist.mostrarTasques()).toEqual([]);
    });
});
