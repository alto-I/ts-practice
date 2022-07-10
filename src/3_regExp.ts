const r = /ab+c/;

console.log(r.test('abbbbbcc'));
console.log(r.test('hello, abc world'));
console.log(r.test('ABC'));
