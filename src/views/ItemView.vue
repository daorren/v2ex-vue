<template>
  <div class="item-view">
    <template v-if="item">
      <div class="item-view-header">
        <h1>{{ item.title }}</h1>
        <!-- 不知道为什么，item.member.xxx 和 item.node.title 这样的二级属性加载不出来。
        如果热重载时取消注释，是可以加载出来的（说明不是数据没拿到）。但是刷新页面，就是报错说item.member没有 -->
        <!-- 示例hn的做法是，item是一个计算属性，从store那里取。TODO 未来把数据统一到store里时可以参考。 -->
        <!-- 现在不想写计算属性的原因是，method里面定义的方法在computed里面不能用。必须定义在外面，那必须import Vue进来用vue resource -->

        <!-- <span class="avatar"><img :src="item.member.avatar_normal" alt="" class=""></span> -->
        <p class="meta">
          <!-- <router-link :to="'/member/' + item.member.id">{{ item.member.username }}</router-link>&nbsp;•&nbsp; -->
          {{ item.created | timeAgo }}前&nbsp;•&nbsp;
          <!-- {{ item.node.title }} -->
        </p>
        <p class="item-content" v-html="item.content_rendered"></p>
      </div>
      <div class="item-view-comments">
        <p class="item-view-comments-header">
          {{ item.replies == 0 ? '还没有评论' : item.replies + ' 评论'}}
          <spinner :show="loading"></spinner>
        </p>
        <ul v-if="!loading" class="comment-body">
          <comment v-for="comment in comments" :comment="comment"></comment>
        </ul>
      </div>
    </template>
  </div>

</template>

<script>
import Spinner from '../components/Spinner.vue'
import Comment from '../components/Comment.vue'


export default {
  name: "item-view",
  components: {
    Spinner,
    Comment
  },
  mounted () {
    this.$nextTick(function () {
      this.fetchItem()
      this.fetchComments()
      this.loading = false
    })
  },
  data () {
    return {
      loading: true,
      loadError: false,
      item: {},
      comments:[]
    }
  },
  methods: {
    fetchItem: function () {
      this.$http.get('/api/topics/show.json', {params: {id: this.$route.params.id}}).then(function (response) {
        this.item = response.body[0]
      }, function (err) {
        this.loadError = true
        console.log(err)
      })
    },
    fetchComments: function () {
      this.$http.get('/api/replies/show.json', {params: {topic_id: this.$route.params.id}}).then(function (response) {
        this.comments = response.body
      }, function (err) {
        this.loadError = true
        console.log(err)
      })
    },
  }

}
</script>

<style lang="stylus">
.avatar
  font-size 1.1em
  font-weight 700
  position absolute
  right 0
  width 80px
  text-align center

.item-view-header
  margin-top 20px
  background-color #fff
  padding 1.8em 2em 1em
  box-shadow 0 1px 2px rgba(0,0,0,.1)
  h1
    display inline
    font-size 1.5em
    margin 0
    margin-right .5em
  .meta, .meta a
    color #999
  .meta a
    text-decoration underline
  .item-content
    border-top 1px solid #eee
    pre
      font-size: 15px;
      border-radius: 3px;
      background-color: #f5f5f5;
      border: 1px solid #eee;
      padding: 8px 12px;
      code
        font-family: Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace;
        font-size: 95%;
    img
      max-width: 100% !important;

.item-view-comments
  background-color #fff
  margin-top 10px
  padding 0 2em .5em
.item-view-comments-header
  margin 0
  font-size 1.1em
  padding 1em 0
  position relative
  .spinner
    position absolute
    top 0
    right 0
    bottom auto
.comment-body
  list-style-type none
  padding 0
  margin 0
@media (max-width 600px)
  .item-view-header
    h1
      font-size 1.25em

</style>
