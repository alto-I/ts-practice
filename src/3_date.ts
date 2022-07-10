// [JavaScriptの日時ライブラリを比較してみた \- Qiita](https://qiita.com/ka215/items/7810ec9121cd5fd415ba)
// [JSの日付ライブラリは、どれを使えばいいのかまとめ](https://zenn.dev/imaginelab/articles/68de83f4948fe2)

const date = new Date('2022-07-01T10:00:00+09:00');
const timeNum = date.getTime();
console.log(timeNum);

const date2 = new Date(timeNum);
console.log(date2);

console.log(Date.now());
