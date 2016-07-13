/**
 * Created by Administrator on 2016-07-06.
 */
/*
 * 类的定义,constructor为构造函数,this关键字代表实例对象
 * 定义类的方法，不需要加上function关键字，方法之间不需要逗号隔开
 *
 * */
class Animal {
    //Es中新型构造器
    constructor(name) {
        this.name = name;
    }

    //实例方法
    sayName() {
        console.log('My name is ' + this.name)
    }
}

//类的继承
class Programer extends Animal {
    constructor(name) {
        //直接调用父类构造器进行初始化
        super(name);
    }

    program() {
        console.log("I'm coding...");
    }
}

//测试类
var animal = new Animal('dummy'),
    wayou = new Programer('wayou');
animal.sayName();
wayou.sayName();
wayou.program();

class Point {
    constructor() {
    }

    toString() {
    }

    toValue() {
    }
}

//类的数据类型就是函数，类本身指向构造函数
console.log(typeof Point);
console.log(Point === Point.prototype.constructor);

//类的所有方法都定义在类的prototype属性上，Point类定义等同于
//Point.prototype = {
//    toString(){
//    }, toValue(){
//    }
//};
//在类的实例上调用方法，其实就是调用原型上的方法
class B {
}
let b = new B();

console.log(b.constructor === B.prototype.constructor);
//prototype对象的constructor属性，直接指向“类”的本身
console.log(B.prototype.constructor === B);

//类的背部所有定义的方法，都是不可枚举的
console.log(Object.keys(Point.prototype));
console.log(Object.getOwnPropertyNames(Point.prototype));

//类的属性名，可以采用表达式
let methodName = "getArea";
class Square{
    constructor(length){

    }
    [methodName](){

    }
}
console.log(Object.getOwnPropertyNames(Square.prototype));

//构造方法constructor可以返回另一个对象
class Foo{
    constructor(){
        return Object.create(null);
    }
}

console.log(new Foo() instanceof Foo);