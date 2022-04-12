// Import readline module for getting input from console
// Find more here: https://nodejs.org/api/readline.html#readline_readline
import readline from "readline";

// define question/output interface
const rl = readline.createInterface({
  // readable stream
  input: process.stdin,
  // writeable stream
  output: process.stdout,
});

// Create questions for STDIN Input from console.
const menuQ = (): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    // (readable, writeable from readline interface)
    rl.question("Your choice: ", (answer: unknown): void => {
      resolve(answer);
    });
  });
};

const milkQ = (): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    try {
      rl.question("How many cups of milk to add? ", (answer: unknown): void => {
        resolve(answer);
      });
    } catch (error) {
      reject();
    }
  });
};

const espressoQ = (): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    try {
      rl.question(
        "How many shots of espresso to add? ",
        (answer: unknown): void => {
          resolve(answer);
        }
      );
    } catch (error) {
      reject();
    }
  });
};

const peppermintQ = (): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    try {
      rl.question(
        "How many shots of peppermint to add? ",
        (answer: unknown): void => {
          resolve(answer);
        }
      );
    } catch (error) {
      reject();
    }
  });
};

// Create parent class Mocha
class Mocha {
  milk: number;
  shot: number;
  chocolateType: string;

  constructor() {
    this.milk = 1;
    this.shot = 1;
    this.chocolateType = "dark";
  }
  // list the ingredients of the mocha
  prepare(): void {
    console.log("Your", this.chocolateType, " Chocolate Mocha Ingredients:");
    console.log(this.chocolateType, " chocolate");
    console.log("Cups of milk: ", this.milk);
    console.log("Cups of espresso: ", this.shot, "\n\n");
  }
}

// inherits from Mocha
class WhiteChocolateMocha extends Mocha {
  chocolateType = "White";
}
// inherits from Mocha
class DarkChocolateMocha extends Mocha {
  chocolateType = "Dark";
}
// inherits from Mocha
class PeppermintMocha extends Mocha {
  // add peppermint property
  peppermintSyrup: number;
  constructor() {
    // include super to pull in parent constructor
    super();
    this.peppermintSyrup = 1;
  }
  // Overrides Mocha prepare with additional statements
  prepare(): void {
    console.log("Your Peppermint Mocha Ingredients:");
    console.log("Dark chocolate");
    console.log("Cups of milk: ", this.milk);
    console.log("Cups of espresso: ", this.shot);
    console.log("Pumps of peppermint: ", this.peppermintSyrup, "\n\n");
  }
}

// display menu and return selected menu item
const showMenu = async (): Promise<number> => {
  console.log(
    "Select Mocha from menu: \n",
    "1: Create White Chocolate Mocha \n",
    "2: Create Dark Chocolate Mocha \n",
    "3: Create Peppermint Mocha\n",
    "0: Exit\n"
  );
  const qMenu = await menuQ();
  return qMenu as number;
};

// User questions
// here it's <void> as it doesn't return anything it just set the choices
const userOptions = async (
  mochaObject: Mocha | PeppermintMocha
): Promise<void> => {
  const milkPicked = (await milkQ()) as unknown as string;
  const milkChoice: number = parseInt(milkPicked);
  const espPicked = (await espressoQ()) as unknown as string;
  const espChoice: number = parseInt(espPicked);
  // If peppermint mocha
  if (mochaObject instanceof PeppermintMocha) {
    const pepPicked = (await peppermintQ()) as unknown as string;
    const pepChoice: number = parseInt(pepPicked);
    mochaObject.peppermintSyrup = pepChoice;
  }

  mochaObject.milk = milkChoice;
  mochaObject.shot = espChoice;
  mochaObject.prepare();
};

const main = (): void => {
  let menuChoice = 0;
  const buildMocha = async (): Promise<void> => {
    do {
      const optionPicked = (await showMenu()) as unknown as string;
      menuChoice = parseInt(optionPicked);
      switch (menuChoice) {
        case 0: {
          break;
        }
        case 1: {
          const whiteMocha = new WhiteChocolateMocha();
          await userOptions(whiteMocha);
          break;
        }
        case 2: {
          const darkMocha = new DarkChocolateMocha();
          await userOptions(darkMocha);
          break;
        }
        case 3: {
          const peppermintMocha = new PeppermintMocha();
          await userOptions(peppermintMocha);
          break;
        }
        default: {
          console.log("Option invalid, please choose from menu.");
          break;
        }
      }
    } while (menuChoice != 0);
    // end readline process
    rl.close();
  };
  buildMocha();
};

main();
