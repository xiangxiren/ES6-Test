/**
 * Created by Administrator on 2016-07-08.
 */
//如果等号右边是数值或布尔值，则先转为对象
var { toString: s} = 123;
console.log(`123.toString is: ${s}`);
console.log(`s ==== Number.prototype.toString is: ${s === Number.prototype.toString}`);

var { toString: s } = true;
console.log(`true.toSrting is: ${s}`);
console.log(`s === Boolean.prototype.toSrting is: ${s === Boolean.prototype.toString}`);

//只要等号右边的值不是对象，就先转为对象，undefined和null无法转为对象，对它们解构赋值会报错
//let { peop: x } = undefined;  //报错
//let { prop: y } = null;  //报错