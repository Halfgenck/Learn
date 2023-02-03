//主表达式
// 那些独立存在，不再包含更简单表达式的表达式：常量或字面量值、某些语言关键字和变量引用。
// 字面量是可以直接嵌入在程序中的常量值，比如：
// 1.23
// "hello"
// /pattern/
// JavaScript的一些保留字也是主表达式：
// true
// false
// null
// this
// 第三种主表达式是变量、常量或全局对象属性的引用


//数组

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let sparseArray = [1,,,,,,5];
// 通过数组访问表达式访问最后一个表达式后面的索引一定会求值为undefined。
console.log(sparseArray[3],matrix)
//undefined [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

let square = function (x) {return x * x};
console.log(square(4))
// 两种访问属性的语法
// expression.identifier
// expression[expression]
let b2 = {c : null};
console.log(b2.c );
console.log(b2["c"] );
// 条件式属性访问
// expression？.identifier
// expression？.[expression]
let b3 = {c : null};
console.log(b2.c?.d );
console.log(b2 == b3)

//in操作符期待左侧操作数是字符串、符号或可以转换为字符串
// 的值，期待右侧操作数是对象。如果左侧的值是右侧的对象的属性
// 名，则in返回true。
let point = {x:1,y:1};
console.log("x" in point)

// instanceof操作符期待左侧操作数是对象，右侧操作数是对象
// 类的标识。这个操作符在左侧对象是右侧类的实例时求值为true，
// 否则求值为false。
// let x = new Date;
// console.log(x instanceof Date);
// console.log(x instanceof Object);

// eval()
// let x2 = eval(function (x) {return x * x});
// console.log( x2(4))
// 全局eval()

let x = "global";
let y = "global";
var geval = eval;
function f() {
    let x = "local";
    eval("x += 'changed';");
    return x;
}
function g() {
    let y = "local";
    geval("y += 'changed';");
    return y;
}
console.log(f(),x);
// console.log(g(),y);

// 先定义（??）
// a ?? b == ( a!= null && a != undefined) ? a : b

let options = {timeouts : 0,title :"",verbose:false,n:null}
console.log(options.timeouts ?? 1000)
console.log(options.title ?? "undefined")
console.log(options.verbose ?? true)
console.log(options.n ?? false)
//typeof()
console.log("______________________")
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof true)
console.log(typeof NaN)
console.log(typeof 6)
console.log(typeof BigInt(123))
console.log(typeof "#$#%")
console.log(typeof function () {})
// delete操作符
let o = {x:1,y:2}
delete o.x
console.log(o)
// await操作符
// await期待一个Promise对象（表示异步计算）作为其唯一操作数，可以让代码
// 看起来像是在等待异步计算完成（但实际上它不会阻塞主线程，不
// 会妨碍其他异步操作进行）。
// void操作符
let counter = 0;
const increment = () => {
    void counter++;
}
console.log(increment());
console.log(counter);
// 语法
function ifconvert() {
    let x = 2;
    if (x === 1) {
        console.log(x);
    } else if (x === 2) {
        console.log(x);
    } else {
        console.log(x);
    }
}
function convert(x) {
    switch (typeof x) {
        case "number" :
            return x.toString(16);
        case "string":
            return '"' + x +'"';
        default:
            return String(x);
    }
}

function while_func () {
    let count = 0;
    while(count < 10) {
        console.log(count);
        count++;
    }
}

function printArray(a) {
    let len = a.length, i = 0;
    if (len === 0) {
        console.log("Empty Array");
    } else {
        do {
            console.log(a[i]);
        }while (++i < len);
    }
}

