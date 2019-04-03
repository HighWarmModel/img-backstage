<!-- 主干 -->
<template>
  <i-layout class="container">
      <i-header class="header-container">
        <HeaderBar :collapsed="collapsed" />
      </i-header>
    <i-slider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">
      <side-menu accordion ref="sideMenu" :active-name="$route.name" :collapsed="collapsed" @on-select="turnToPage" :menu-list="menuList">
        <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
        <div class="logo-con">
          <img v-show="!collapsed" :src="maxLogo" key="max-logo" />
          <img v-show="collapsed" :src="minLogo" key="min-logo" />
        </div>
      </side-menu>
    </i-slider>
    <i-layout>
      <!-- <i-header class="header-container">
        <HeaderBar :collapsed="collapsed" />
      </i-header> -->
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
import { Layout, Header, Content, Slider } from 'iview'
import HeaderBar from './header-bar'
import SideMenu from './side-menu'
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
    'i-slider': Slider,
    HeaderBar,
    SideMenu
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
