/**
 * Created by Administrator on 2016-07-07.
 */
var sum = function (a, b) {
    return a + b;
}

var add = sum;
console.log(delete sum);
console.log(typeof sum);

var obj = {x: 1, y: 2};
console.log(delete(obj.x));
console.log(obj);
console.log(obj.x);

var x = 1;
console.log(delete x);//delete不能删除变量
console.log(x);

function add() {
};
console.log(delete add); //delete不能删除函数
console.log(typeof add);

/*
 * 总结：一下几种情况不能用delete删除
 * 1.激活对象的arguments对象
 * function func(){
 *   delete arguments; //false
 *   alert(arguments);
 * }
 * func(1);
 *
 * 2,变量声明
 * var a = 10l
 * delete a; //false
 * alert(a); //10
 *
 * 不用var声明的变量是可以删除的
 *  b = 1;
 *  delete b;//true
 *  alert(b); //Uncaught ReferenceError: a is not defined
 *
 * 3.函数声明
 * function func(){}
 * delete func();//false
 * alert(func); //func code
 *
 * 4.函数的length属性
 * function func(a, b){}
 * delete func.length;//false
 * alert(func.legngth);//2
 *
 * 5.一些常量(NaN,Infinity,undefined)
 * delete NaN;//false
 * delete Infinity;//false
 * delete undefined;//false
 *
 * 6.内置构造器的prototype
 * delete Object.prototype;//false
 * delete Funciton.prototype;//false
 * delete Array.prototype;//false
 * delete ExpReg.prototype;//false
 * delete Date.prototype;//false
 * delete Error.prototype;//false
 * delete Number.prototype;//false
 * delete Boolean.prototype;//false
 * delete String.prototype;//false
 *
 * 7.数组和字符串的length
 * var arr =  [], str ='hello';
 * delete arr.legnth;//false
 * delete str.length;//false
 *
 * 8.Math对象的属性（Math.E、Math.LN10、Math.LN2、Math.LOG2E、Math.LOG10E、Math.PI、Math.SQRT1_2、Math.SQRT2）
 * delete Math.E;//false
 *
 * 9.正则对象的属性（source、global、ignoreCase、multiline、lastIndex）
 * var reg = /ss/;
 * delete reg.source; // false
 * */

var obj = {name: 'john'};
Object.defineProperty(obj, "key", {
    configurable: false,
    value: 'static'
});

console.log(delete obj.name);
console.log(delete obj.key);
console.log(obj.name);
console.log(obj.key);