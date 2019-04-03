<!-- picture-pack 图片容器 -->
<template>
  <div class="picture-pack">
    <Spin fix>
      <Icon
        custom="yun-iconfont yun-icon-loading-picture"
        :size="size"
        class="picture-pack-spin-icon-load"
      ></Icon>
    </Spin>
    <img
      :src="path"
      alt=""
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
    }
  },
  data () {
    return {
    }
  },

  components: {
    Icon,
    Spin
  },

  computed: {},

  methods: {},

  mounted () {}
}
</script>
<style lang="stylus" scoped>
.picture-pack
  position relative
  .picture-pack-spin-icon-load
  animation ani-login-spin 1s linear infinite
@keyframes ani-picture-pack-spin
  from
    transform rotateX(0deg)
  50%
    transform rotateX(180deg)
  to
    transform rotateX(360deg)
</style>
