import { createInterface } from "readline";
import chalk from "chalk";

const tasques = [];

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mostrarMenu() {
  console.log(chalk.bgBlueBright.bold("\n-----To Do List App-----\n"));
  console.log(chalk.cyanBright("Menú d'opcions"));
  console.log("1. Afegir tasca");
  console.log("2. Eliminar tasca");
  console.log("3. Completar tasques");
  console.log("4. Mostrar tasques");
  console.log("5. Sortir");
  console.log("\n");
}

function afegirTasca() {
  rl.question(chalk.bgGrey("Escriu la tasca: "), (tasca) => {
    tasques.push({ tasca, completada: false });
    console.log(chalk.green.bold("Tasca afegida correctament\n"));
    console.clear();
    mostrarTasques();
  });
}

function mostrarTasques() {
  console.log(chalk.yellow.bold("\n-----Tasques pendents-----\n"));
  if (tasques.length === 0) {
    console.log(chalk.greenBright("No hi han tasques per mostrar\n"));
  } else {
    tasques.forEach((tasca, index) => {
      let estat = tasca.completada ? "✅" : "❌";
      if (tasca.completada) {
        console.log(
          chalk.greenBright(`${index + 1}. ${estat} - ${tasca.tasca}`)
        );
      } else {
        console.log(chalk.redBright(`${index + 1}. ${estat} - ${tasca.tasca}`));
      }
    });
  }
  mostrarMenu();
  escollirOpcio();
}

function tascaCompletada() {
  rl.question(
    chalk.bgGrey("Introdueix el número de la tasca completada: "),
    (numeroTasca) => {
      const index = parseInt(numeroTasca) - 1;
      if (index >= 0 && index < tasques.length) {
        tasques[index].completada = true;
        console.log(chalk.green.bold("Tasca completada\n"));
      } else {
        console.log(chalk.red("Numero de tasca invàlid\n"));
      }
      console.clear();
      mostrarTasques();
    }
  );
}

function eliminarTasca() {
  rl.question(
    chalk.magenta("Introdueix el número de tasca a eliminar: "),
    (numeroTasca) => {
      const index = parseInt(numeroTasca) - 1;
      if (index >= 0 && index < tasques.length) {
        tasques.splice(index, 1);
        console.clear();
        mostrarTasques();
      } else {
        console.log(chalk.redBright("Numero de tasca invàlid"));
        eliminarTasca();
      }
    }
  );
}

function escollirOpcio() {
  rl.question("Introdueix el número de l'opció desitjada: ", (eleccio) => {
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
        console.log(chalk.greenBright("Adéu 👋😉"));
        rl.close();
        break;
      default:
        console.log(
          chalk.redBright("Opció no valida, introdueix un número valid\n")
        );
        mostrarMenu();
        escollirOpcio();
        break;
    }
  });
}
console.clear();
mostrarMenu();
escollirOpcio();
