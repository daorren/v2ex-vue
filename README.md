# v2ex-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## 简单记录

> 主要参考。https://github.com/vuejs/vue-hackernews-2.0
          https://github.com/liuzhenangel/v2ex_frontend

从hacker-news的示范项目开始搭架子。用了 vue-router（这个还是比较简单的），但是到展示最新帖子信息这里卡住了。

因为不知道怎么处理API。示例项目中是在vuex内部，基于firebase，用的同名js库来处理请求。对于URL形式的API没看到什么最佳实践。

另外，暂时舍弃了服务端渲染SSR，先做简单的客户端渲染版本。舍弃了示例项目里面的缓存。

再加上我对js本身不熟悉，es6的新语法等等，真的让人头大。

- API的域名配置

 总看见使用者直接使用，`get('/api/topics/latest.json')` 这样忽略域名的做法。

 原来在 config/index.js 里面配置。http://vuejs-templates.github.io/webpack/proxy.html

- http请求

 原来有个http工具叫vue-resource。

- 其他

 遇到个问题。在父组件中，通过API获取数据，在子组件里面正常（如LatestView里的Item），但是在父组件自身中，二级属性报错。

 如在ItemView中，`item.member.id` 会报错，说 `Cannot read property 'id' of undefined`。

 但是这个问题只在刷新页面时出现，如果把出错的代码注释掉，完成载入之后，取消注释，热更新展示的是正常的效果。

- TODO

 常用组件里面，vuex还没用起来。看看怎么把API相关的东西在vuex里面组织起来。组件里面只要获取store的状态就好了
