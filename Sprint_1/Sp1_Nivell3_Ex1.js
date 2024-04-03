/*Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera
      que cada funció compti del 0 al 9 per la consola. Invoca cada funció de l'array
      iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.
*/
let matriuFuncions = [];

function omplirMatriu() {
  let i = 0;
  let j = 0;
  for (i = 0; i < 10; i++) {
    matriuFuncions[i] = function () {
      for (j = 0; j < 10; j++) {
        console.log(j);
      }
    };
  }
  for (let i = 0; i < 10; i++) {
    matriuFuncions[i]();
  }
}
omplirMatriu();
