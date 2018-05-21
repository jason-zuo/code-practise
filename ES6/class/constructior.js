/**
 * Created by zzh95 on 2018/4/11 .
 * params
 * return
 */
class point {
    constructor(){
        return Object.create(null)
    }
}
console.log(new point instanceof(point))
console.log(Object.create(null)) ;

class demo {
    constructor(x, y) {
        this.x = x ;
        this.y = y
    }

    tostring () {
        return this.x + this.y
    }
}

var newdemo = new demo(1,2)
console.log(newdemo.hasOwnProperty('x'))
console.log(newdemo.hasOwnProperty('y'))
console.log(newdemo.hasOwnProperty('tostring'))
var p1 = new demo() ;
var p2 = new demo() ;
console.log(p1._proto_ === p2._proto_) ;

let person = new class {
    constructor (name) {
        this.name = name
    }

    sayName () {
        console.log(this.name)
    }
}('dazuo');

person.sayName() ;