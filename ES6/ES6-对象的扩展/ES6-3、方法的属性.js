/**
 * Created by Administrator on 2016-07-12.
 */
//对象方法也是属性
var person = {
    sayName(){
        console.log(this.name);
    },
    get firstName() {
        return "Nicholas";
    }
};
console.log(person.sayName.name);
console.log(person.firstName.name);

console.log(new Function().name);
var doSomething = function () {

}
console.log(doSomething.bind().name);

const key1 = Symbol('description');
const key2 = Symbol();
let obj = {
    [key1](){
    },
    [key2](){
    }
};
console.log(obj[key1].name);
console.log(obj[key2].name);