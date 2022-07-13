const sumSp = (...args: number[]): number => {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
};

const nums = [1, 2, 3, 4, 5, 6];
console.log(sumSp(...nums));
