import { describe, test, beforeEach, expect, it } from "vitest";
import TodoList from "./app";

describe("Todolist", () => {

  let todoList: TodoList;
  beforeEach(() => {
    todoList = new TodoList("tasca", false);
  });
  test("mostrarTasques() deberia mostrar el arreglo de tareas", () => {
   expect(todoList.mostrarTasques()).toEqual(todoList.tasques);
  });

  test("afegirTasca() debería agregar una tarea al arreglo", () => {
   todoList.afegirTasca();
    expect(todoList.mostrarTasques()).toEqual([["", false]]);
  });
  test("eliminarTasca() debería eliminar una tasca del arreglo si el índice es válido", () => {
    todoList.eliminarTasca();
    expect(todoList.mostrarTasques()).toEqual([]);
  });
});
