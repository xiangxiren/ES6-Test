/**
 * Created by Administrator on 2016-07-08.
 */
/*
 * 对象的解构，变量必须与属性同名，不像数组那样按照次序
 * */

var { foo, bar } = {foo: "aaa", bar: "bbb"};
console.log(`foo's value is:${foo}`);
console.log(`bar's value is:${bar}`);

//下面的写法能达到上面同样的效果
var { bar1, foo1 } = {foo1: "aaa", bar1: "bbb"};
console.log(`foo1's value is:${foo1}`);
console.log(`bar1's value is:${bar1}`);

var { baz } = {foo: "aaa", bar: "bbb"};
console.log(`baz's value is ${baz}`);

///变量名和属性名不一致
var { obj: x1 } = {obj: "aaa", bar: "bbb"};
console.log(`x1's value is ${x1}`);

let obj = {first: 'hello', last: 'world'};
let { first: f, last: l } = obj;
console.log(`f's value is ${f}`);
console.log(`l's value is ${l}`);

//x2:x2 是给后面的x2赋值
var { x2: x2, y2: y2 } = {x2: "aaa", y2: "bbb"};
console.log(`x2 is ${x2}`);
console.log(`y2 is ${y2}`);

var { x3: y3 } = {x3: "aaa", y3: "bbb"};
console.log(`y3's last is ${y3}`);
//console.log(`x3's value is ${x3}`); //报错，x3未定义

let x4;
//let { x4 } = {x4: 1};  //报错x4已经被声明
let y4;
//let { y4: y4 } = {y4: 1};// 报错,y4已经被声明

//用于嵌套对象的解构
var obj1 = {p: ["hello", {y: "world"}]};
var { p: [x, { y } ] } = obj1;
console.log(`obj1.p's type is :${typeof obj1.p}`);
console.log(`obj1.p's length is :${obj1.p.length}`);
console.log(`obj1.p[0] is :${x}`);
console.log(`obj1.p[1]'s type is :${typeof obj1.p[1]}`);
console.log(`obj1.p[1].y's type is :${typeof obj1.p[1].y}`);
console.log(`obj1.p[1].y is :${y}`);

var node = {loc: {start: {line: 1, column: 5}}};
var { loc: { start: { line } } } = node;
//只有line是变量，loc,start都是模式
console.log(`line is ${line}`);

let obj2 = {};
let arr = [];
({ foo: obj2.prop, bar: arr[0] } = {foo: 123, bar: true});
console.log(`obj2.prop is ${obj2.prop}`);
console.log(`arr[0].prop is ${arr[0]}`);

//对象的解构也可以指定默认值
var { x5 = 3 } = {};
console.log(`x5's default value is ${x5}`);

var { x6, y6 = 5 } = {x6: 1};
console.log(`x6's value is ${x6}`);
console.log(`y6's default value is ${y6}`);

var { message: msg = "Something went wrong" } = {};
console.log(`msg's value is ${msg}`);

//默认值生效的条件是，对象的属性值严格等于undefined(===)
var { x7 = 3 } = {x7: undefined};
console.log(`x7's value is ${x7}`);

var { x7 = 3 } = {x7: null};
console.log(`x7's value is ${x7}`);

var { x7 } = {y7: 'baz'};
console.log(`x7's value is ${x7}`);

//解构模式是嵌套的对象，子对象所在的副属性不存在，报错
//var { x7: { y7 }} = {z7: 'baz'}; //报错 类似 var _tmp = {baz:'baz'}; _tmp.foo.bar

//将一个已经声明的变量用于解构赋值，需注意

var x;
//{x} = {x; 1};  //报错,javascript会将{x}理解成一个代码块，发生语法错误
//正确的写法,使用()括起来
({ x } = {x: 1});
console.log(`x is :${x}`);

//以下语法毫无意义，但是语法合法，可以执行
({}=[true, false]);
({}='abc');
({}=[]);

//将现有对象的方法，赋值到某个变量\
let { log, sin, cos } = Math;