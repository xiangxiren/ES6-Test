/**
 * Created by Administrator on 2016-07-11.
 */
/*
 * 子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
 * 在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错
 * */
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y); //调用父类的constructor(x,y)
        this.color = color;
    }

    toString() {
        return `${this.color} ${super.toString()}`;
    }
}

let cP = new ColorPoint(2, 3, "red");
console.log(cP.toString());

/*
 * 子类的__proto__属性，表示构造函数的继承，总是指向父类
 * 子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性
 * */
class A {
}
class B extends A {
}

console.log(B.__proto__ === A);
console.log(B.prototype.__proto__ === A.prototype);

//Object.getPrototypeOf方法可以用来从子类上获取父类
console.log(Object.getPrototypeOf(ColorPoint) === Point);

/*
 * super这个关键字，有两种用法，含义不同。
 * （1）作为函数调用时（即super(...args)），super代表父类的构造函数。
 * （2）作为对象调用时（即super.prop或super.method()），super代表父类。注意，此时super即可以引用父类实例的属性和方法，也可以引用父类的静态方法。
 * */

//子类实例的__proto__属性的__proto__属性，指向父类实例的__proto__属性。也就是说，子类的原型的原型，是父类的原型
var p1 = new Point(2, 3);
var p2 = new ColorPoint(2, 3, 'red');
console.log(p2.__proto__ === p1.__proto__);
console.log(p2.__proto__.__proto__ === p1.__proto__);
//通过子类实例的__proto__.__proto__，可以修改父类的实例的行为
p2.__proto__.__proto__.printName = function () {
    console.log('Ha');
};

p1.printName();

class MyArray extends Array {
    constructor(...args) {
        super(...args);
    }
}

var arr = new MyArray();
arr[0] = 12;
console.log(arr.length);

arr.length = 0;
console.log(arr[0]);

arr = new MyArray(1, 2, '3', {a: 4});
console.log(arr.length);
for (let v of arr) {
    console.log(v);
}

//使用extends实现带版本功能的数组
class VersionedArray extends Array {
    constructor() {
        super();
        this.history = [[]];
    }
    commit() {
        this.history.push(this.slice());
    }
    revert() {
        this.splice(0, this.length, ...this.history[this.history.length - 1]);
    }
}

var x = new VersionedArray();

x.push(1);
x.push(2);
console.log(x.slice()); // [1, 2]
console.log(x.history); // [[]]

x.commit();
console.log(x.history); // [[], [1, 2]]
x.push(3);
console.log(x.slice()); // [1, 2, 3]

x.revert();
console.log(x.slice());  // [1, 2]
