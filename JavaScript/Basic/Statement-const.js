// // const number = 42;
// //
// // try {
// //     number = 99;
// // } catch (err) {
// //     console.log(err);
// //     // Expected output: TypeError: invalid assignment to const `number'
// //     // (Note: the exact output may be browser-dependent)
// // }
// //
// // console.log(number);
// // Expected output: 42
//
// // 定义常量 MY_FAV 并赋值 7
// const MY_FAV = 7;
//
// // 报错 - Uncaught TypeError: Assignment to constant variable.
// MY_FAV = 20;
//
// // MY_FAV is 7
// console.log('my favorite number is: ' + MY_FAV);
//
// // 尝试重新声明会报错
// // Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
// const MY_FAV = 20;
//
// // MY_FAV 保留给上面的常量，这个操作会失败
// var MY_FAV = 20;
//
// // 也会报错
// let MY_FAV = 20;
// // 块作用域
// if (MY_FAV === 7) {
//     // 没问题，并且创建了一个块作用域变量 MY_FAV
//     // (works equally well with let to declare a block scoped non const variable)
//     let MY_FAV = 20;
//
//     // MY_FAV 现在为 20
//     console.log('my favorite number is ' + MY_FAV);
//
//     // 这被提升到全局上下文并引发错误
//     var MY_FAV = 20;
// }
//
// // MY_FAV 依旧为 7
// console.log('my favorite number is ' + MY_FAV);
//更改值，而不更改其标识符
const MY_OBJECT = {"key": "value"};
MY_OBJECT.key = "otherValue";

const MY_ARRAY = ['HTML','CSS'];
MY_ARRAY.push('JAVASCRIPT');
console.log(MY_ARRAY); //logs ['HTML','CSS','JAVASCRIPT'];
