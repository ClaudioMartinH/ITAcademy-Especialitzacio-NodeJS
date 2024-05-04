import {describe, expect, beforeEach, test} from 'vitest';
import { tasques, mostrarTasca, eliminarTasca, afegirTasca, completarTasca } from '../src/app';


describe("test de les funcions de la ToDo list", () => {
  beforeEach(() => {
    tasques.length = 0;
  });

  test("eliminarTasca() hauria d'eliminar una tasca de l'array", () => {
    afegirTasca();
    eliminarTasca();
    expect(tasques).toEqual([]);
  });

  test("afegirTasca() hauria d'afegir una tasca", () => {
    afegirTasca();
    expect(tasques).toHaveLength(1);
    expect(tasques[0]).toEqual({ index: 1, nombre: "", completada: false });
  });
  test("mostrarTasca() hauria de mostrar l'array de tasques", () => {
    afegirTasca();
    mostrarTasca();
    expect(tasques).toHaveLength(1);
    expect(tasques[0]).toEqual({ index: 1, nombre: "", completada: false });
  })
});



// beforeEach(() => {
//   tasques.push({index: 0, nombre: "tasca", completada: false})


// test("eliminarTasca() hauria d'eliminar la tasca sol.licitada", () => {
//   expect(eliminarTasca()).toEqual([])
// })

// test("afegirTasca() hauria d'afegir la tasca sol.licitada", () => {
//   expect(afegirTasca()).toBe({nombre:"", completada:false})
// })

// })