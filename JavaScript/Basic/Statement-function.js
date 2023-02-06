// // 一个函数定义（也称为函数声明，或函数语句）由一系列的function关键字组成，依次为：
// // 函数的名称。
// // 函数参数列表，包围在括号中并由逗号分隔。
// // 定义函数的 JavaScript 语句，用大括号{}括起来。
//
// function myFunc(theObject) {
//     theObject.make = "Toyota";
// }
//
// var mycar = {make: "Honda", model: "Accord", year: 1998};
// var x,y;
// x  = mycar.make;
// myFunc(mycar)
// y = mycar.make;
// console.log(x);
// console.log(y);
// 下面的变量定义在全局作用域 (global scope) 中
var num1 = 20,
    num2 = 3,
    name = "Chamahk";

// 本函数定义在全局作用域
function multiply() {
    return num1 * num2;
}

console.log(multiply()); // 返回 60

// 嵌套函数的例子
function getScore() {
    var num1 = 2,
        num2 = 3;

    function add() {
        return name + " scored " + (num1 + num2);
    }

    return add();
}

console.log(getScore()); // 返回 "Chamahk scored 5"
