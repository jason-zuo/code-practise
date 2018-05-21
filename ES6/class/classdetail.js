/**
 * Created by zzh95 on 2018/4/11 .
 * params
 * return
 */


/*
ReferenceError: Foo is not defined
new Foo() ;
class Foo {

}*/

//私有方法
//实现方法：
/*
* 1、普通的将私有方法写入类中并且以 _ 区分但是不安全因为会暴露
* 2、将私有方法模块移出去，绑定this的方法
* 3、symbol的唯一性将私有方法命名为一个symbol值
*
* */

//2、私有属性
//方法实是在属性名前边加 # 来确认 
class point {
    #x ;
    constructor(x = 0) {
        #x = +x ;
    }
    get x() {
        return #x ;
    }

    set x(value){
        #x = +value
    }
    
}
