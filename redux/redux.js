/**
 * Created by zzh95 on 2018/4/12 .
 * params
 * return
 */

function createStore(reducer, initialState) {
    // currentState就是那个数据
    let currentState = initialState;
    let listener = () => {};

    function getState() {
        return currentState;
    }
    function dispatch(action) {
        currentState = reducer(currentState, action); // 更新数据
        listener(); // 执行订阅函数
        return action;
    }
    function subscribe(newListener) {
        listener = newListener;
        // 取消订阅函数
        return function unsubscribe() {
            listener = () => {};
        };
    }
    return {
        getState,
        dispatch,
        subscribe
    };
}

const store = createStore(reducer);
store.getState(); // 获取数据
store.dispatch({type: 'ADD_TODO'}); // 更新数据
store.subscribe(() => {/* update UI */}); // 注册订阅函数
