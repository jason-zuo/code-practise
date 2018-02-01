// 版本一基本实现思路，缺少复用性以及js设计
const traffic = document.getElementById("traffic") ;

// 这时候需求有所个改变， 让三种状态的切换时间不同为   1   ， 2， 3

// 所以 由于时间的不同将 时间这一变量抽象出来

// 对于es6以前版本可以用shim  或  ployfill 

function wait(time) {
    return new Promise(resolve => setTimeout(resolve , time )) ;
}

function setState(state) {
    traffic.className  = state ;
}

function reset() {
    Promise.resolve() 
    .then(setState.bind(null , "wait"))
    .then(wait.bind(null , 1000))
    .then(setState.bind(null , "stop"))
    .then(wait.bind(null , 2000))
    .then(setState.bind(null , "pass"))
    .then(wait.bind(null , 3000))
    .then(reset)
}

reset()