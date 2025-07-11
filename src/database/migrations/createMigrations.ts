import readline from "readline";
import { exec } from "child_process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("🛠️ What should the migration name be? ", (name: string) => {
  const command = `npx typeorm migration:create ./src/database/migrations/${name}`;
  console.log(`Running: ${command}`);

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`❌ Error: ${error.message}`);
    } else {
      console.log(stdout);
      if (stderr) console.error(stderr);
    }
    rl.close();
  });
});
