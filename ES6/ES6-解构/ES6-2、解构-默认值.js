/**
 * Created by Administrator on 2016-07-08.
 */

//解构赋值允许默认值
var [fo = true] = [];
console.log(`fo's default value is ${fo}`);
/*
 * ES6使用严格相等运算符(===)判断一个位置是否有值
 * */

[x, y = 'b'] = ['a'];
console.info(`x:${x}`);
console.info(`y has a default value, it's ${y}`);

[x, y = 'b'] = ['a', undefined];
console.info(`x:${x}`);
console.info(`y has a default value, it's ${y}`);

var [x0 = 1] =[undefined];
console.info(`x0 is ${x0}`);

//null不严格等于undefined
[x0 = 1] =[null];
console.info(`x0 is ${x0}`);

//默认值是表达式的时候，惰性求值，即在使用的时候才求职
function f() {
    console.log('aaa');
}

//函数f()不会执行，因为x能取到值
let [x1 = f()] = [1];

//等价于下面的代码
/*
 let x2;
 if ([1][0] === undefined) {
 x2 = f();
 } else {
 x2 = [1][0];
 }
 */

//默认值可以引用解构赋值的其他变量，但该变量必须声明
let [a1 = 1, b1 = a1 ] = [];
console.log(`a1:${a1}`);
console.log(`b1:${b1}`);

[a1 = 1, b1 = a1 ] = [2];
console.log(`a1:${a1}`);
console.log(`b1:${b1}`);

[a1 = 1, b1 = a1 ] = [10, 20];
console.log(`a1:${a1}`);
console.log(`b1:${b1}`);

//a2用到b2时，b2还没有声明，因此会报错
[a2 = b2, b2 = 1 ] = [];
console.log(`a2:${a2}`);
console.log(`b2:${b2}`);