/**
 * Created by Administrator on 2016-07-07.
 */
var GLOBAL_OBJ = this;
/* 'foo' 是全局对象属性 它通过变量声明被创建所以它存在DontDelete特性
 这就是它为什么不会被删除
 */

var foo = 1;
console.log(this);
console.log(GLOBAL_OBJ.foo);//1
console.log(delete foo);//false
console.log(typeof foo);//"number"

/* 'bar' 是一个全局对象的属性
 它通过函数声明被创建所以它存在DontDelete属性
 这也就是它为什么也删除不了
 */

function bar() {
}
console.log(GLOBAL_OBJ.bar);
console.log(delete bar);
console.log(typeof bar);

/* ‘baz’ 也是全局对象的属性
 它的创建是通过分配属性所以它没有DontDelete是可以删除的
 */

GLOBAL_OBJ.baz = 'blah';
console.log(delete GLOBAL_OBJ.baz);//true
console.log(typeof GLOBAL_OBJ.baz);//"undefined

(function (foo, bar) {
    /* arguments是激活对象的属性，也有DontDelete属性,是不可删除的*/
    console.log(delete arguments);
    console.log(typeof arguments)

    /* function的lenth属性具有DontDelete属性，是不可删除的 */
    function f() {
    };
    console.log(delete f);
    console.log(typeof f);

    /*函数的形参也有DontDelete属性，是不可删除的*/
    console.log(delete foo);
    console.log(foo);
    console.log(delete bar);
    console.log(bar);
})(1, 'blah');

/*
这是里简单的做一下在JavaScript中delete的操作:
    •
变量和函数声明属性要么是激活对象, 要么是全局对象

•属性里有DontDelete特性的表示不可删除属性.
•
变量和函数声明只要是在"全局代码块"/"函数级代码块"中都会有 —— DontDelete.

•Functions的参数也是属于激活对象的属性, 所以也有 —— DontDelete.
•
变量和函数声明在Eval代码块中的, 都不会创建 —— DontDelete.

•为对象加入新的属性(没有任何特性), 也是不会创建 —— DontDelete.
•
不管他们想怎样, 宿主对象对删除是会返回状态的.

*/