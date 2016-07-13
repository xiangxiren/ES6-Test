/**
 * Created by Administrator on 2016-07-11.
 */
const MyClass = class Me {
    getClassName() {
        return Me.name;
    }
}

const inst = new MyClass();
console.log(inst.getClassName());
//console.log(Me.name) //类名为MyClass而不是Me,Me只能在Class内部代码可用，指代当前类

//不存在变量提示，类必须先定义再使用，以下代码会报错
//new Foo();
//class Foo{}

//在类继承中，父类必须在子类之前定义
{
    let Foo = class {
    };
    class Bar extends Foo {
    }
}

//类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。只要你的代码写在类或模块之中，就只有严格模式可用