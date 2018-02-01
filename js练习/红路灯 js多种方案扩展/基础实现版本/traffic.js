// 版本一基本实现思路，缺少复用性以及js设计
// 过程耦合
// 陷入了callback hell
// 抽象程度低， 没有任何抽像 API 

// 扩展性不好，因为异步问题没有处理

const traffic = document.getElementById("traffic") ;

(function reset() {
    traffic.className = "wait" ;

    setTimeout(() => {
        console.log(1)
        traffic.className = "stop" ;

        setTimeout(() => {
            traffic.className = "pass" ;
            setTimeout(reset , 2000 ) ;
        }, 2000);   

    }, 2000);

})();