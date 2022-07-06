import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('数値を入力してください:', (line) => {
  const num = Number(line);
  console.log(num + 1000);
  rl.close();
});

const num1 = Number(true);
console.log(num1);

const num2 = Number(false);
console.log(num2);

const num3 = Number(null);
console.log(num3);

const num4 = Number(undefined);
console.log(num4);
