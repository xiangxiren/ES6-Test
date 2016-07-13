/**
 * Created by Administrator on 2016-07-06.
 */
//Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s.size);
console.log(s.has("hello"));

//Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
m.set("set", s);
console.log(m.get(s) === 34);
console.log(m.get("set"));
console.log(m.size);

//WeakSets
var ws = new WeakSet();
ws.add({data: 42});//因为添加到ws的这个临时对象没有其他变量引用它，所以ws不会保存它的值，也就是说这次添加其实没有意思
console.log(ws);

//WeakMaps
var wm = new WeakMap();
wm.set(s, {extra: 42});
console.log(wm.get(s));
console.log(wm.has(s));
