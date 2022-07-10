const nested = {
  numDes: 123,
  objDes: {
    foo: 'hello',
    bar: 'world',
  },
};

const {
  numDes,
  objDes: { bar },
} = nested;

console.log(numDes);
console.log(bar);

const arrDes = [3, 5345, 43, 2, 235, 755];
const [, arrFoo, , arrBar, ,] = arrDes;
console.log(arrFoo);
console.log(arrBar);
