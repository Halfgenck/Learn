// Map映射进行的一些基本操作
// var say = new Map();
//
// say.set('dog','woof');
// say.set('cat','meow');
// say.set('elephant','toot');
// console.log(say.size);//3
// say.get('fox');// undefined
// say.has('bird');//false
// say.delete('dog');
// say.has('dog');
//
// for (var [key,value] of say) {
//     console.log(key + " goes " + value);
// }
// // cat goes meow
// // elephant goes toot
// say.clear();
// console.log(say.size); //0

// Object和Map的比较
// 一般地，objects会被用于将字符串类型映射到数值。
// Object允许设置键值对、根据键获取值、删除键、检测某个键是否存在。
// 而Map具有更多的优势。
// Object 的键均为 String 类型，在 Map 里键可以是任意类型。
// 必须手动计算Object的尺寸，但是可以很容易地获取使用Map的尺寸。
// Map的遍历遵循元素的插入顺序。
// Object有原型，所以映射中有一些缺省的键。（可以用 map = Object.create(null) 回避）。
// WeakMap 它的键必须是对象类型，值可以是任意类型。它的键被弱保持，也就是说，当其键所指对象没有其他地方引用的时候，它会被 GC 回收掉。
// Set集合
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
