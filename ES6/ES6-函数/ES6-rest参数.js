/**
 * Created by Administrator on 2016-07-11.
 */
/*
 * rest参数(形式为"...变量名")，用于获取函数的多余参数,
 * rest参数之后不能再有其他参数
 * */
function add(...values) {
    let sum = 0;
    for (var val of values) {
        sum += val;
    }
    return sum;
}
console.log(add(2, 5, 3));

// arguments变量的写法
function sortNumbers() {
    return Array.prototype.slice.call(arguments).sort();
}

// rest参数的写法
const sortNumbers = (...numbers) => numbers.sort();
