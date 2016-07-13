/**
 * Created by Administrator on 2016-07-08.
 */

function add([x, y]) {
    return x + y;
}

console.log(`add([1,2])'s value is: ${add([1, 2])}`);

console.log([[1, 2], [3, 4]].map(([a, b]) => a + b));//[3, 7]

//函数参数的解构使用默认值
function move({ x = 0, y = 0 } = {}) {
    return [x, y];
}
console.log(`move({x: 3, y: 8}) is: ${move({x: 3, y: 8})}`);
console.log(`move({x: 3}) is: ${move({x: 3})}`);
console.log(`move({}) is: ${move({})}`);
console.log(`move() is: ${move()}`);

//以下写法会得到不一样的结果, 为函数的参数指定默认值，而不是为变量x和y指定默认值
function move1({x, y} = {x: 0, y: 0}) {
    return [x, y];
}
console.log(`move1({x: 3, y: 8}) is: ${move1({x: 3, y: 8})}`);
console.log(`move1({x: 3}) is: ${move1({x: 3})}`);
console.log(`move1({}) is: ${move1({})}`);
console.log(`move1() is: ${move1()}`);

//undefined会触发参数的默认值
console.log([1, undefined, 3].map((x = 'yes') => x));