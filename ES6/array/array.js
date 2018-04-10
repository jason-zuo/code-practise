/**
 * Created by zzh95 on 2018/4/9 .
 * params
 * return
 */

console.log(...[1,2,3]) ;

console.log(1,...[1,2,3],3) ;

//需要在 browser 环境中运行
// [...document.querySelectorAll('div')] ;

//该方法主要用于函数调用

function push (arr, ...item) {
    arr.push(...item) ;
}

function add(x, y) {
    return x + y
}

var numbers = [4, 34] ;
console.log(add(...numbers)) ;

function f (v, w, x, y, z) {
    console.log(arguments)
}
var args = [0, 1] ;
f(-1, ...args,  2, ...[1,2]) ;

//扩展运算符可以放置运算符
let x = 0 ;
const arr = [
    ...(x > 0 ? ['a'] : []) ,
    'b'
];
console.log(arr) ;

//空数组不起任何效果
