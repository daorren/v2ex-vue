<template>
  <li v-if="comment" class="comment">
    <div class="by">
      <router-link :to="'/member/' + comment.member.id">{{ comment.member.username }}</router-link>
      {{ comment.created | timeAgo }}前
    </div>
    <div class="text" v-html="comment.content_rendered"></div>
  </li>
</template>

<script>
export default {
  name: 'comment',
  props: ['comment']

}
</script>

<style lang="stylus">
.comment
  border-top 1px solid #eee
  position relative
  .by, .text
    font-size .9em
    margin 1em 0
  .by
    color #999
    a
      color #999
      text-decoration underline
  .text
    overflow-wrap break-word
    a:hover
      color #ff6600
    pre
      white-space pre-wrap
</style>
