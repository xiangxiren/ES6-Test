/**
 * Created by Administrator on 2016-07-08.
 */

console.log(`a's Unicode is: ${"\u0061"}`);
//此表示法仅限于\u0000-\uFFFF，超出此范围的字符，必须使用两个双字节的形式表示

console.log(`告's Unicode is: ${"\uD842\uDFB7"}`);

console.log(`7's Unicode isL ${"\u20BB7"}`);

//ES6对此做了改进，将码点放入大括号

console.log("\u{20BB7}")
console.log("\u{41}\u{42}\u{43}")

let hello = 123;
//console.log(hell\u{6F}); 可以正确输出

console.log('\u{1F680}')
console.log('\uD83D\uDE80')
console.log('\u{1F680}' === '\uD83D\uDE80')

console.log('\z' === 'z');
//console.log('\172' === 'z');
console.log('\x7A' === 'z');
console.log('\u007A' === 'z');
console.log('\u{7A}' === 'z');