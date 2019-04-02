<!-- 主干 -->
<template>
  <i-layout class="container">

    <i-layout>
      <i-header class="header-container">
        <HeaderBar :collapsed="collapsed" />
      </i-header>
      <i-content>
        <i-layout>
          <i-content>
            <keep-alive :include="[]" :max="10">
              <router-view/>
            </keep-alive>
          </i-content>
        </i-layout>
      </i-content>
    </i-layout>
  </i-layout>
</template>

<script>
import { Layout, Header, Content } from 'iview'
import HeaderBar from './header-bar'
export default {
  name: 'Container',

  data () {
    return {
      collapsed: false
    }
  },

  components: {
    'i-layout': Layout,
    'i-header': Header,
    'i-content': Content,
    HeaderBar
  },

  computed: {},

  methods: {},

  mounted () {}
}
</script>
<style lang="stylus" scoped>
.container
  .header-container
    background-color #ffffff
</style>
