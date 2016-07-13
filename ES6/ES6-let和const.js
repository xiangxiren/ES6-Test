/**
 * Created by Administrator on 2016-07-06.
 */
//"use strict";
function calc() {
    var row = 10;
    var cel = 5;
    const result = 0;

    for (let i = 0; i < row; i++) {
        let row = i;
        for (let i = 0; i < cel; i++) {
            let cel = i;
            console.log(`row = ${row}, cel = ${cel}`);
        }
    }
    //result=2; //const为定义常量，不能修改
}
calc();

if (true) {
    console.log(typeof undeclared_variable);
    // TDZ开始
    /*
     tmp = 'abc'; // ReferenceError
     console.log(tmp); // ReferenceError

     let tmp; // TDZ结束
     console.log(tmp); // undefined

     tmp = 123;
     console.log(tmp); // 123
     typeof undeclared_variable;
     */
}

const foo = {};
foo.prop = 123;

console.log(foo.prop);//123
//foo={} //报错

const a = [];
a.push('Hello'); // 可执行
console.log(a.length);    // 可执行
//a = ['Dave'];    // 报错

//冻结对象
const foo1 = Object.freeze({});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo1.prop = 123;
console.log(foo1)

//冻结对象的属性
var constantize = (obj)=> {
    Object.freeze(obj);
    Object.keys(obj).forEach((key, value)=> {
        if (typeof obj[key] === 'object') {
            constantize(obj[key]);
        }
    })
}