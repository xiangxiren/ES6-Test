/**
 * Created by Administrator on 2016-07-11.
 */
//实例的属性除非显示定义在其本身，否则都是定义在原型上（即定义在class上）
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
var point = new Point(2, 3);
console.log(point.toString());
console.log(point.hasOwnProperty('x'));
console.log(point.hasOwnProperty('y'));
//toString是原型对象的属性
console.log(point.hasOwnProperty('toString'));
console.log(point.__proto__.hasOwnProperty('toString'));

//类的所有实例共享一个原型对象
var p1 = new Point(2, 3);
var p2 = new Point(3, 2);
console.log(p1.__proto__ === p2.__proto__);

//可以通过实例的__proto__属性为class添加方法
//不推荐使用实例的__proto__属性改写原型
p1.__proto__.printName = function () {
    return 'Oops';
}

console.log(p1.printName());
console.log(p2.printName());
var p3 = new Point(4, 2);
console.log(p3.printName());

//name属性
console.log(Point.name);