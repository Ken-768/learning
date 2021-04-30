//問題1: const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください e.g{ a:'a', b:'b' }
const a = {a : 'a'};
const b = {b : 'b'};
const c = {...a, ...b};

//問題2: const arry = ['aa','bb','cc','dd','ee','ff','gg']; のdd,ee,ffを新たな配列として返してください
const arry = ['aa','bb','cc','dd','ee','ff','gg'];
const newArry = arry.slice(-4, -1);
// this might be helpful to understand slice method (https://www.javadrive.jp/javascript/string/index8.html)

//問題3: ['a','b’] の要素をconsole出力してください e.g 'a'と'b'
const arry = ['a', 'b'];
arry.forEach(i => console.log(i));

//問題4: ['a', 'b']の各要素にindex値を足した文字列を出力してくださいe.g 'a0'と'b1'
const arry = ['a', 'b'];
arry.forEach(
    function(el, i) {
        console.log(el + i);
    }
);

//問題5: 任意の変数名の[1,2]を定義して配列かどうかを評価してください e.g true
Array.isArray([1, 2]);

//問題8: keyとvalueを自身のプロパティのみ全て出力しなさい
const obj = {
    key: 'aa',
    key2: 'bb'
}

for(key in obj) {
    if(obj.hasOwnProperty(key)){
        console.log(key, obj[key]);
    }
}