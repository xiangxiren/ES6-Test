/**
 * Created by Administrator on 2016-07-06.
 */
console.log(Number.EPSILON);
console.log(Infinity);
console.log(Number.isInteger(Infinity));
console.log(Number.isNaN("NaN"));

console.log(Math.acosh(3))//开根
console.log(Math.hypot(6,8));//勾股定理
console.log(Math.pow(2,32));//幂
console.log(Math.imul(Math.pow(2, 32) - 1, Math.pow(2, 32) - 2));

//console.log("abcd".contains("cd")); //暂不支持
console.log("abc".repeat(3)); //abcabcabc

//console.log(Array.from(document.querySelectorAll('*')))
console.log(Array.of(1,2,3))
console.log([0,0,0].fill(7,1))
console.log([1,2,3].findIndex(x=>x==2))  //查询元素在数组中的索引
console.log(["a", "b", "c"].entries());
console.log(["a", "b", "c"].keys());
//console.log(["a", "b", "c"].values()); //暂不支持

