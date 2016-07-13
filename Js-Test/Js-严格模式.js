/**
 * Created by Administrator on 2016-07-07.
 */
"use strict";//严格模式
/*
 * 1.在严格模式下，禁止没有声明就赋值
 * 2.禁止使用with
 * 3.创设eval作用域
 * 4.禁止this关键字指向全局对象
 */


//v = 1;

var x = 2;
console.info(eval("var x = 5; x")); // 5
console.info(x); // 2

function f() {
    this.a = 1;
    return !this;
}

console.log(this);
console.log(f());