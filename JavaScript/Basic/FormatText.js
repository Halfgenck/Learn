// 字面量
// 'foo'
// "bar"
// 字符串

// const firstString = '2 + 2'; //创建一个字符串字面量
// const secondString = new String('2 + 2'); // 创建一个字符串对象
// x = eval(firstString); // 返回数字 4
// y = eval(secondString); // 返回包含 "2 + 2" 的字符串对象
// console.log(x,y);//4 [String: '2 + 2']
// // 不可变量
// const hello = 'Hello, World!';
// const helloLength = hello.length;
// hello[0] = 'L'; // 无效，因为字符串是不变的
// console.log(hello[0]); // 返回 "H"
// 国际化
// 日期时间格式化
// Intl 对象 ECMAScript 国际化 API 的命名空间，
const msPerDay = 24 * 60 * 60 * 1000;
// 2014-1970=44 年
const july172014 = new Date(msPerDay * (44 * 365 + 11 + 197));

const options = {
    year:"2-digit",
    month:"2-digit",
    day:"2-digit",
    hour:"2-digit",
    minute:"2-digit",
    timeZoneName:"short"
}
const AmericanDateTime = new Intl.DateTimeFormat("en-US",options).format;
console.log(AmericanDateTime(july172014));
// 07/17/14, 08:00 AM GMT+8
// 数字格式化
// NumberFormat 对象在数字的格式化方面很有用，比如货币数量值。

var gasPrice = new Intl.NumberFormat("en-US",
    { style: "currency", currency: "USD",
        minimumFractionDigits: 3 });

console.log(gasPrice.format(5.259)); // $5.259

var hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec",
    { style: "currency", currency: "CNY" });

console.log(hanDecimalRMBInChina.format(1314.25)); // ￥ 一，三一四。二五
// 定序
// Collator 对象在字符串比较和排序方面很有用。
var names = ["Hochberg", "Hönigswald", "Holzman"];

var germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");

// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", "));
// logs "Hochberg, Hönigswald, Holzman"
