/**
 * Created by Administrator on 2016-07-06.
 */
//通过对象字面量创建对象
var human = {
    breathe(){
        console.log('breathing...');
    }
};
var worker = {
    __proto__: human, //设置此对象的原型为human，相当于继承human
    compnay: 'freeelance',
    work(){
        console.log('working...');
    }
};
human.breathe();
//调用继承来的breathe方法
worker.breathe();
worker.work();