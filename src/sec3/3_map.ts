// Map<string, number> だとキーがstring, 中身がnumberになる

const map: Map<string, number> = new Map();
map.set('foo', 1234);

console.log(map.get('foo'));
console.log(map.get('bar'));
