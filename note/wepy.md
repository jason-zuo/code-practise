#### wepy学习记录


## 一、代码规范

1、 事件绑定的区别

原 ```bindtap="click"``` 替换为 ```@tap="click"```，原```catchtap="click"```替换为```@tap.stop="click"```。


原 ```capture-bind:tap="click"``` 替换为 ```@tap.capture="click"```，原```capture-catch:tap="click"```替换为```@tap.capture.stop="click"```。


2、事件传参使用优化后的语法代替原 ```bindtap="click" data-index={{index}}``` 现在替换为 ```@tap="click({{index}})"```

## 二、page和component


1、注意：

当页面需要引入组件或组件需要引入子组件时，必须在.wpy文件的```<script>```脚本部分先import组件文件，然后在components对象中给组件声明唯一的组件ID，接着在<template>模板部分中添加以components对象中所声明的组件ID进行命名的自定义标签以插入组件。

2、 
需要注意的是，WePY中的组件都是静态组件，是以组件ID作为唯一标识的，每一个ID都对应一个组件实例，当页面引入两个相同ID的组件时，这两个组件共用同一个实例与数据，当其中一个组件数据变化时，另外一个也会一起变化。

如果需要避免这个问题，则需要分配多个组件ID和实例。

# 三、mixin

兼容式混合


> 对于组件methods响应事件，以及小程序页面事件将采用兼容式混合，即先响应组件本身响应事件，然后再响应混合对象中响应事件。注意，这里事件的执行顺序跟Vue中相反，Vue中是先执行mixin中的函数， 再执行组件本身的函数。

# 四、 wepy 的 interceptor 拦截器

