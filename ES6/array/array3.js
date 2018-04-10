/**
 * Created by zzh95 on 2018/4/11 .
 * params
 * return
 */

//扩展运算符的运用

//1、合并数组  直接返回合并的数组  不改变合并之气那的数组
var more = [1,2] ;
var a = [2,3]
console.log(a.concat(more));
console.log(more) ;
console.log(a) ;
//es6
[a, ...more];
//2、与解构赋值结合 用于生成数组
//es5
var list = [1,2,3] ;
b = list[0] , reset = list.splice(1) ;
console.log(b)
console.log(reset)
console.log(list)

/*扩展知识
* splice
* arr.splice(index, howmoney,item1,...,itemx)
* index : must 整数规定添加以及删除的位置 使用负数可以从数组结尾处规定位置
* howmoney ： not must 要删除的项目如果为 0 就不会删除项目 如果不写默认删到最后
* item 像数组添加新项目
*
* */

//字符串转换 且能够正确识别 32位的unicode码
console.log(...'hello')
console.log([...'hello'])

//正确识别字符串长度的函数
function strnum(str) {
    console.log ([...str].length)
}
strnum('aa') ;


