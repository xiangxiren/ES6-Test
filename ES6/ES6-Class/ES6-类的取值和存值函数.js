/**
 * Created by Administrator on 2016-07-11.
 */

class MyClass {
    construcotr() {

    }

    get prop() {
        return 'getter';
    }

    set prop(value) {
        console.log(`setter： ${value}`)
    }
}

let inst = new MyClass();
inst.prop = 123;
console.log(inst.prop);