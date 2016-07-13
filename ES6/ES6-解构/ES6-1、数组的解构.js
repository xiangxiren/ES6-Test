/**
 * Created by Administrator on 2016-07-06.
 */
//解构
var [x,y] = getValue(),//函数返回值的解构
    [name,,age] = ['wayou', 'male', 'secrect'];//数组解构

function getValue() {
    return [1, 2];
}

console.log('x:' + x + ', y:' + y);
console.log('name:' + name + ', age:' + age);

let [a, b, c] = [1, 2, 3];
console.log(`a:${a}`);
console.log(`b:${b}`);
console.log(`c:${c}`);

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(`foo:${foo}`);
console.log(`bar:${bar}`);
console.log(`baz:${baz}`);

let [ , , third0] = ["foo", "bar", "baz"];
console.log(`third0:${third0}`);

let [m, , n] = [1, 2, 3];
console.log(`m:${m}`);
console.log(`n:${n}`);

let [head, ...tail] = ["foo", "bar", "baz"];
console.log(`head:${head}`);
console.log(`tail:${tail}`);
console.log(`tail's type is :${typeof tail}`);
console.log(`tail's first value is :${tail[0]}`);
console.log(`tail's second value is :${tail[1]}`);

var [o, p, ...q] = ['a'];
console.log(`o is ${o}`)
console.log(`o is ${p}`)
console.log(`o is ${q}`)

let [x1, y1] = [1, 2, 3];
console.log(`x1 is ${x1}`)
console.log(`y1 is ${y1}`)

const [a1, [a2], a3] = [1, [2, 3], 4];
console.log(`a1 is ${a1}`)
console.log(`a2 is ${a2}`)
console.log(`a3 is ${a3}`)

let [x0, y0, z0] = new Set(["a", "b", "c"]);
console.log(`x0 is ${x0}`)
console.log(`y0 is ${y0}`)
console.log(`z0 is ${z0}`)

/*
 * 事实上，只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值。
 * 不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组
 * */

function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
        console.log(`a:${a},b:${b}`);
    }
}

var [first, second, third, fourth, fifth, sixth, seven] = fibs();
console.log(`first is ${first}`);
console.log(`second is ${second}`);
console.log(`third is ${third}`);
console.log(`fourth is ${fourth}`);
console.log(`fifth is ${fifth}`);
console.log(`sixth is ${sixth}`);
console.log(`seven is ${seven}`);