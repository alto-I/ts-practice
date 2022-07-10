import { createInterface } from 'readline';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('名前を入力してください:', (line) => {
  console.log(`こんにちは、${line}さん`)
  rl.close();
});
