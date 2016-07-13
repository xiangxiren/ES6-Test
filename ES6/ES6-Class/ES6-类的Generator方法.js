/**
 * Created by Administrator on 2016-07-11.
 */
//方法之前加上星号(*),表示此方法是一个Generator函数
class Foo {
    constructor(...args) {
        this.args = args;
    }

    *[Symbol.iterator]() {
        for (let arg of this.args)
            yield arg;
    }
}

for (let x of new Foo('hello', 'world')) {
    console.log(x);
}