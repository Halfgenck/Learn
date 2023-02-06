// # 数字
// 在 JavaScript 里面，数字均为双精度浮点类型，即一个介于 ±2^−1023 和 ±2^+1024 之间的数字，或约为 ±10^−308 到 ±10^+308，数字精度为 53 位。整数数值仅在 ±(2^53 - 1) 的范围内可以表示准确。
// 除了能够表示浮点数，数字类型也还能表示三种符号值：
// +Infinity（正无穷）、-Infinity（负无穷）和 NAN(not-a-number，非数字)。
// JavaScript 最近添加了BiInt的支持，能够用于表示极大的数字。使用 BigInt 的时候有一些注意事项，例如，你不能让 BigInt 和 Number直接进行运算，你也不能用Math对象去操作 BigInt 数字。
// 四种数字进制：十进制，二进制，八进制和十六进制。

// 十进制
// 1234567890
// 42
// // 以零开头的数字的注意事项：
// 0888 // 888 将被当做十进制处理
// 0777 // 在非严格格式下会被当做八进制处理 (用十进制表示就是 511)

// 二进制
// var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
// var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
// var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607

// 八进制
// var n = 0755; // 493
// var m = 0644; // 420


// 在 ECMAScript 6 中使用八进制数字是需要给一个数字添加前缀"0o"。


// var a = 0o10; // ES6 :八进制

// 十六进制
// 0xFFFFFFFFFFFFFFFFF // 295147905179352830000
// 0x123456789ABCDEF   // 81985529216486900
// 0XA                 // 10
// ## 数字对象
//
// 内置的`Number`对象有一些有关数字的常量属性，如最大值、不是一个数字和无穷大的。你不能改变这些属性，但可以按下边的方式使用它们：
// var biggestNum = Number.MAX_VALUE;
// var smallestNum = Number.MIN_VALUE;
// var infiniteNum = Number.POSITIVE_INFINITY;
// var negInfiniteNum = Number.NEGATIVE_INFINITY;
// var notANum = Number.NaN;
// console.log(biggestNum);
// console.log(smallestNum);
// console.log(infiniteNum);
// console.log(negInfiniteNum);
// console.log(notANum);
// 数学对象(Math)
//
// 对于内置的Math数学常项和函数也有一些属性和方法。比方说， `Math` 对象的 `PI` 属性会有属性值 pi (3.141...)
//
// 标准数学函数也是 Math 的方法。这些包括三角函数 ，对数，指数，和其他函数。
// 日期对象
// `Date` 对象的范围是相对距离 UTC 1970 年 1 月 1 日 的前后 100,000,000 天。
// 创建一个日期对象：
// var date = new Date();
// console.log(date)
//
// var Xmas95 = new Date("December 25, 1995");
//
// console.log(Xmas95.getMonth());
// console.log(Xmas95.getDay());
// console.log(Xmas95.toISOString());
// console.log(Xmas95.getMonth());

// 获取今年剩下的天数
// var today = new Date();
// var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // 设置日和月，注意，月份是 0-11
// endYear.setFullYear(today.getFullYear()); // 把年设置为今年
// var msPerDay = 24 * 60 * 60 * 1000; // 每天的毫秒数
// var dl = (endYear.getTime() - today.getTime()) / msPerDay;
// var daysLeft = Math.round(dl); //返回今年剩下的天数
// console.log(daysLeft)
/**
 * 首先获取当前时间today，然后设置某年年底的最后一天的时间endyear,然后通过today的getFullYear设置今年的年份，然后初始化一天的毫秒数msperday，接着用endyear-total/msperday,最后去取整返回天数
 */

//返回数字时钟的时间
function JSClock() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var temp = "" + ((hour > 12) ? hour - 12 : hour);
    if (hour == 0)
        temp = "12";
    temp += ((minute < 10) ? ":0" : ":") + minute;
    temp += ((second < 10) ? ":0" : ":") + second;
    temp += (hour >= 12) ? " P.M." : " A.M.";
    return temp;
}
console.log(JSClock());