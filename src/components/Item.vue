<template>
  <li class="news-item">
    <span class="avatar"><img :src="item.member.avatar_normal" alt="" class=""></span>

    <span class="title">
      <template v-if="item.url">
        <router-link :to="'/t/' + item.id">{{ item.title }}</router-link>
      </template>
    </span>
    <br>
    <span class="meta">
      <span class="by">
        by <router-link :to="'/member/' + item.member.id">{{ item.member.username }}</router-link>
      </span>&nbsp;•&nbsp;
      <span class="time">
        {{ item.created | timeAgo }}前
      </span>&nbsp;•&nbsp;
      <span class="comments-link">
        <router-link :to="'/t/' + item.id + '#' + item.replies">{{ item.replies }} comments</router-link>
      </span>
    </span>
  </li>
</template>

<script>
import { timeAgo } from '../filters'
export default {
  name: 'news-item',
  props: ['item'],
  // https://github.com/vuejs/vue/blob/next/packages/vue-server-renderer/README.md#component-caching
  serverCacheKey: props => {
    return `${
      props.item.id
    }::${
      props.item.__lastUpdated
    }::${
      timeAgo(props.item.time)
    }`
  }
}
</script>

<style lang="stylus">
.news-item
  background-color #fff
  padding 20px 30px 20px 80px
  border-bottom 1px solid #eee
  position relative
  line-height 20px
  .avatar
    font-size 1.1em
    font-weight 700
    position absolute
    left 0
    width 80px
    text-align center
  .meta, .host
    font-size .85em
    color #999
    a
      color #999
      text-decoration underline
      &:hover
        color #ff6600
</style>
