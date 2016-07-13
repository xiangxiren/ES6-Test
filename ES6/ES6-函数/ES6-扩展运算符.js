/**
 * Created by Administrator on 2016-07-11.
 */
/*
 * 扩展运算符（...）,好比rest参数的逆运算，将一个数组用逗号分隔的参数序列
 * */
console.log(...[1, 2, 3]);
console.log(1, ...[2, 3, 4], 5)

function push(array, ...items) {
    array.push(...items);
}

function add(x, y) {
    return x + y;
}

var numbers = [4, 38];
console.log(add(...numbers)); // 42
function f(v, w, x, y, z) {
    console.log(v, w, x, y, z);
}
var args = [0, 1];
f(-1, ...args, 2, ...[3], 4);

//替换aplly方法
function f(x, y, z) {
    console.log(x, y, z);
}
var args = [0, 1, 2];
// ES5的写法
f.apply(null, args);
// ES6的写法
f(...args);

// ES5的写法
console.log(Math.max.apply(null, [14, 3, 77]));
// ES6的写法
console.log(Math.max(...[14, 3, 77]));
// 等同于
console.log(Math.max(14, 3, 77));

// ES5的写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);
console.log(...arr1);

// ES6的写法
arr1 = [0, 1, 2];
arr1.push(...arr2);
console.log(...arr1);

//扩展运算符的应用
//合并数组
var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];
console.log(arr1.concat(arr2, arr3));
console.log([...arr1, ...arr2, ...arr3]);

//与解构赋值结合,扩展运算符只能放在参数的最后一位
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(rest);

//函数的返回值，当函数需要返回多个值的时候
//将字符串转为真正的数组
console.log([...'hello']);

//实现了Iterator接口的对象，任何Iterator接口的对象，都可以用扩展运算符转为真正的数组
//扩展运算符内部调用的是数据结构的Iterator接口,因此只要具有Iterator接口的对象，都可以使用扩展运算符
let map = new Map([[1, 'one'], [2, 'two'], [3, 'three']]);
let arr = [...map.keys()];
console.log(arr);

var go = function*() {
    yield 4;
    yield 5;
    yield 6;
}
console.log([...go()]);