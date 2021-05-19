//問題1: const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください e.g{ a:'a', b:'b' }
const a = {a : 'a'};
const b = {b : 'b'};
const c = {...a, ...b};

//問題2: const arry = ['aa','bb','cc','dd','ee','ff','gg']; のdd,ee,ffを新たな配列として返してください
const arry2 = ['aa','bb','cc','dd','ee','ff','gg'];
const newArry = arry2.slice(-4, -1);
// this might be helpful to understand slice method (https://www.javadrive.jp/javascript/string/index8.html)

//問題3: ['a','b’] の要素をconsole出力してください e.g 'a'と'b'
const arry3 = ['a', 'b'];
arry3.forEach(i => console.log(i));

//問題4: ['a', 'b']の各要素にindex値を足した文字列を出力してくださいe.g 'a0'と'b1'
const arry4 = ['a', 'b'];
arry4.forEach(
    function(el, i) {
        console.log(el + i);
    }
);

//問題5: 任意の変数名の[1,2]を定義して配列かどうかを評価してください e.g true
Array.isArray([1, 2]);

//問題8: keyとvalueを自身のプロパティのみ全て出力しなさい
const obj8 = {
    key: 'aa',
    key2: 'bb'
}

for(key in obj8) {
    if(obj8.hasOwnProperty(key)){
        console.log(key, obj8[key]);
    }
}

//問題9:  ['a', 'b', 'c'] 配列の中の全ての要素を結合し、1つの文字列として出力してください。
const array9 = ['a', 'b', 'c'];

array9.join = "";
//or
let str = '';
const count = array9.length;

for (let i = 0; i < count; i++) {
    str += array9[i];
}

str

//問題11: id番号が若い順にソートしたオブジェクトを含む配列を出力してください
let arry11 =[
    {id:1,name:'morita'},
    {id:2,name:'kenji'},
    {id:4,name:'uro'},
    {id:3,name:'ken'}
];
arry11.sort(function(a,b){
    return a.id > b.id
})

//問題12: a, bの変数はデフォルトとしてaは5、bは7を持ち、aに1を代入してconsole出力してください。
const [a = 5, b = 7] = [1];
//or
const {a = 5, b = 7} = {a: 1};

//問題13: next()を実行しただけ返り値が1増える関数を定義してください
const setUp = function() {
    let count = 0
    return function() {
        return (count += 1);
    }
}
const next = setUp();

//問題14: fun(1,2,3)を実行したら引数が全て配列で返る関数funを定義しなさい
function fun() {
    return Array.from(arguments);
}
fun(1, 2, 3);

//問題15: const array = ['a1','a2','a3','a4','a5']の0〜2番目の要素をそれぞれred, green, yellow
const array = ['a1','a2','a3','a4','a5'];
array.splice(0, 3, 'red', 'green','yellow');

//問題16: const array = ['a1','a2','a3','a4','a5']のインデックス2〜4の要素を取り出し、 配列として出力しなさい。 実行された後のarrayの要素を教えてください
const array = ['a1','a2','a3','a4','a5'];
const newArray = array.slice(1, 4);