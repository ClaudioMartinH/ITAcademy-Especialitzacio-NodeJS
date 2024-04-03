/*Crea una funció anònima autoinvocable igualada a una variable que mostri
per consola el nom de l'usuari/ària rebut com a paràmetre.*/

let nomUsuari = "Antonio";
let mostrarEnConsola = (function (nomUsuari) {
  console.log(`El nom és: ${nomUsuari}`);
})(nomUsuari);
