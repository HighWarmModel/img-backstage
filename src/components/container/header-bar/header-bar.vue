<!-- HeaderBar -->
<template>
  <div class="header-bar flex-row flex-between-center">
    <div class="flex-row flex-between-center">
      <SiderTrigger :collapsed="collapsed" icon="md-menu" @on-change="handleCollpasedChange"/>
      <CustomBreadCrumb style="color:red" />
    </div>
  </div>
</template>

<script>
import SiderTrigger from './sider-trigger'
import CustomBreadCrumb from './custom-bread-crumb'
export default {
  name: 'HeaderBar',

  data () {
    return {
    }
  },
  props: {
    collapsed: Boolean
  },
  components: {
    SiderTrigger,
    CustomBreadCrumb
  },

  computed: {},

  methods: {
    handleCollpasedChange (state) {

    }
  },

  mounted () {}
}
</script>
<style lang="stylus" scoped>
</style>
