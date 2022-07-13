function mapCall<T, U>(array: number[], callback: (value: T) => U): U[] {
  const result: U[] = [];
  for (const elm of array) {
    result.push(callback(elm));
  }
  return result;
}

const dataCall = [1, 2, 3, 4, 5, 8, 13];
const resultCall = mapCall<number, number>(dataCall, (x) => x * 10);
console.log(resultCall);

const dataCall2 = [1, -3, 4, 0, -3, 8];
const resultCall2: boolean[] = mapCall<number, boolean>(dataCall2, (x) => x >= 0);
console.log(resultCall2);
