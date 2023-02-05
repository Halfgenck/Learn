// var x = 1;
// if (x === 1) {
//     var x = 2;
//     console.log(x)
// }
// console.log(x) //2
//函数作用域
// 'use strict';
//
// function foo() {
//     var x = 1;
//     function bar() {
//         var y = 2;
//         console.log(x); //1
//         console.log(y);//2
//     }
//     bar();
//     console.log(x);//1
//     // console.log(y);//err  y在bar的函数作用域内
// }
// foo();

//变量提升
// 'use strict';
// console.log(x); //undefined
// console.log('still going');
//
// var x = 1; // x = 1;
// console.log(x);
// console.log('still going....');
//全局对象
// 'use strict';
// var x = 1;
// globalThis.hasOwnProperty('x'); // true
// delete globalThis.x; // 在严格模式下，将抛出 TypeError，否则静默失败（fail silently）。
// delete x;  // 在严格模式下，将抛出 SyntaxError，否则静默失败。
// 隐式全局变量和外部函数作用域:
var x = 0; // x 是全局变量，并且赋值为 0

console.log(typeof z); // // undefined，因为 z 还不存在

function a() {
    var y = 2; // y 被声明成函数 a 作用域的变量，并且赋值为 2

    console.log(x, y); // 0 2

    function b() {
        x = 3; // 全局变量 x 被赋值为 3
        y = 4; // 已存在的外部函数的 y 变量被赋值为 4
        z = 5; // 创建新的全局变量 z，并且赋值为 5
               // (在严格模式下抛出 ReferenceError)
    }

    b(); // 调用 b 时创建了全局变量 z
    console.log(x, y, z); // 3 4 5
}

a(); // Also calls b.
console.log(x, z);     // 3 5
console.log(typeof y); // undefined，因为 y 是 a 函数的局部变量
