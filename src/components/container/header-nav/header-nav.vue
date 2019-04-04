<!-- header-nav 顶部导航 -->
<template>
  <div class="flex-row flex-between-center">
    <div class="header-nav-logo">
      <PicturePack />
    </div>
    <div class="flex-row flex-start-center">
      <FullScreen/>
      <User :src="src" :count="count" />
    </div>
  </div>
</template>

<script>
import FullScreen from './full-screen'
import PicturePack from '@/c/picture-pack'
import { User } from './user'
export default {
  name: 'headerNav',
  data () {
    return {
      src: '',
      count: 1
    }
  },

  components: {
    FullScreen,
    PicturePack,
    User
  },

  computed: {},

  methods: {},

  mounted () {}
}
</script>
<style lang="stylus" scoped>
</style>
