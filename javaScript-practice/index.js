//問題: const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください e.g{ a:'a', b:'b' }
const a = {a : 'a'};
const b = {b : 'b'};
const c = {...a, ...b};

//問題: const arry = ['aa','bb','cc','dd','ee','ff','gg']; のdd,ee,ffを新たな配列として返してください
const arry = ['aa','bb','cc','dd','ee','ff','gg'];
const newArry = arry.slice(-4, -1);
// this might be helpful to understand slice method (https://www.javadrive.jp/javascript/string/index8.html)