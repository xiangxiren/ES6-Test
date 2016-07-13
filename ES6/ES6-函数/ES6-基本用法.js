/**
 * Created by Administrator on 2016-07-11.
 */
//参数指定默认值
function log(x, y = 'World') {
    console.log(x, y, '!');
}
log('Hello');
log('Hello', 'China');
log('Hello', '');

//与解构赋值默认值结合使用
function foo({x, y = 5} = {}) {
    console.log(x, y);
}
foo({});
foo({x: 1});
foo({x: 1, y: 2});
foo();

//函数的length属性，返回没有指定默认值的参数个数
console.log((function (a) {}).length);
console.log((function (a = 5) {}).length);
console.log((function (a, b, c = 5) {}).length);

//作用域
var x = 1;
function f(x, y = x) {//y指向函数作用域内部的x
    console.log(y);
}
f(2);

function f1(y = x) {//y指向全局变量x
    let x = 2;
    console.log(y);
}
f1();
//函数的参数默认值可以是表达式或者调用另一个函数
//如果函数A的参数默认值是函数B，由于函数的作用域是其声明时所在的作用域，那么函数B的作用域不是函数A，而是全局作用域
//利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。
function throwIfMissing() {
    //throw new Error('Missing parameter');
    console.log('Missing parameter')
}
function foo(mustBeProvided = throwIfMissing()) {
    return mustBeProvided;
}
foo();
