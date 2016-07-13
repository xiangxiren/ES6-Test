/**
 * Created by Administrator on 2016-07-11.
 */
/*
* 静态方法用static修饰，子类可以继承父类的静态方
* 静态方法也可以从super对象上调用
* */

class Foo {
    static classMethod() {
        return 'hello';
    }
}
console.log(Foo.classMethod());

var foo = new Foo();
//console.log(foo.classMethod()); 静态方法不能在实例上调用

class Bar extends Foo{}
console.log(Bar.classMethod());

class  Barex extends Foo{
    static classMethod(){
        return `${super.classMethod()}, too`;
    }
}
console.log(Barex.classMethod());