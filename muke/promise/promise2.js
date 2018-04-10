console.log('promise start') ;
let promise = new Promise(resolve => {
    setTimeout(() => {
        console.log('the promise fullfilled') ;
        resolve('hello world')
    }, 1000);
});


/*在任何一個地方生成一個promise對列，先進先出的狀態可以追加無限多的then,*/