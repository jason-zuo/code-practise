// 版本一基本实现思路，缺少复用性以及js设计
const trafficEl = document.getElementById("traffic") ;

// 改方法用了面向对象  、  过程抽象  、  promise

function TrafficProtocol(el , reset){
    this.subject =   el ;
    this.autoReset = reset ;
    this.stateList = [] ;
}

TrafficProtocol.prototype.putState = function (fn) {
    this.stateList.push(fn) ;
}

TrafficProtocol.prototype.reset = function () {
    let subject = this.subject;

    this.statePromise = Promise.resolve();
    this.stateList.forEach((stateFn) => {
        this.statePromise = this.statePromise.then(() => {
            return new Promise(resolve => {
                stateFn(subject, resolve);
            });
        });
    });
    if (this.autoReset) {
        this.statePromise.then(this.reset.bind(this));
    }
}


TrafficProtocol.prototype.start = function () {
    this.reset()     
}

var traffic = new TrafficProtocol(trafficEl , true );

traffic.putState(function(subject , next){
    subject.className = "wait" ;
    setTimeout(next , 1000) ;

})


traffic.putState(function (subject, next) {
    subject.className = "stop";
    setTimeout(next, 2000);

})

traffic.putState(function (subject, next) {
    subject.className = "pass";
    setTimeout(next, 3000);

})

traffic.start()

