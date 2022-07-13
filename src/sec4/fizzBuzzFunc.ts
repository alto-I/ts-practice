const getFizzBuzzString = (fizzbuzz_i: number): string => {
  if (fizzbuzz_i % 15 == 0) {
    return "fizzbuzz";
  } else if (fizzbuzz_i % 5 == 0) {
    return "buzz";
  } else if (fizzbuzz_i % 3 == 0) {
    return "fizz";
  } else {
    return String(fizzbuzz_i);
  }
};

const sequence = (min: number, max: number): number[] => {
  const length: number = max - min + 1;
  return [...Array(length)].map((_, i) => i + 1);
};

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}
