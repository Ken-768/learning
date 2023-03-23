//問題1: const a = { a: 'a' }とconst b = { b: 'b' } をマージしたc を出力してください e.g{ a:'a', b:'b' }
const a = {a : 'a'};
const b = {b : 'b'};
const c = {...a, ...b};

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

// const passed = [10, 6, 7, 120, 12];
// passed.forEach(function(e){
//     if (e >= 10) {
//         let aboveTen = [];
//         aboveTen.push(e);
//         if(aboveTen >= 10) {
//             console.log('hello')
//         }
//     };
// });

const aboveTen = (currentValue) => currentValue >= 10;
const passed = [10, 6, 7, 120, 12];
console.log(passed.every(aboveTen));
