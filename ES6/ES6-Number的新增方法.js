/**
 * Created by Administrator on 2016-07-11.
 */
//Number.isFinite()用来检查一个数值是否非无穷（infinity），只对数值有效，非数值一律返回false。
console.log(Number.isFinite(15)); // true
console.log(Number.isFinite(0.8)); // true
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite('foo')); // false
console.log(Number.isFinite('15')); // false
console.log(Number.isFinite(true)); // false

//Number.isNaN()用来检查一个值是否为NaN，只对数值有效，非数值一律返回false。
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(15)); // false
console.log(Number.isNaN('15')); // false
console.log(Number.isNaN(true)); // false
console.log(Number.isNaN(9 / NaN)); // true
console.log(Number.isNaN('true' / 0)); // true
console.log(Number.isNaN('true' / 'true')); // true

//Number.isInteger()用来判断一个值是否为整数,在JavaScript内部，整数和浮点数是同样的储存方法
console.log(Number.isInteger(25)); // true
console.log(Number.isInteger(25.0)); // true
console.log(Number.isInteger(25.1)); // false
console.log(Number.isInteger("15")); // false
console.log(Number.isInteger(true)); // false
