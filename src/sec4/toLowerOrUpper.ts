const toLowerOrUpper = (str: string, upper: boolean = false): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};

console.log(toLowerOrUpper('alto'));
console.log(toLowerOrUpper('alto', false));
console.log(toLowerOrUpper('alto', true));
