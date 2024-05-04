"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
var chalk_1 = require("chalk");
var tasca = "";
var completada = false;
var tasques = [{ tasca: tasca, completada: completada }];
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
});
function mostrarMenu() {
    console.log(chalk_1.default.bgBlueBright.bold("\n-----To Do List App-----\n"));
    console.log(chalk_1.default.cyanBright("Menú d'opcions"));
    console.log("1. Afegir tasca");
    console.log("2. Eliminar tasca");
    console.log("3. Completar tasques");
    console.log("4. Mostrar tasques");
    console.log("5. Sortir");
    console.log("\n");
}
function afegirTasca() {
    rl.question(chalk_1.default.bgGrey("Escriu la tasca: "), function (tasca) {
        tasques.push({ tasca: tasca, completada: false });
        console.log(chalk_1.default.green.bold("Tasca afegida correctament\n"));
        console.clear();
        mostrarTasques();
    });
}
function mostrarTasques() {
    console.log(chalk_1.default.yellow.bold("\n-----Tasques pendents-----\n"));
    if (tasques.length === 0) {
        console.log(chalk_1.default.greenBright("No hi han tasques per mostrar\n"));
    }
    else {
        tasques.forEach(function (tasca, index) {
            var estat = tasca.completada ? "✅" : "❌";
            if (tasca.completada) {
                console.log(chalk_1.default.greenBright("".concat(index + 1, ". ").concat(estat, " - ").concat(tasca.tasca)));
            }
            else {
                console.log(chalk_1.default.redBright("".concat(index + 1, ". ").concat(estat, " - ").concat(tasca.tasca)));
            }
        });
    }
    mostrarMenu();
    escollirOpcio();
}
function tascaCompletada() {
    rl.question(chalk_1.default.bgGrey("Introdueix el número de la tasca completada: "), function (numeroTasca) {
        var index = parseInt(numeroTasca) - 1;
        if (index >= 0 && index < tasques.length) {
            tasques[index].completada = true;
            console.log(chalk_1.default.green.bold("Tasca completada\n"));
        }
        else {
            console.log(chalk_1.default.red("Numero de tasca invàlid\n"));
        }
        console.clear();
        mostrarTasques();
    });
}
function eliminarTasca() {
    rl.question(chalk_1.default.magenta("Introdueix el número de tasca a eliminar: "), function (numeroTasca) {
        var index = parseInt(numeroTasca) - 1;
        if (index >= 0 && index < tasques.length) {
            tasques.splice(index, 1);
            console.clear();
            mostrarTasques();
        }
        else {
            console.log(chalk_1.default.redBright("Numero de tasca invàlid"));
            eliminarTasca();
        }
    });
}
function escollirOpcio() {
    rl.question("Introdueix el número de l'opció desitjada: ", function (eleccio) {
        switch (eleccio) {
            case "1":
                afegirTasca();
                break;
            case "2":
                eliminarTasca();
                break;
            case "3":
                tascaCompletada();
                break;
            case "4":
                mostrarTasques();
                break;
            case "5":
                console.log(chalk_1.default.greenBright("Adéu 👋😉"));
                rl.close();
                break;
            default:
                console.log(chalk_1.default.redBright("Opció no valida, introdueix un número valid\n"));
                mostrarMenu();
                escollirOpcio();
                break;
        }
    });
}
console.clear();
mostrarMenu();
escollirOpcio();
