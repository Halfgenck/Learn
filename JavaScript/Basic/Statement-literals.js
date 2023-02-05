
//array literals
var coffees = ["French Roast", "Colombian", "Kona"];

var a=[3];

console.log(a.length); // 1

console.log(a[0]); // 3
//多余的逗号 -- 数组中就会产生一个没有被指定的元素，其初始值是undefined
var fish = ["Lion", , "Angel"];
console.log(fish.length);//3
var myList = ['home', , 'school', ];
console.log(myList.length);//3
var myList2 = ['home', , 'school', ,];
console.log(myList.length);//4


// boolean literals  布尔类型有两种字面量：true和false。
// 数字字面量
// 0, 117 and -345 (十进制，基数为 10)
// 015, 0001 and -0o77 (八进制，基数为 8)
// 0x1123, 0x00111 and -0xF1A7 (十六进制，基数为 16 或"hex")
// 0b11, 0b0011 and -0b11 (二进制，基数为 2)
// 浮点字面量 语法[(+|-)][digits][.digits][(E|e)[(+|-)]digits]
// 3.14
// -.2345789 // -0.23456789
// -3.12e+12  // -3.12*10^12
// .1e-23    // 0.1*10^(-23)=10^(-24)=1e-24
// 对象字面量
var Sales = "Toyota";

function CarTypes(name) {
    return (name === "Honda") ?
        name :
        "Sorry, we don't sell " + name + "." ;
}

var car = { myCar: "Saturn", getCar: CarTypes("Honda"), special: Sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota
