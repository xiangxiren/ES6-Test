/**
 * Created by Administrator on 2016-07-11.
 */
var func1 = function () {
}
console.log(func1.name === "");

function add() {
}
console.log(add.name);

const bar = function baz() {

}
console.log(bar.name);

//Function构造函数返回的函数实例，name属性的值为“anonymous”。
console.log((new Function).name);

//bind返回的函数，name属性值会加上“bound ”前缀
function foo() {
};
console.log(foo.bind({}).name);
console.log((function () {
}).bind({}).name);
