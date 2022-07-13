interface FooBarObj {
  foo: number;
  bar: string;
}

const tyepObj: FooBarObj = {
  foo: 123,
  bar: "Hello, world!",
};

type PriceData = {
  [key: string]: number;
};

const data: PriceData = {
  apple: 200,
  orange: 300,
  bento: 243,
};

data.chicken = 258;
