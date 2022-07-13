// 関数式は巻き上げはできない。てか基本的に使う前に宣言するよねっていう。

type Human = {
  height: number;
  weight: number;
};

const calcBMI = function (human: Human): number {
  return human.weight / human.height ** 2;
};

const uhyo: Human = { height: 1.77, weight: 76 };
console.log(calcBMI(uhyo));
