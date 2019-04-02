<!-- SiderTrigger -->
<template>
  <a
    @click="handleChange"
    :class="['sider-trigger-a', collapsed ? 'collapsed' : '']"
  >
    <Icon
      :type="icon"
      :size="size"
    /></a>
</template>
<script>
import { Icon } from 'iview'
export default {
  name: 'SiderTrigger',

  data () {
    return {
    }
  },
  props: {
    collapsed: Boolean,
    icon: {
      type: String,
      default: 'navicon-round'
    },
    size: {
      type: Number,
      default: 26
    }
  },
  components: {
    Icon
  },

  computed: {},

  methods: {
    handleChange () {
      this.$emit('on-change')
    }
  },

  mounted () {}
}
</script>
<style lang="stylus" scoped>
trans (duration = 0.2s)
  transition transform duration ease
$width = 40px
$height = 40px
.sider-trigger-a
  width $width
  height $height
  padding 6px
  display inline-block
  text-align center
  color #5c6b77
  i
    vertical-align top
    trans()
  &.collapsed i
    transform rotateZ(90deg)
</style>
