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

//問28: このobjをプロパティ追加不可、削除変更は可能にし、プロパティ追加不可か否かの判定メソッドでtrueが返る事を確認した後、objのkeyを列挙してください。
let obj = {x : 2, y: 3};
Object.preventExtensions(obj);
Object.isExtensible(obj);
Object.keys(obj);

//問29: let obj = {} と等価をObjctメソッドで生成してください
Object.create(Object.prototype);

//問30: let obj = {x : 2, y: 3}と等価をObjectメソッドで生成してください
let obj = Object.create(Object.prototype, {
    x : {value: 2},
    y : {value: 3}
})

//問31: const obj = { x : 2}の属性を出力してください
const obj = { x : 2}
Object.getOwnPropertyDescriptor(obj, 'x');

//問31: こちら var obj2 = {x : 2};にObjectメソッドを用いてプロパティy、値2、プロパティ追加可能を定義して、Objectメソッドで情報(値と属性)を返してください
let obj2 = {x : 2};
Object.defineProperty(obj2, 'y', {value: 3, enumerable: true});
Object.getOwnPropertyDescriptor(obj2, 'y')

//問32: 実引数の数を出力、第一引数を出力する関数fを実行してください
function f() {
    console.log(arguments.length);
    console.log(arguments[0]);
}
f(2);

//問33: let arr = ['2','23','0','16'];を小さい順にソートしてください。その後ソートをできないようにread-onlyにしてください
let arr = ['2','23','0','16'];
arr.sort(function(a, b) {
    return a - b;
});
Object.freeze(arr);
arr.sort();

//問34: var arr = [3,4,5];をconcat以外で新たな配列としてarr2にコピーしてください。その後arr2[0]= 123を代入するとarrは何を出力するか答えなさい
var arr = [3, 4, 5];
let arr2 = arr.slice(0, arr.length);
arr2[0] = 123;
arr;
arr2;

//問35: const getSum = (a, b) => a + b; このパラメーターに何もわたってこなかった場合Errorをスローすようにしてください 期待する結果 getSum(10) //throws b is not defined getSum(undefined, 10) //throws a is not defined
const _err = function(message) {
    throw new Error(message);
}
const getSum = (a = _err('a is not defined'), b = _err('b is not defined')) => a + b
getSum(10);
getSum(undefined, 10);
getSum(10, 20);

//問38: DOM上にあるdivをnodeListに変換して配列に格納してください
const nodelist = [...document.querySelectorAll('div')];

//問39: 配列var arr = ['f','o','x','k'];をインデックス順に出力させてください
var arr = ['f','o','x','k'];
arr.forEach(i => {
    console.log(i);
});

//問40: またイテレーターを使い順番に出力してください
var arr = ['f', 'o', 'x', 'k'];
let eArr = arr[Symbol.iterator]();
eArr.next().value;
eArr.next().value;
eArr.next().value;
eArr.next().value;

//問41: 配列['a', 'b', 'c', 'd', 'e'] のインデックス2番目に'morita'という要素を加えなさい。期待する結果['a', 'b','morita', 'c', 'd', 'e']
let array = ['a', 'b', 'c', 'd', 'e'];
array.splice(2, 0, 'morita');
array;

//問42: var o = {};と同じ意味を持つコードをObjectのAPIを使って生成してください
let o = Object.create(Object.prototype);

//問43: {p: 42}となるようなオブジェクトをObjectメンバを使って生成してください
let o = Object.create({}, {p: {value: 42}});

//問44: 1234という数字を文字列に変更後、配列の要素としてインデックス順に格納してください
let count = 1234;
let ee = count.toString();
let arr = [];
for(let i = 0; i < ee.length; i++) {
    arr[i] = ee.charAt(i);
}
arr;

//問45: こちらは要素が2だったらループを抜けたいのだが期待どうり動かない 期待する出力 //0, 1
// [0, 1, 2, 3, 4].forEach(function(val, i) {
//     if (val === 2) {
//       // how do we stop?
//       return true;
//     }
//     console.log(val);
//   });

[0, 1, 2, 3, 4].some(function(val, i) {
    if (val === 2) {
    return true;
    }
    console.log(val); // your code
});

//問46
let Speaker = {
    say : function(wordGetter) {
        let words = wordGetter();
        alert(words);
    }
};
function Person(nickname) {
    this.nickname = nickname;
}
Person.prototype.sayName = function() {
    Speaker.say(function(){
        return this.nickname;
    }.bind(this));
}
let person = new Person('moriken');
person.sayName();