type Human = {
  height: number;
  weight: number;
};

const calcBMI = function (human: Human): number {
  return human.weight / human.height ** 2;
};

const uhyo: Human = { height: 1.77, weight: 76 };
console.log(calcBMI(uhyo));
