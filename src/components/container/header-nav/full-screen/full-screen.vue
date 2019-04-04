<!-- full-screen 放大缩小 -->
<template>
  <div v-if="showFullScreenBtn">
    <Tooltip :content="isFullScreen ? '退出全屏' : '全屏'" theme="light">
      <Icon @click.native="handleChange" :type="isFullScreen ? 'md-contract' : 'md-expand'" :size="23">
    </Tooltip>
  </div>
</template>

<script>
import { Tooltip, Icon } from 'iview'
export default {
  name: 'fullScreen',

  data () {
    return {
      showFullScreenBtn: false,
      isFullScreen: false
    }
  },

  components: {
    Tooltip,
    Icon
  },

  computed: {
  },

  methods: {
    isShowBthFunc () {
      return document.exitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen
    },
    getVisualCompareFunc () {
      const clientH = document.documentElement.clientHeight
      const pageH = window.innerHeight
      return Document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || clientH === pageH
    },
    handleClick () {
      if (this.isFullScreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        let ele = document.documentElement
        if (ele.requestFullscreen) {
          ele.requestFullscreen()
        } else if (ele.mozRequestFullScreen) {
          ele.mozRequestFullScreen()
        } else if (ele.webkitRequestFullScreen) {
          ele.webkitRequestFullScreen()
        } else if (ele.msRequestFullscreen) {
          ele.msRequestFullscreen()
        }
      }
    },
    handleChange () {
      this.isFullScreen = !this.isFullScreen
    },
    handleF11 (e) {
      if (e.code === 'F11' || e.keyCode === 122) {
        this.handleChange()
      }
    }
  },
  created () {
    this.showFullScreenBtn = this.isShowBthFunc()
    this.isFullScreen = this.getVisualCompareFunc()
  },
  mounted () {
    document.addEventListener('fullscreenchange', this.handleChange)
    document.addEventListener('mozfullscreenchange', this.handleChange)
    document.addEventListener('webkitfullscreenchange', this.handleChange)
    document.addEventListener('msfullscreenchange', this.handleChange)
  },
  beforeDestroy () {
    document.removeEventListener('fullscreenchange', this.handleChange)
    document.removeEventListener('mozfullscreenchange', this.handleChange)
    document.removeEventListener('webkitfullscreenchange', this.handleChange)
    document.removeEventListener('msfullscreenchange', this.handleChange)
  }
}
</script>
<style lang="stylus" scoped>
</style>
