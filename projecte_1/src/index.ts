import chalk from "chalk";
import { createInterface } from "readline";


type tasca = {tasca: string, completada: boolean};

const tasques: tasca[] = []

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

function afegirTasca(): void {
    const tasca: string = "";
    const completada: boolean = false;
    rl.question(chalk.bgGrey("Escriu la tasca: "), (tasca) => {
        tasques.push({ tasca, completada: false });
        console.log(chalk.green.bold("Tasca afegida correctament\n"));
        console.clear();
        mostrarTasques();
      });
}

function eliminarTasca(): void {
    const index: number = 0;
    tasques.splice(index, 1);
}

function mostrarTasques(): [string, boolean][] {
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
    return tasques.map((tasca) => [tasca.tasca?? "", tasca.completada]);
}

function tascaCompletada(): boolean {
    const index: number = 0;
    return tasques[index].completada;
}

export default { afegirTasca, eliminarTasca, mostrarTasques, tascaCompletada, tasques };