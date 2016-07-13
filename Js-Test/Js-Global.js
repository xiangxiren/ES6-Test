/**
 * Created by Administrator on 2016-07-07.
 */
/*remember that 'this' refers to global object when in global scope*/
console.log("remember that 'this' refers to global object when in global scope");
var GLOBAL_OBJECT = this;

var foo = 1;
console.log(GLOBAL_OBJECT.foo);
console.log(foo === GLOBAL_OBJECT.foo);
console.log(delete GLOBAL_OBJECT.foo);
console.log(foo);

function bar() {
}
console.log(typeof GLOBAL_OBJECT.bar);
console.log(GLOBAL_OBJECT.bar === bar);

(function (foo) {
    var bar = 2;

    function baz() {
    }

    /*
     In abstract terms,

     Special `arguments` object becomes a property of containing function's Activation object:
     ACTIVATION_OBJECT.arguments; // Arguments object

     ...as well as argument `foo`:
     ACTIVATION_OBJECT.foo; // 1

     ...as well as variable `bar`:
     ACTIVATION_OBJECT.bar; // 2

     ...as well as function declared locally:
     typeof ACTIVATION_OBJECT.baz; // "function"
     */
})(1);

eval('var min = 2;')
console.log(delete GLOBAL_OBJECT.min);
console.log(`GLOBAL_OBJECT.min:${GLOBAL_OBJECT.min}`);

(function () {
    /* 'bar' 被创建作为变量对象调用时上下文中的属性, 在案例中是function链中的激活对象*/
    eval('var bar = 1;');
    /*
     In abstract terms,
     ACTIVATION_OBJECT.bar; // 1
     */
})();

a = 1;
console.log(delete a);
console.log(a);