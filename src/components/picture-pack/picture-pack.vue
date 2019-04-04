<!-- picture-pack 图片容器 -->
<template>
  <div
    class="picture-pack"
    @click="handleClick"
  >
    <Spin>
      <Icon
        :custom="custom"
        :size="size"
        class="picture-pack-spin-icon-load"
      ></Icon>
    </Spin>
    <img
      class="picture-pack-img"
      :src="path"
      alt=""
      :title="title"
      @error="handleError"
    >
  </div>
</template>
<script>
import { Icon, Spin } from 'iview'
export default {
  name: 'picturePack',
  props: {
    path: {
      type: String
    },
    size: {
      type: Number,
      default: 18
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      classFix: 'yun-icon-loading-picture'
    }
  },

  components: {
    Icon,
    Spin
  },

  computed: {
    custom () {
      const cls = this.classFix
      return `yun-iconfont ${cls}`
    }
  },

  methods: {
    handleClick () {
      this.$emit('on-click')
    },
    handleError (e) {
      this.classFix = 'yun-icon-error-picture'
    }
  },

  mounted () {}
}
</script>
<style lang="stylus" scoped>
.picture-pack
  position relative
  width 32px
  height 32px
  overflow hidden
  vertical-align center
  .picture-pack-spin-icon-load
    animation ani-login-spin 1s linear infinite
    .picture-pack-img
      width 100%
      height 100%
@keyframes ani-picture-pack-spin
  from
    transform rotateX(0deg)
  50%
    transform rotateX(180deg)
  to
    transform rotateX(360deg)
</style>
