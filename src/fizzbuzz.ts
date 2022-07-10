let fizzbuzz_i = 1;

while (fizzbuzz_i <= 100) {
  if (fizzbuzz_i % 15 == 0) {
    console.log("fizzbuzz");
  } else if (fizzbuzz_i % 5 == 0) {
    console.log("buzz");
  } else if (fizzbuzz_i % 3 == 0) {
    console.log("fizz");
  } else {
    console.log(fizzbuzz_i);
  }
  fizzbuzz_i++;
}
