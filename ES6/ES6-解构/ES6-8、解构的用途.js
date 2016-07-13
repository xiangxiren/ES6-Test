/**
 * Created by Administrator on 2016-07-08.
 */
//1、交换变量的值
let x = 10;
let y = 20;
console.log(`before exchange:x = ${x}, y = ${y}`);
[x, y] = [y, x];
console.log(`after exchange:x = ${x}, y = ${y}`);

//2、从函数返回多个值

//返回一个数组
function exampleArr() {
    return [1, 2, 3];
}
var [a, b, c] = exampleArr();

//返回一个对象
function exampleObj() {
    return {foo: 1, bar: 2};
}
var { foo, bar } = exampleObj();

//3、函数参数的定义
//参数是一组有次序的值
function f0([x, y, z]) {
    console.log(`f0: x + y + z = ${x + y + z}`);
}
f0([1, 2, 3]);

//参数是一组无次序的值
function f1({x, y, z}) {
    console.log(`f1: x + y + z = ${x + y + z}`);
}
f1({z: 3, y: 2, x: 1});

//4、 提取JSON数据
var jsonData = {id: 42, status: "OK", data: [867, 5309]};

let { id, status, data: number }=jsonData;
console.log(id, status, number);

//5、函数参数的默认值
//6、遍历Map结构
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let [key, value] of map) {
    console.log(`${key} is ${value}`);
}

//只获取键名
for (let [key] of map) {
    console.log(`the key is ${key}`);
}
//只获取键值
for (let [,value] of map) {
    console.log(`the value is ${value}`);
}

//7、 输入模块的指定方法
//const { SourceMapConsumer, SourceNode } = requeue("source-map");