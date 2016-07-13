/**
 * Created by Administrator on 2016-07-12.
 */
//定义属性的两种方法
//方法一
var obj = {};
obj.foo = true;

//方法二
obj['a' + 'bc'] = 123;
console.log(obj);

let proKey = 'foo';
let obj1 = {[proKey]: true, ['a' + 'bc']: 123};
console.log(obj1);

var lastWord = 'last word';
var a = {
    'first word': 'hello',
    [lastWord]: 'word'
};
console.log(a);
console.log(a['first word']);
console.log(a[lastWord]);
console.log(a['last word']);

//表达式定义方法
let obj2 = {
    ['h' + 'ello'](){
        return 'hi';
    }
};
console.log(obj2.hello());

//属性名表达式与简洁表示法，不能同时使用
var foo = 'bar';
var bar = 'abc';
//var baz = {[foo]};报错
var baz = {[foo]: 'abc'};
console.log(baz);
