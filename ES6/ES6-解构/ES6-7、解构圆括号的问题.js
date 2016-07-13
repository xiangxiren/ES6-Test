/**
 * Created by Administrator on 2016-07-08.
 */

//只要有可能，不要在模式中放置圆括号

//1、变量声明语句中，不能带有圆括号,以下代码全部报错
/*
 var [(a)]=[1];
 var {x: (c)} ={};
 var ({x:c}) = {};
 var {(x:c)} = {};
 var {(x):c}={};
 */

//2、函数蚕食中，模式不能带有圆括号，函数参数也属于变量声明

// function f([(z)]) { return z; }  //报错

//3、赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号中
//报错[({p: a}), { x:c }] = [{}, {}];

//只有赋值语句的非模式部分，才可以使用圆括号
[(b)] = [3];
console.log(`b is: ${b}`);
//({ p: (d) } = {}); 正确
//console.log(`d is: ${d}`);
[(parseInt.prop)] = [3];
console.log(`parseInt.prop is: ${parseInt.prop}`);