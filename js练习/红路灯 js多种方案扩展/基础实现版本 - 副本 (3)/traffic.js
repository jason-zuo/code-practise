// 版本一基本实现思路，缺少复用性以及js设计
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