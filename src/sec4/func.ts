console.log(range(5, 20));

function range(min: number, max: number): number[] {
  const result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

function helloWorldTimes(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log('Hello, world!');
  }
}

helloWorldTimes(5);
