// let x = 1;
//
// if (x === 1) {
//     let x = 2;
//
//     console.log(x);
//     // Expected output: 2
// }
//
// console.log(x);
// // Expected output: 1
//作用域
// function varTest() {
//     var x = 1;
//     {
//         var x = 2;
//         console.log(x);//2
//     }
// }
// function letTest() {
//     let x = 1;
//     {
//         let x = 2;
//         console.log(x) ;//2
//     }
//     console.log(x) ;//1
// }
// varTest();
// letTest();

// var x = "global";
// let y = "global";
//
// console.log(this.x);
// console.log(this.y);
// undefined
// undefined
// TDZ
// {
//     // TDZ starts at beginning of scope
//     const func = () => console.log(letVar); // OK
//
//     // Within the TDZ letVar access throws `ReferenceError`
//
//     let letVar = 3; // End of TDZ (for letVar)
//     func(); // Called outside TDZ!
// }
// ReferenceError: Cannot access 'i' before initialization
// console.log(typeof i);
// let i = 10;