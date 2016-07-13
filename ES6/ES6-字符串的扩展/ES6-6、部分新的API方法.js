/**
 * Created by Administrator on 2016-07-11.
 */
/*
 *includes():返回布尔值，表示是否找到了参数字符串
 * startsWith():返回布尔值，表示参数字符串是否在源字符串的头部
 * endsWith():范湖布尔值，表示参数字符串是否在源字符串的尾部
 **/

var s = 'Hello World!';

console.info(s.startsWith('Hello'));
console.log(s.endsWith('!'));
console.log(s.includes('o'));

//支持第二个参数，表示开始搜索的位置
console.log(s.startsWith('World', 6));
console.log(s.endsWith('Hello', 5));
console.log(s.includes('Hello', 6));

/*
 * repeat方法，返回一个字符串，表示将原来字符串重复n次
 * 当n为小树，则向下取整
 * 当n为负数或Infinity，报错
 * 当n<0&&n>-1,则取0
 * n为NaN取0
 * */
console.log(`重复3次：${'abc'.repeat(3)}`);
console.log(`重复2次：${'hello'.repeat(2)}`);
console.log(`重复0次：${'na'.repeat(0)}`);
console.log(`n=2.9：${'na'.repeat(2.9)}`);
console.log(`n=3.1：${'na'.repeat(3.1)}`);
//console.log('na'.repeat(Infinity));
console.log(`n=-.05：${'na'.repeat(-0.5)}`)
console.log(`n=NaN：${'na'.repeat(NaN)}`);

/*
 * 模板字符串
 * 反引号（`）,可以当做普通字符使用，也可以定义多行文本，或在字符串中嵌入变量
 * */

//普通字符串
console.log(`In Javascript '\n' is a line-feed`);

//多行字符串
console.log(`In Javascript this is
    not legal.`);

//字符串中嵌入变量
var name = "Bob", time = "today"
console.log(`Hell ${name}, how are you ${time}`);

//如果在模板字符串中需要使用反引号，则用反斜杠转义
console.log(`\`Yo\` World!`);

//使用模板字符串表示多行字符串，所有空格和锁紧都会保留在输出中
console.log(`
<ul>
    <li>first</li>
    <li>second</li>
</ul>
`);
console.log('消除换行');
//使用trim方法消除<ul>前面的换行
console.log(`
<ul>
    <li>first</li>
    <li>second</li>
</ul>
`.trim());

/*
 * 模板字符串中嵌入变量，需要将变量名卸载${}中
 * ${}中可以放任意的javascript表达式，引用对象属性，也能调用函数
 * 如果值不是字符串，将按照规则转为字符串，比如如果是对象，则调用对象的toString方法
 *
 * */

//模板字符串嵌套
const data = [{first: '<Jane>', last: 'Bond'},
    {first: 'Lars', last: '<Croft>'}];
const tmpl = addrs=>`
    <table>
    ${addrs.map(addr=>`
        <tr><td>${addr.first}</td></tr>
        <tr><td>${addr.last}</td></tr>
    `).join('')}
    </table>
`;
console.log(tmpl(data));

//引用模板字符串本身
let str = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str);
console.log(func('Jack'));
