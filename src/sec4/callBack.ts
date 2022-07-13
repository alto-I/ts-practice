// コールバック関数とは関数の引数として関数を渡すこと
// 関数の引数として渡される関数
// 逆に？コールバック関数を引数として受け取る関数を高階関数
// 高階関数(コールバック関数)

type UserCall = {
  name: string;
  age: number;
};

const getName = (u: User): string => u.name;
const usersCall: User[] = [
  // { name: "uhyo", age: 26 },
  // { name: "alto", age: 32 },
];

const names = usersCall.map(getName);
console.log(names);
