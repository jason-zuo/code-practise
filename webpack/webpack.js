// 在项目构建中使用webpack-dev-server在本地搭建服务器，在和后端调试的时候就会出现跨域的问题
// webpack中配置代理解决跨域如下

proxyTable : {
    'list' : {
        target : 'http://www.baidu.com',
        changeOrigin : true ,
        pathRewrite : {
            '^/list' : '/list'
        }
    }
}
// 文章推荐 http://www.jianshu.com/p/95b2caf7e0da

// 方法二(不需要携带cookie的时候)：如果不需要携带token信息服务端将响应头设置成Access-Control-Allow-Origin : 域名 
// 并且客户端请求时候设置Access-Control-Allow-Origin : * 

// 方法三（需要携带cookie进行验证）
