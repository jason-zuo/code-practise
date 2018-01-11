// mvx  1 模式
// 1.1 首先是MVC模式 ： MVC包括 Model(模型) 、Controller(控制器) 、 View(视图) 

// 主要基于分层的目的 让彼此的职责分开

// View 一般通过Controller来和Mode进行联系 ， Controller是Mode和View的协调者  ，View和Model不直接联系，基本联系是单向的。


// MVC模式的通信流程 ： user通过Controller来操作Model 以达到View的变化

// 1.2 MVP模式

// 该模式将presenter完全从  view 和 model中分离了出来

// 该模式的流程大致是  view 和 Model与presenter的双向箭头

// 1.3 MVVM模式

// 代表框架有 知名度较低的knockout.js 早期的 ember.js  以及Angular.js  和 vue

// vue的特性 ： 1、清亮 ， 2 、 数据绑定  3、 指令   4、插件化

// 框架对比 ： 2.1、与Angular对比

// 相同点 ： 指令 、 都支持过滤器 、 都支持双向数据绑定 、 都不支持低端浏览器 

// 不同点 ： Angular 增加了dependency injection的特性但是vue本身api比较简单

// 且在性能上angular对数据进行脏检查 ， 所以Watcher越多越慢 ， vue基于依赖追踪的观察并使用异步队列更新，所有数据都独立触发 

// 框架对比 ： 2.2、与react的对比

// 不同点 ： react依赖virtual Dom而vue使用的是Dom模板， react使用的是virtual dom对渲染出来的结果进行脏检查

// 



