let billion = 1_000_000_000 //以下划线作为千分位分隔符
let bytes = 0x89_AB_CD_EF //字节分隔符
let bits = 0b0001_1101_0111 //半字节分隔符
let fraction = 0.123_456_789 //也可以作用于小数部分

console.log(bits.toString(), billion.toString(), bytes.toString(), fraction.toString())
//算术
/*
算术在遇到上溢出、下溢出或被零除时不会发
生错误。在数值操作的结果超过最大可表示数值时（上溢出），结
果是一个特殊的无穷值Infinity。类似地，当某个负数的绝对值超
过了最大可表示负数的绝对值时，结果是负无穷值-Infinity。
*/
Math.pow(2, 53);

Math.round(.6);


// 浮点数
let x = .3 - .2
let y = .2 - .1
console.log(x, y)
// 通过BigInt表示任意精度整数
// BigInt字面量写作一串数字后跟小写字母n
BigInt(Number.MAX_VALUE)
let string = "1" + "0".repeat(100);
BigInt(string)
// 日期和时间
let timestamp = Date.now(); //当前时间戳
let now = new Date();   //日期对象
let ms = now.getTime(); //毫秒时间戳
let iso = now.toISOString(); //标准格式的字符串
console.log(timestamp, now, ms, iso)

// 文本


let euro = "&";
let love = "❤";
console.log(euro.length, love.length);
let s = "Hello,world";
s.substring(1, 4); //第2-4个字符
s.slice(1, 4);   //同上
s.slice(-3);   //最后三个字符
s.split(","); //[ 'Hello', 'world' ]

//搜索字符串
s.indexOf("l"); //第一个l字符的位置
s.indexOf("l", 3); //位置3后面的第一个l的位置
s.indexOf("zzz"); //查找含有zz的位置，没有返回-1
s.lastIndexOf("l");//最后一个l字符的位置

//bool值搜索函数

s.startsWith("Hell");//字符串以“Hell”开头
s.endsWith("!");//字符串以!结尾
s.includes("or");//字符串是否包含“or”

//字符串修改
s.replace("llo", "ya"); //将llo改为ya
s.toUpperCase();//转化为大写
s.toLowerCase();//转换为小写
s.normalize();//归一化Es6新加
s.normalize("NFD");
//访问个别字符
s.charAt(0);//访问第0个位置的字符
s.charCodeAt(0);//指定位置的16为数值
s.codePointAt(0);//Es6,码点大于16位的情况
// 字符填充函数 es2017
"x".padStart(3);//"  x"的左边加上空格,是字符串长度变为3
"x".padEnd(3);//"x  "的右边加上空格,是字符串长度变为3
"x".padStart(3, "*");//"**x"的左边加上“*”,是字符串长度变为3
"x".padEnd(3, "*");//"x**"的右边加上“*”,是字符串长度变为3

// 删除函数
"test ".trim();//删除开头结尾的空格
"test ".trimStart();//删除左侧的空格
"test ".trimEnd();//删除右侧的空格

// 其他方法
s.concat("!");//s字符串连接上！
"<>".repeat(3);//重复三次 es6

//test
let errorMessage = '\u2718 Test failure at ${filename}:${linenumber}:' +
    '${exception.message}' +
    'Stack trace:' +
    '${exception.stack}';

console.log(errorMessage.toString())

// 模式匹配
// /^Html/ //匹配html开头的字符串
// /[1-9][0-9]*/ //匹配非0的数字，后面跟着任意数字
// /\bjavascript\b/i //匹配Javascript,不区分大小写

//bool值
let a = 5;
console.log(a === 4)
// false:null,undefined,0,-0,NaN,""
/**
 * 原始值是不可修改的，即没有办法改变原始值。对于数值和布尔值，
 * 这一点很好理解：修改一个数值的值没什么用。可是，对于字符串，
 * 这一点就不太好理解了。因为字符串类似字符数组，我们或许认为可以修
 * 改某个索引位置的字符。事实上，JavaScript不允许这么做。所有
 * 看起来返回一个修改后字符串的字符串方法，实际上返回的都是一
 * 个新字符串。
 */
//在比较两个不同的字符串时，
// 当且仅当这两个字符串长度相同并且每个索引的字符也相同时，
// JavaScript才认为它们相等。
let o = {x: 1};
o.x = 2;  //修改x属性值
o.y = 3;  //增加一个属性值
console.log(o);
let a1 = [1, 2, 3];
a1[0] = 3;
a1[3] = 4;
console.log(a1);
//对象不是按值比较的
let p = {x: 1}, o1 = {x: 1};
let a2 = [], a3 = [];
console.log(p === o1, a2 === a3);
//引用类型
let a4 = [];
let a5 = a4;
a5[0] = 1;
console.log(a4[0]);
console.log(a4 === a5);
// 如果想创建对象或数组的新副本，必须显式复制对象的属性或数组的元素。
let a6 = ['a','b','c'];
let a7 = [];
for (let i = 0 ; i < a6.length ; ++ i) {
    a7[i] = a6[i];
}
// 或者
let a8 = Array.from(a6);
console.log(a7,a8);
// 比较两个数组是否相同
function equalArray(a,b) {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

//类型转换
// 执行显示类型转换的最简单方法就是使用Boolean()、Number()和String()函数：
Number("3"); //=>3
String(false);
Boolean([]);
//Number类定义的toString()方法接收一个可选的参数，用于指定一个基数或底数。
let b = 17;
let binary = "0b" + b.toString(2);
let octal = "0o" + b.toString(8);
let hex = "0x" + b.toString(16);
// toFixed()把数值转换为字符串时可以指定小数点后面的位数。这个方法不使用指数记数法。
// toExponential()使用指数记数法将数值转换为字符串，结果是小数点前1位，小数点后为指定位数（意味着有效数字个数比你指定的值多1位）。
// toPrecision()按照指定的有效数字个数将数值转换为字符串。如果有效数字个数不足以显示数值的整数部分，它会使用指数记数法。
let n = 123456.789;
console.log(n.toFixed(0),
n.toFixed(2),
n.toFixed(5),
n.toExponential(1),
n.toExponential(3),
n.toPrecision(4),
n.toPrecision(7),
n.toPrecision(10));

