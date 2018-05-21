/**
 * Created by zzh95 on 2018/4/11 .
 * params
 * return
 */

//this 的指向
// constructoe 中绑定 this预防外部调用 找不到 this
class Logger {
    constructor () {
        // this.printName = this.printName.bind(this) ;
        this.printName = (name = 'dazuo') => {
            this.print(`Hello ${name}`) ;
        }
    }

    printName (name = 'there') {
        this.print( `Hello ${name}`) ;
    }

    print(text) {
        console.log(text) ;
    }
}

const logger = new Logger() ;
const {printName} = logger ;
printName();

//还有一种方式 是 proxy
function selfish(target) {
    const cache = new WeakMap() ;
    const handler = {
        get(target, key) {
            const value = Reflect.get(target,  key) ;
            if (typeof value !== 'function') {
                return value ;
            }
            if (!cache.has(value)){
                cache.set(value,  value.bind(target)) ;
                return cache.get(value) ;
            }
        }

    }
    const proxy = new Proxy(target, handler) ;
    return proxy ;
}
// const logger = selfish(new Logger());

class point {

}
console.log(point.name);