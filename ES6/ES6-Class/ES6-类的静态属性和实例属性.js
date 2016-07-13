/**
 * Created by Administrator on 2016-07-11.
 */
//Class内部只有静态方法，没有静态属性
class Foo {
    constructor() {
        this.myProp = 42
    }
}
var foo = new Foo();
Foo.prop = 1;
console.log(foo.myProp);//实例属性
console.log(Foo.prop);//静态属性