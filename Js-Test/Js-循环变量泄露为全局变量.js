/**
 * Created by Administrator on 2016-07-07.
 */
//"use strict";
var s = 'hello';
for (var i = 0; i < s.length; i++) {
    console.log(s[i])
}

console.log(i);

function f1() {
    let n = 6;
    if (true) {
        let n = 10;
    }
    console.log(n);
}

f1();
// 情况一
if (true) {
    function f() {
    }
}

//(function () {
//    function f() {
//        console.log('I am outside!');
//    }
//
//    if (false) {
//        // 重复声明一次函数f
//        function f() {
//            console.log('I am inside!');
//        }
//    }
//
//    f(); //报错，块级作用域外不可引用
//}());
