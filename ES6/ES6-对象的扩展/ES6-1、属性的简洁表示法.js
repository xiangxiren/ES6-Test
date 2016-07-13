/**
 * Created by Administrator on 2016-07-12.
 */
//属性简写
var foo = 'bar';
var baz = {foo};//等同于var baz = {foo: foo};
console.log(baz);

function f(x, y) {
    return {x, y};//等同于 return {x: x, y: y};
}
console.log(f(1, 2));

//方法简写
var o = {
    method(){
        return "Hello!";
    }
}
//等同于
var o = {
    method: function () {
        return "Hello!";
    }
}

var birth = '2000/01/01';

var Person = {
    name: "张三",
    birth,//等同于birth: birth
    //等同于hello:function(){console.log(`我的名字是${this.name}`);}
    hello(){
        console.log(`我的名字是：${this.name}`);
    }
}

Person.hello();

//CommonJs模块输出变量
var ms = {};
function getItem(key) {
    return key in ms ? ms[key] : null;
}

function setItem(key, value) {
    ms[key] = value;
}
function clear() {
    ms = {};
}

module.exports = {getItem, setItem, clear};
//等同于
/*
 module.exports = {
 getItem: getItem,
 setItem: setItem,
 clear: clear
 }
 */

//属性的赋值器和取值器
var cart = {
    _wheels: 4,
    get wheels() {
        return this._wheels;
    },

    set wheels(value) {
        if (value < this._wheels) {
            throw new Error('数值太小了！');
        }
        this._wheels = value;
    }
}
console.log(cart);

//简洁写法的属性名总是字符串
var obj = {
    class(){
    }
};
console.log(obj);
//等同于
var obj = {
    'class': function () {
    }
};
//如果某个方法的值是一个Generator函数，前面需要加上星号
var obj = {
    *m(){
        yield 'hello world';
    }
}