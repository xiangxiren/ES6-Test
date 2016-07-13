/**
 * Created by Administrator on 2016-07-06.
 */
var MyClass = (function () {
    //创建Symbol
    var key = Symbol("key");

    function MyClass(privateData) {
        this[key] = privateData;
    }

    MyClass.prototype = {
        doStuff: function () {
        }
    };
    return MyClass;
})();

var c = new MyClass("hello");
console.log(c["key"] === undefined);

var s1 = Symbol();
var s2 = Symbol();
console.log(s1);
console.log(s2);
console.log(s1.toString());
console.log(s2.toString());
console.log(s1 === s2);

//加参数的作用是用于区分,相同参数的Symbol函数的返回值是不相等的
var s3 = Symbol("foo");
var s4 = Symbol("foo");
console.log(s3);
console.log(s4);
console.log(s3.toString());
console.log(s4.toString());
console.log(s3 === s4);

//Symbol值不能参与运算，但是可以显示转为字符串
var sym = Symbol('My symbol');
console.log(String(sym));
console.log(sym.toString());

//转为布尔值
var sym1 = Symbol();
console.log(Boolean(sym1));
console.log(!sym1);

//作为属性名的Symbol，不能使用点运算符
var mySymbol = Symbol();

//第一种写法
var a = {};
a[mySymbol] = 'Hello!';

//第二种写法
var b = {
    [mySymbol]: 'Hello!'
};

//第三种写法
var c = {};
Object.defineProperty(c, mySymbol, {value: 'Hello!'});
console.log(a[mySymbol]);
console.log(b[mySymbol]);
console.log(c[mySymbol]);
