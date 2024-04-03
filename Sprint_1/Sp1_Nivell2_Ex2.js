/*Invoca una funció que retorni un valor des de dins d'una template literal.*/

function dataHora() {
  return new Date().toLocaleTimeString();
}
console.log(`Són les: ${dataHora()}`);
