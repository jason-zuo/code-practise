// 版本一基本实现思路，缺少复用性以及js设计

// 封装性差且暴露了几个全局变量

const traffic = document.getElementById("traffic") ;

var traffixstatus = ["stop" , "wait" , "pass"] ;

var currentstatus = 0 ;

setInterval(function () {
    console.log(currentstatus)
    var state = traffixstatus[currentstatus] ;

    traffic.className = state ;

    currentstatus = (currentstatus + 1) % traffixstatus.length ;
} , 2000) ;