// 版本一基本实现思路，缺少复用性以及js设计


// 过程抽象

// 函数式编程基础


const traffic = document.getElementById("traffic") ;

// poll为抽象出来的一个高阶组合函数

// 是一种过程抽象 同时又有一种数据抽象模式 ，两中不同的抽象 模式


function poll(...fnList){
    let stateIndex = 0 ;
    return function (...args) {
        let fn = fnList[stateIndex ++ % fnList.length] ;
        return fn.apply(this.args) ;
    }
}


function setState(state){
    traffic.className = state ;
}


let  trafficStatePoll = poll(
    setState.bind(null , "wait") ,
    setState.bind(null , "stop") ,
    setState.bind(null , "pass")

)

setInterval(trafficStatePoll ,  2000 ) ;