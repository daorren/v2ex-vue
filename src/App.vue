<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->

    <div class="header">
      <div class="inner">
        <!-- <router-link to="/" exact>
          V2EX
        </router-link>
        <router-link to="/job">Jobs</router-link> -->
        <a href="/">
          <img src="//cdn.v2ex.co/site/logo@2x.png?m=1346064962" border="0" align="default" alt="V2EX" width="94" height="30">
        </a>
        <a href="/">首页</a>
        <a href="#">注册</a>
        <a href="#">登录</a>
        <a class="github" href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank">
          Built with Vue.js
        </a>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>


<style lang="stylus">
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color lighten(#eceef1, 30%)
  margin 0
  padding-top 55px
  color #34495e
  overflow-y scroll
a
  color #34495e
  text-decoration none
.header
  background-color #fff
  position fixed
  z-index 999
  height 55px
  top 0
  left 0
  right 0
  .inner
    max-width 800px
    box-sizing border-box
    margin 0px auto
    padding 13px 5px
  a
    color #556
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    margin-right 1.8em
    &:hover
      color #99a
    &.router-link-active
      color #fff
      font-weight 400
    &:nth-child(6)
      margin-right 0
  .github
    color #8391a5
    font-size .9em
    margin 0
    float right
.logo
  width 24px
  margin-right 10px
  display inline-block
  vertical-align middle
.view
  max-width 800px
  margin 0 auto
  position relative
.fade-enter-active, .fade-leave-active
  transition all .2s ease
.fade-enter, .fade-leave-active
  opacity 0
@media (max-width 860px)
  .header .inner
    padding 15px 30px
@media (max-width 600px)
  body
    font-size 14px
  .header
    .inner
      padding 15px
    a
      margin-right 1em
    .github
      display none
</style>
