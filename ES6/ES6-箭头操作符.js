/**
 * Created by Administrator on 2016-07-06.
 */
var array = [1, 2, 3];
//原始写法
console.log('原始写法')
array.forEach(function (v, i, a) {
    console.log(v);
});

//ES6
console.log('使用ES6的箭头操作符')
array.forEach(v => console.log(v));