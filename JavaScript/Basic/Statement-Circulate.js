// label
// var theMark = true;
// markLoop:
//     while (theMark == true) {
//         doSomething();
//     }
//
// function doSomething() {
//     console.log("hello\n");
// }

// break:
// var a = [1,2,3];
// let theValue = 2;
// for (i = 0; i < a.length; i++) {
//     if (a[i] === theValue) {
//         break;
//     }
//     console.log(a[i]);
// }
// 终止lable
// var x = 0;
// var z = 0
// labelCancelLoops:
//     while (true) {
//         console.log("外部循环：" + x);
//         x += 1;
//         z = 1;
//         while (true) {
//             console.log("内部循环：" + z);
//             z += 1;
//             if (z === 10 && x === 10) {
//                 break labelCancelLoops;
//             } else if (z === 10) {
//                 break;
//             }
//         }
//     }
// continue;
// var i = 0;
// var j = 10;
// checkiandj:
//     while (i < 4) {
//         console.log(i);
//         i += 1;
//         checkj:
//             while (j > 4) {
//                 console.log(j);
//                 j -= 1;
//                 if ((j % 2) == 0) {
//                     continue checkj;
//                 }
//                 console.log(j + ' 是奇数。');
//             }
//         console.log('i = ' + i);
//         console.log('j = ' + j);
//     }

//for in
// function dump_props(obj, obj_name) {
//     var result = "";
//     for (var i in obj) {
//         result += obj_name + "." + i + " = " + obj[i] + "<br>";
//     }
//     result += "<hr>";
//     console.log(result)
// }
//
// var carName = 'car';
// var Dcar = {make: 'Ford', model: 'Mustang'};
// dump_props(Dcar, carName);
// for of
// let arr = [3, 5, 7];
// arr.foo = "hello";
//
// for (let i in arr) {
//     console.log(i); // 输出 "0", "1", "2", "foo"
// }
//
// for (let i of arr) {
//     console.log(i); // 输出 "3", "5", "7"
// }
// for...in 循环遍历的结果是数组元素的下标，而 for...of 遍历的结果是元素的值
// 注意 for...of 的输出没有出现 "hello"
