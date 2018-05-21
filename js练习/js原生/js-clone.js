/*
    深克隆 ： 
    1、基本实现 : 了解js的基础类型 、 
    2、
*/

/*
    知识主体 ：
    js原始类型 ： Undefined 、 Null 、 Bollean 、 Number 、 String 、 Symbol 

    js引用类型 : Object 

    浅克隆 ： 因为对象只会克隆最外部分一层，更深层次的对象则是通过引用指向同一块堆内存 。


*/

//浅克隆函数
function shallowClone (o) {
    const obj = {} ;
    for (let i in o ) {
        obj[i] = o[i] ;
    }
    return obj
}
//被浅克隆对象
const oldObj = {
    a : 1 ,
    b : ['e', 'f', 'g'] ,
    c : { h : { i : 2 } }
}

const newObj = shallowClone(oldObj) ;
console.log(oldObj.c.h, newObj.c.h);
console.log(oldObj.c.h === newObj.c.h);

//如果对克隆的对象进行处理，原对象也会被修改如下,因为克隆后的对象也指向原对原对象的堆内存
newObj.c.h = 'change' ;
console.log(newObj.c.h, oldObj.c.h) ;
//js新的api实现浅复制 Object.assign()

/*
    2、深克隆
    最简单的深克隆 ,JSON对象的parse方法将json字符串反序列化成js对象，stringify可以将js对象序列化json字符串，两个方法结合起来就是一个深克隆
*/
const oldObj2 = {
    a : 1 ,
    b : ['e', 'f', 'g'],
    c : { h : { i : 2 } }
}

const newObj2 = JSON.parse(JSON.stringify(oldObj2))
console.log(oldObj2.c.h, newObj2.c.h) ;
console.log(oldObj2.c.h === newObj2.c.h) ;
newObj2.c.h = 'change' ;
console.log(oldObj2.c.h , newObj2.c.h) ;

/*
    该方法的缺陷 ： 
    1、无法实现对函数、以及正则等特殊对象的深克隆
    2、会抛弃对象的 constructor ，所有构造函数会指向 OBJ
    3、对象有循环引用的时候会报错
*/


//构造函数

function person (pname) {
    this.name = pname ;
}

const Messi = new person('dazuo') ;

//函数
function say () {
    console.log('hi')
}

const oldObj3  = {
    a : say ,
    b : new Array(1) ,
    c : new RegExp('abc', 'i'),
    d : Messi
}

const newObj3 = JSON.parse(JSON.stringify(oldObj3))

// 无法复制函数
// console.log(newObj3.a, oldObj3.a); // undefined [Function: say]

// 稀疏数组复制错误
// console.log(newObj3.b[0], oldObj3.b[0]); // null undefined

// 无法复制正则对象
// console.log(newObj3.c, oldObj3.c); // {} /ab+c/i

// 构造函数指向错误
// console.log(newObj3.d.constructor, oldObj3.d.constructor); // [Function: Object] [Function: person]

const oldObj4 = {};

oldObj4.a = oldObj4;

const newObj4 = JSON.parse(JSON.stringify(oldObj4));
// console.log(newObj4.a, oldObj4.a); // TypeError: Converting circular structure to JSON


//构造一个深克隆函数
function isArray (arr) {
    return Object.prototype.toString.call(arr) === '[object, Array]' ;
} 
//深克隆
function deepClone (obj){
    if (typeof obj !== "object" && typeof obj !== 'function') {
        return obj ;
    }

    var o = isArray(obj) ? [] : {} ;
    for (i in obj) {
        if (obj.hasOwnProperty(i)) {
            o[i] = typeof [i] === "object" ? deepClone(obj[i]) : obj[i] ;
        }
    }
    return o ;
}

//但是上述方法也会出现和 JSON.parse一样的问题


