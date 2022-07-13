// typeに引数名を書くことでそれ自体がどんな引数を与えればいいかのドキュメントになる
// ただ型チェックには影響ない
// 型引数は型推論が効くので省略できるが、メリットデメリットあり
// どこまでしっかり型情報を書くかはプロジェクトによるかなー
// なんでもかんでも書いてもコード量が多くなるだけ
// 何を目的にするかが一番大事かも

type F = (repeatNum: number) => string;

const xRepeat: F = (num: number): string => "x".repeat(num);

console.log(xRepeat(5));
