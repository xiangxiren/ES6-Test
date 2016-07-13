/**
 * Created by Administrator on 2016-07-07.
 */
//变量提升，函数f内的temp变量覆盖了外层的temp变量

var temp = new Date();

function f() {
    console.log(temp);
    if (false) {
        var temp = "hello world";
    }
}
f();

//使用let改造
var temp1 = new Date();

function f1() {
    console.log(temp1);
    if (true) {
        let temp1 = "hello world";
        console.log(temp1);
    }
}
f1();