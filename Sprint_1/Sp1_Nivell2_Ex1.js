/*Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, 
 guardant-los en variables i referenciant-les en la impressió del missatge*/

function comprovem() {
  let nomUsuari = "Miquel"
  let cognomUsuari = "Martí"
  let segonCognomUsuari = "Pol"
  return console.log(
    `El teu nom és: ${nomUsuari}, i els teus cognoms són: ${cognomUsuari} ${segonCognomUsuari}`
  );
}
comprovem();
