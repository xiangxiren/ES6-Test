/**
 * Created by Administrator on 2016-07-11.
 */
var f = v => v;
console.log(f(2));

var f = () => 5;
console.log(f());

var sum = (num1, num2) =>num1 + num2;
console.log(sum(3, 4));

//如果箭头函数返回一个对象，必须在对象外面加上括号
var getTempItem = id=>({id: id, name: "Temp"});
console.log(getTempItem('id'));

//箭头函数结合变量解构使用
const full = ({first,last}) => `${first} ${last}`;
console.log(full({last: 'Joe', first: 'James'}));

//rest参数与箭头函数结合
const numbers = (...nums) => nums;
console.log(numbers(1, 2, 3, 4, 5));
const headAndTail = (head, ...tail) =>[head, tail];
console.log(headAndTail(1, 2, 3, 4, 5));

/*
 * （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
 * （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
 * （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
 * （4）不可以使用yield命令，因此箭头函数不能用作Generator函数。
 * */

function foo() {
    setTimeout(() => {
        console.log('id:', this.id);//id=42
    }, 100);
}
var id = 21;
foo.call({id: 42});

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);

function foo() {
    return () => {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    };
}

var f = foo.call({id: 1});
var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1

///arguments、super、new.target、this在箭头函数中是不存在的，指向外层函数的对应变量
function foo1() {
    setTimeout(() => {
        console.log('args:', arguments);
    }, 100);
}

foo1(2, 4, 6, 8);

//不能用call()、apply()、bind()去改变this的指向
var val = (function () {
    return [
        (() => this.x).bind({x: 'inner'})()
    ];
}).call({x: 'outer'});
console.log(val);

//嵌套的箭头函数
function insert(value) {
    return {
        into: function (arr) {
            return {
                after: function (afterValue) {
                    arr.splice(arr.indexOf(afterValue) + 1, 0, value);
                    return arr;
                }
            }
        }
    }
}

console.log(insert(2).into([1, 3]).after(1));

//使用箭头函数改写如下
let insertE = (value) => ({
    into: (array) => ({
        after: (afterValue) => {
            array.splice(array.indexOf(afterValue) + 1, 0, value);
            return array;
        }
    })
});
console.log(insertE(2).into([1, 3]).after(1));