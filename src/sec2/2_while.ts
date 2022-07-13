let sum = 0;
let i = 1;

while (i <= 100) {
  sum += i;
  i++;
  if (i === 30) {
    break;
  }
}

console.log(sum);
