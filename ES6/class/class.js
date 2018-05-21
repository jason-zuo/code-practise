/**
 * Created by zzh95 on 2018/4/11 .
 * params
 * return
 */
class point {
    constructor(x, y) {
        this.x = x ;
        this.y = y ;
    }

    toString () {
        console.log( this.x + this.y ) ;
    }
}
console.log(typeof (point))
console.log(point === point.prototype.constructor);

point.prototype = {
    constructor () {} ,
    toString () {} ,
    a () {}
}

console.log(point);

class B {

}
let b = new B()
console.log(b.constructor === B.prototype.constructor) ;

class ademo {
    constructor() {

    }
}
Object.assign(ademo.prototype,  {
    toString () {} ,
    change() {}
})
console.log(ademo) ;


//类内部定义的方法都是不可枚举的
console.log(Object.keys(point.prototype)) ;
console.log(Object.getOwnPropertyNames(point.prototype)) ;

//es5的构造函数是可枚举的
function bdemo() {

}

bdemo.prototype.getName = function () {

}
console.log(Object.keys(bdemo.prototype)) ;
console.log(Object.getOwnPropertyNames(bdemo.prototype)) ;

//类的属性名可以用函数表达式的形式表示

