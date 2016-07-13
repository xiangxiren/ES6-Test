/**
 * Created by Administrator on 2016-07-06.
 */
//参数默认值，不定参数，拓展参数
function sayHello(name) {
    //传统的指定默认参数的方式
    var name = name || 'dude';
    console.log('Hello ' + name);
}

//运用ES6的默认参数
function sayHello2(name = 'dude') {
    console.log(`Hello ${name}`);
}

console.log('1、默认参数')
sayHello();
sayHello('Wayou');
sayHello2();
sayHello2('Wayou');

console.log('2、不定参数')
function add(...x) {
    return x.reduce((m, n)=>m + n);
    /*原始写法
     return x.reduce(function (a, b) {
     return a + b;
     })
     */
}
//传递任意个数的参数
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5))

console.log('3、拓展参数')
var people = ['Wayou', 'John', 'Sherlock'];
//sayHello函数本来接受三个单独的参数人一，人二和人三
function sayHello3(p1, p2, p3) {
    console.log(`Hello ${p1},${p2},${p3}`);
}
//但是我们将一个数组以拓展参数的形式传递，它能很好的映射到每个单独的参数
sayHello3(...people);

//而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
sayHello3.apply(null, people);
