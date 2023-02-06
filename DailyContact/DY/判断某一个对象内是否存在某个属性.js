/**
 * 判断某一个对象内是否存在某个属性
 * @param obj 对象
 * @param key 属性
 */
function hasProperty(obj, key) {
    // return obj[key] != undefined;
    // ES6
    // return Object.keys(obj).includes(key);
    //  js 判断某个对象是否存在某个属性
    // return obj.hasOwnProperty(key);
    // in 关键字
    return key in obj;
}

// var obj = {a:undefined};
var obj = {a: undefined, b: "1"};
//添加一个c属性
Object.defineProperty(obj, 'c', {
    enumerable: false,
    value: 1
});
console.log(hasProperty(obj, 'a')); //false
console.log(Object.keys(obj)); //获取该对象的所有属性
console.log(obj.c);//1
console.log(hasProperty(obj, 'c')); //true
console.log(hasProperty(obj,'toString'));