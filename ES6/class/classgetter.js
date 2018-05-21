/**
 * Created by zzh95 on 2018/4/11 .
 * params
 * return
 */
class myclass {
    constructor() {

    }

    get prop () {
        return 'getter' ;
    }

    set prop(value) {
        console.log('setter' + value) ;
    }
}

let inst = new myclass();
// console.log(inst.props = 123 );
console.log(inst.props);

class CustomHTMLElement {
    constructor(element){
        this.element = element ;
    }
    get html () {
        return this.element.innerHTML ;
    }

    set html (val) {
        this.element.innerHTML = val ;
    }
}

var des = Object.getOwnPropertyDescriptor(
    CustomHTMLElement.prototype, 'html'
);

console.log('get' in des );
console.log('set' in des );