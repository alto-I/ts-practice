const objMt = {
  double(num: number): number {
    return num * 2;
  },
  double2: (num: number): number => num * 2,
};

console.log(objMt.double(100));
console.log(objMt.double2(-50));
