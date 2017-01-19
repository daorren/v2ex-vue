<template>
  <div class="news-view">
    <spinner :show="loading"></spinner>
    <transition>
      <div class="news-list" >
        <transition-group tag="ul" name="item">
          <item v-for="item in displayedItems" :key="item.id" :item="item">
          </item>
        </transition-group>
      </div>
    </transition>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
import Item from '../components/Item.vue'

export default {
  name: 'latest-view',
  components: {
    Spinner,
    Item
  },
  beforeMount () {
    this.$nextTick(function () {
      this.initData()
    })
  },
  data () {
    return {
      loading: true,
      loadError: false,
      displayedItems: [],
    }
  },
  methods: {
    initData: function () {
      this.$http.get('/api/topics/latest.json').then(function (response) {
        this.displayedItems = response.body
        this.loading = false
        this.loadError = false
      }, function (err) {
        this.loading = false
        this.loadError = true
        console.log(err)
      })
    },
  }
}
</script>

<style lang="stylus">
.news-list
  position absolute
  margin 30px 0
  width 100%
  transition all .5s cubic-bezier(.55,0,.1,1)
  ul
    list-style-type none
    padding 0
    margin 0
.slide-left-enter, .slide-right-leave-active
  opacity 0
  transform translate(30px, 0)
.slide-left-leave-active, .slide-right-enter
  opacity 0
  transform translate(-30px, 0)
.item-move, .item-enter-active, .item-leave-active
  transition all .5s cubic-bezier(.55,0,.1,1)
.item-enter
  opacity 0
  transform translate(30px, 0)
.item-leave-active
  position absolute
  opacity 0
  transform translate(30px, 0)
@media (max-width 600px)
  .news-list
    margin 10px 0
</style>
