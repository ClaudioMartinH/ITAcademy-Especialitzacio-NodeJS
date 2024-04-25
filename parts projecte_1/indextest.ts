// import  tasques  from "./index";
// import { describe, test, expect} from "vitest"

// describe("tasques", () => {
//   test("should add a task to the list", () => {
//     // Arrange
//     const task = "My task";

//     // Act
//     tasques.afegirTasca();
    
//     // Assert
//     expect(tasques.tasques).toEqual([
//       { tasca: task, completada: false },
//     ]);
//   });

//   test("should remove a task from the list", () => {
//     // Arrange
//     const task = "My task";
//     tasques.tasques = [{ tasca: task, completada: false }];

//     // Act
//     tasques.eliminarTasca();

//     // Assert
//     expect(tasques.tasques).toEqual([]);
//   });

//   test("should mark a task as complete", () => {
//     // Arrange
//     const task = "My task";
//     tasques.tasques = [{ tasca: task, completada: false }];

//     // Act
//     tasques.tascaCompletada();

//     // Assert
//     expect(tasques.tasques).toEqual([{ tasca: task, completada: true }]);
//   });
// });