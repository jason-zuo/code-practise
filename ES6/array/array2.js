/**
 * Created by zzh95 on 2018/4/10 .
 * params
 * return
 */

//2、替代数组的apply方法

//ES5 写法

function a () {
    console.log(arguments)
}
var args = [1,2,3] ;
a.apply(null, args) ;

//ES6 写法

a(...args) ;

//求数组最大值的方法
//1、es5 方法

let b = Math.max.apply(null, [1, 2, 4,5,6]) ;
console.log(b) ;

//2、es6 的写法
let c = Math.max(...[1,2,3,4,4]) ;
console.log(c) ;

//栗子2 将一个数组添加到另一个数组尾部

//es5 写法
var arr1 = [0, 1, 2, 7] ;
var arr2 = [3, 4, 5] ;

//* 返回新数组长度 改变第一个数组第二个添加的数组不变
console.log(Array.prototype.push.apply(arr1 , arr2 ));
console.log(arr1);

//ES6 写法
var arr1 = [0, 1, 2] ;
var arr2 = [3, 4, 5] ;
console.log(arr1.push(...arr2)) ;
console.log(arr1) ;

/* 栗子3*/
//es5
let time = new (Date.bind.apply(Date,  [null, 2015, 10, 33])) ;
console.log(time) ;

//es6写法
let atime = new Date(...[2014,1,1]) ;
console.log(atime) ;
console.log(new Date) ;
console.dir(Date) ;

//衍生知识
/**
 * UTC 通用标准时，以z来标识
 *
 * */


