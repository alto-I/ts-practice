const width1 = 5;
const width2 = 8;
const height: number = 3;
const area = ((width1 + width2) * height) / 2;
console.log(area);

const binary = 0b1010;
const octal = 0o755;
const hexadecimal = 0xff;

console.log(binary, octal, hexadecimal);

const big = 1e8;
const small = 4e-5;
console.log(big, small);

console.log(0.1 + 0.2);

const bignum: bigint = (123n + 456n) * 2n;
console.log(bignum);

const result = 5n / 2n;
console.log(result);
