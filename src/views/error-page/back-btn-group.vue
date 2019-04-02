<template>
  <div>
    <i-button size="large" type="text" @click="backHome">返回首页</i-button>
    <i-button size="large" type="text" @click="backPrev">返回上一页({{ second }}s)</i-button>
  </div>
</template>

<script>
import './error.styl'
import { Button } from 'iview'
export default {
  name: 'backBtnGroup',
  components: {
    'i-button': Button
  },
  data () {
    return {
      second: 5,
      timer: null
    }
  },
  methods: {
    backHome () {
      this.$router.replace({
        name: this.$config.homeName
      })
    },
    backPrev () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      if (this.second === 0) this.backPrev()
      else this.second--
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>
