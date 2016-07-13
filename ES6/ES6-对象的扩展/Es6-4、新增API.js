/**
 * Created by Administrator on 2016-07-12.
 */
//Object.is()用来比较两个值是否严格相等
console.log(Object.is('foo', 'foo'));
console.log(Object.is({}, {}));

console.log(`+0与-0用===比较是否相等：${+0 === -0}`);
console.log(`+0与-0用Object.is()比较是否相等：${Object.is(+0, -0)}`);

console.log(`NaN与NaN用===比较是否相等：${NaN === NaN}`);
console.log(`NaN与NaN用Object.is()比较是否相等：${Object.is(NaN, NaN)}`);

//Object.assign()用于对象的合并
//如果具有同名属性，后面的会覆盖前面的；如果只有一个参数，则返回该参数
//如果不是对象，则先转换成对象
//实行的是浅拷贝，如果源对象某个属性的值是对象，则目标对象拷贝得到的是这个对象的引用
var target = {a: 1};
var source1 = {b: 2};
var source2 = {c: 3};

Object.assign(target, source1, source2);
console.log(target);

var obj = {a: 1};
var newObj = Object.assign(obj, {});
console.log(obj === newObj);

console.log(typeof Object.assign(2));
//console.log(typeof Object.assign(undefined));//报错
//console.log(typeof Object.assign(null));//报错

var v1 = 'abc';
var v2 = true;
var v3 = 10;
var obj2 = Object.assign({}, v1, v2, v3);
console.log(obj2);

/*
 * 如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。
 * 首先，这些参数都会转成对象，如果无法转成对象，就会跳过。
 * 这意味着，如果undefined和null不在首参数，就不会报错。
 *
 * */

let obj1 = {a: 1};
console.log(Object.assign(obj1, undefined) === obj1);
console.log(Object.assign(obj1, null) === obj1);

console.log(Object(true));
console.log(Object(10));
console.log(Object('abc'));

//不拷贝不可枚举的属性（enumerable: false）
var newObj2 = Object.assign({b: 'c'},
    Object.defineProperty({}, 'invisible', {
        enumerable: false,
        value: 'hello'
    })
)
console.log(newObj2);

var obj2 = {a: {b: 1}};
var obj3 = Object.assign({}, obj2);

obj2.a.b = 2;
console.log(obj3.a.b);

//嵌套对象，遇到同名属性，是替换而不是添加
var target2 = {a: {b: 'c', d: 'e'}};
let source = {a: {b: 'hello'}};
console.log(Object.assign(target2, source));

//可以处理数组，会把数组当做对象
console.log(Object.assign([1, 2, 3], [4, 5]));

//常见用途
//1、为对象添加属性
class Point {
    constructor(x, y) {
        Object.assign(this, {x, y});
    }
}

var p = new Point(1, 2);
console.log(p);

//2、为对象添加方法
class SomeClass {
}
Object.assign(SomeClass.prototype, {
    someMethod(arg1, arg2){
        console.log(arg1, arg2);
    },
    anotherMethod(){
        console.log(this.name);
    }
});
//等同于
/*
 SomeClass.prototype.someMethod = function (arg1, arg2) {
 console.log(arg1, arg2);
 };
 SomeClass.prototype.anotherMethod = function () {
 console.log(this.name);
 };*/

var some1 = new SomeClass();
some1.someMethod(1, 2);
some1.anotherMethod();

//3、克隆对象
function clone(origin) {
    return Object.assign({}, origin);
}
console.log(clone({"FirstName": "Nash"}));

//克隆继承链
function cloneEx(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
}

//4、合并多个对象
const merge = (target, ...sources)=>Object.assign(target, ...sources);//合并到某个对象
console.log(merge({Id: 123}, {Name: "Liming"}, {Age: 24}, {Gender: "Male"}))

const mergeEx = (...sources)=>Object.assign({}, ...sources);//合并后返回一个新对象
console.log(merge({Id: 123}, {Name: "Liming"}, {Age: 24}, {Gender: "Male"}))

//5、为属性指定默认值
const DEFAULTS = {
    logLevel: 0,
    outoutFormat: 'html'
};
function processContent(options) {
    return Object.assign({}, DEFAULTS, options);
}

//Object.getOwnPropertyDescriptor(),获取对象某个属性的描述对象
let obj4 = {foo: 123};
console.log(Object.getOwnPropertyDescriptor(obj4, 'foo'));
/*
 * { value: 123,
 *  writable: true,
 *  enumerable: true, //可枚举性
 *  configurable: true }
 * */
//以下四个操作会忽略enumerable为false的属性
//for...in循环：只遍历对象自身的和继承的可枚举的属性
//Object.keys()：返回对象自身的所有可枚举的属性的键名
//JSON.stringify()：只串行化对象自身的可枚举的属性
//Object.assign()

//所有Class的原型的方法都是不可枚举的

console.log(Object.getOwnPropertyDescriptor(class {
    foo() {
    }
}.prototype, 'foo').enumerable);

//属性的遍历
/*
 * 遍历次序规则:
 *-首先遍历所有属性名为数值的属性，按照数字排序。
 * -其次遍历所有属性名为字符串的属性，按照生成时间排序。
 * -最后遍历所有属性名为Symbol值的属性，按照生成时间排序。
 * */
var obj5 = {[Symbol()]: 0, b: 0, 10: 0, 2: 0, a: 0};
console.log(Reflect.ownKeys(obj5));//返回一个数组，包含对象自身的所有属性，不管是属性名是Symbol或字符串，也不管是否可枚举
for (let attr in obj5) {//循环遍历对象自身的和继承的可枚举属性（不含Symbol属性）
    console.log(attr);
}
console.log(Object.keys(obj5));//返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含Symbol属性）
console.log(Object.getOwnPropertyNames(obj5));//返回一个数组，包含对象自身的所有属性（不含Symbol属性，但是包括不可枚举属性）。
console.log(Object.getOwnPropertySymbols(obj5));//返回一个数组，包含对象自身的所有Symbol属性

//__proto__属性，Object.setPrototypeOf(),Object.getPrototypeOf()
//1、__proto__属性(尽量避免使用)
//es6的写法
var someOtherObj = {CreateDate: '2016-07-12'};
var testObj6 = {
    method: function () {
        console.log("__proto__");
    }
}
testObj6.__proto__ = someOtherObj;

//es5的写法
var testObj5 = Object.create(someOtherObj);
testObj5.method = function () {
    console.log("__proto__");
}

//2、Object.setPrototypeOf(),设置一个对象的prototype对象（作用与__proto__相同，推荐使用）
var o = Object.setPrototypeOf({}, null);
//等同于
/*
 function (obj, proto) {
 obj.__proto = proto;
 return obj;
 }*/

let proto = {};
let obj6 = {x: 10};
Object.setPrototypeOf(obj6, proto);
proto.y = 20;
proto.z = 40;
console.log(obj6.x);
console.log(obj6.y);
console.log(obj6.z);

//3、Object.getPrototypeOf(),获取一个对象的prototype对象
function Rectangle() {
}
var rec = new Rectangle();
console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);
Object.setPrototypeOf(rec, Object.prototype);
console.log(Object.getPrototypeOf(rec) === Rectangle.prototype);
