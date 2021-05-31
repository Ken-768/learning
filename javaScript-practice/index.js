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

//問17: const array = ['a1','a2','a3','a4','a5']の全ての要素を"/"で結合した文字列を出力し、さらにその文字列を'/'区切りで配列に直してください
const array = ['a1','a2','a3','a4','a5'];
array.join('/').split('/');

//問18: 配列['おはよう','こんにちは','おやすみなさい']の要素がランダムに出力される関数を書いてください。(配列に要素が追加される事を仮定してたものにしてください)
const array = ['おはよう','こんにちは','おやすみなさい'];
const greeting = array[Math.floor(Math.random() * array.length)];
greeting;

//問19: Object.createで空のオブジェクトを作成し、値が1のプロパティpを出力してください
const obj = Object.create({}, {p : {value: 1}});
obj.p;

//問20: コンストラクタWhoの初期化時に'morita'(String)を渡しインスタンスプロパティnameに代入、 インスタンスメソッドgetNameの返り値がWho.prototype.name値になるいわゆる「classのようなもの」を作成してください ※インスタンスメソッドはprototypeに代入してください
function Who(name) {
    this.name = name;
}

Who.prototype.getName = function() {
    console.log('Myname is ' + this.name);
};

let o = new Who('Morita');
o.getName();

//問21: 実行した結果を答えてください
let array = ['e','a','k','B','c'];
array.sort();
// ["B", "a", "c", "e", "k"]

//問22: 上記の配列を大文字小文字区別なく順番通りにしてください。期待する値['a','B','c', 'e','k']
let array = ['e','a','k','B','c'];
array.sort(function(a, b) {
    return a.toUpperCase() > b.toUpperCase() ? 1 : -1;
});

//問23: [20,100,3,35,0]を比較する配列の要素が数値の場合、「降順」にsortしてください 期待する結果[100, 35, 20, 3, 0]
let number = [20,100,3,35,0];
number.sort(function(a, b) {
    return b - a;
});

//問24: 文字列 '10'をNumber型にし、型判定し、数値かどうか評価後、文字列に変換してください
let a = parseInt('10', 10);

//問25: カーリー化されたadd(1)(2)もしくはadd(1,2) を実行した際両方とも返り値3になる関数を定義しなさい
function add(x, y) {
    if(typeof y == 'undefined') {
        return function(y) {
            return x + y;
        }
    }
    return x + y;
}
add(1)(2);
add(1, 2);

//問26: クロージャーを使ったファクトリー関数。
//var fafa = Factory('morita');
//fafa.introduce()
//上記のような実行をしたら渡したname(ここではmorita)が表示されるメソッドintroduceを持つファクトリー関数を定義しなさい。
function Factory(name) {
    function getName() {
        return name;
    };
    return {
        introduce: function() {
            console.log(getName());
        }
    }
};
const fafa = Factory('Morita');
fafa.introduce();

//問27 関数sayHiに自分の名前を引数で渡した際にhello!yourname、何も渡さない場合hello! と返す関数を作成し、それをapplyで実行してください。また applyの第一引数にnullを渡す場合とオブジェクトを渡す場合のそれぞれのthisは何を指しますか答えてください
let sayHi = function() {
    return 'hello' + (name ? name : '');
}
sayHi('Kenji');
sayHi();
sayHi.apply(null, ['kenji']);
let greeting = {
    sayHi: function(name) {
        return 'hello' + (name ? name : '');
    }
};
greeting.sayHi.apply(greeting, ['kenji']);
greeting.sayHi.apply(greeting);