type HumanArr = {
  height: number;
  weight: number;
};

type ReturnObj = {
  bmi: number;
};

const calcBMIArr = ({ height, weight }: HumanArr): ReturnObj => ({
  bmi: weight / height ** 2,
});

const uhyoArr: HumanArr = { height: 1.77, weight: 76 };
console.log(calcBMIArr(uhyoArr));
