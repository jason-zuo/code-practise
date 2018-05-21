/**
 * this 的指向
 */

function identify () {
    console.log( this.name.toUpperCase() ) ;
}

function speak() {
    var greeting = "hello" + identify.call(this);
}

var me = {
    name : "json"
}

var you = {
    name :"alley"
}

identify.call(me);
identify.call(you);

speak.call(me)
speak.call(you)
