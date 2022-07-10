type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const dataCsv: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const users: User[] = [];
const splitData = dataCsv.split('\n');

for (const elm of splitData) {
  if (elm === '') {
    continue;
  }
  const elmSplit = elm.split(',');
  const user = {
    name: elmSplit[0],
    age: Number(elmSplit[1]),
    premiumUser: !!elmSplit[2],
  };
  users.push(user);
}
console.log(users);

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(
      `${user.name} (${user.age})はプレミアムユーザーではありません。`,
    );
  }
}
