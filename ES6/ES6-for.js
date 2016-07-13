/**
 * Created by Administrator on 2016-07-06.
 */
var someArray = ["a", "b", "c"];
//原始写法
for (var i = 0; i < someArray.length; i++) {
    console.log(someArray[i]);
}
//ES6写法
for (let v of someArray) {
    console.log(v);
}