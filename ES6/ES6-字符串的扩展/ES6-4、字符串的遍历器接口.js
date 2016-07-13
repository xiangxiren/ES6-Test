/**
 * Created by Administrator on 2016-07-08.
 */

for (let codePoint of 'foo') {
    console.log(codePoint);
}

//识别大于0xFFFF的码点
var text = String.fromCodePoint(0x20BB7);
for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
}

for(let i of text){
    console.log(i);
}