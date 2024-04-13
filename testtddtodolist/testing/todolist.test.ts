import { describe, test, beforeEach, expect, it } from "vitest";
import TodoList from "../src/todolist";

describe("Todolist", () => {
  test("mostrarTasques() deberia mostrar el arreglo de tareas", () => {
    const todolist = new TodoList();
    expect(todolist.mostrarTasques()).toEqual(todolist.tasques);
  });

  test("afegirTasca() debería agregar una tarea al arreglo", () => {
    const todolist = new TodoList();
    todolist.afegirTasca();
    expect(todolist.mostrarTasques()).toEqual([["", false]]);
  });
  test("eliminarTasca() debería eliminar una tasca del arreglo si el índice es válido", () => {
    const todolist = new TodoList();
    todolist.eliminarTasca();
    expect(todolist.mostrarTasques()).toEqual([]);
  });
});
