// 按索引值排序的数据集合。包括数组和类数组结构，如 Array 对象和 TypedArray 对象。

// 初始化一个数组，而这个元素恰好又是数字（`Number`），
// 那么你必须使用括号语法。当单个的数字（`Number`）传递给 `Array()` 构造函数时，
// 将会被解释为 `arrayLength`，并非单个元素。

// const arr = [42];
// const arr1 = new Array(42);
// console.log(arr , arr1.length);
// // const arr2 = new Array(42.2);
// // Array.of
// const wisenArray = Array.of(9.3); // wisenArray contains only one element 9.3
// console.log(wisenArray)
//forEach
// const colors = ['red', 'green', 'blue'];
// colors.forEach((color) => console.log(color));
//red
// green
// blue
//传递给 forEach 的函数对数组中的每个元素执行一次，数组元素作为参数传递给该函数。未赋值的值不会在 forEach 循环迭代。
// const colors1 = ['red', 'green', ,'blue'];
// colors1.forEach((color) => console.log(color));
//
// console.log("---------------------")
//
// const colors2 = ['red', 'green', undefined,'blue'];
//
// colors2.forEach((color1) => console.log(color1));
//数组方法
//concat() 连接两个级以上的数组，并返回一个新的数组
// let myArr = ['1','2','3','4'];
// myArr = myArr.concat('a','b','c');
// join() 方法将数组中的所有元素连接成一个字符串。
// const myArray = ['Wind', 'Rain', 'Fire'];
// const list = myArray.join(' - '); // list is "Wind - Rain - Fire"
// push() 方法在数组末尾添加一个或多个元素，并返回数组操作后的 length。
// const myArray = ['1', '2'];
// myArray.push('3'); // myArray is now ["1", "2", "3"]

// pop() 方法从数组移出最后一个元素，并返回该元素。
// const myArray = ['1', '2', '3'];
// const last = myArray.pop();
// console.log(last);
// myArray is now ["1", "2"], last = "3"

// slice() 方法从数组提取一个片段，并作为一个新数组返回。
let myArray = ['a', 'b', 'c', 'd', 'e'];
myArray = myArray.slice(1, 4);
console.log(myArray)
// 包含索引 1，不包括索引 4
// returning [ "b", "c", "d"]
