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

/*
 * 时间戳转天数
 * */
let calcDays = function (timeStamp) {
    return parseInt(timeStamp / (60 * 60 * 24));
}

/*
 * 天数转年数
 *
 * */
var calcYer = function (days) {
    let years = 0;
    while (days > 365) {
        days -= years++ % 4 === 2 ? 366 : 365;
    }
    return {years, days};
}

/*
 *天数转月数
 * */
var calcMonth = function (year, days) {
    let months = 0;
    let isLeapYear = year % 4 === 0;
    while (days > 28) {
        months++;
        let diff = 0;
        switch (months) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                diff = 31;
                break;
            case 2:
                diff = isLeapYear ? 29 : 28;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                diff = 30;
                break;
        }
        days -= diff;
    }
    return {months, days};
}

let day = calcDays(1470041215);
let {years, days} = calcYer(day);

let {months, days:leaveDay} = calcMonth(1970 + years, days);

console.log(`时间戳为1470037131，共计${years}年，${months}月，${leaveDay}天`);
console.log(`1970年1月1日加上${years}年${months}月${leaveDay}天等于：${1970 + years}年${1 + months}月${leaveDay + 1}日`);
