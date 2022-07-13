// 型引数を任意にできるジェネリクス
// 使うときは型推論により省略もできる

const repeat = <T>(element: T, length: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};

console.log(repeat("a", 5));
console.log(repeat(123, 10));
