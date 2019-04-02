<!-- CustomBreadCrumb -->
<template>
  <div class="custom-bread-crumb">
    <Breadcrumb>
      <BreadcrumbItem to="/">
        <a>
          <Icon type="ios-home-outline"></Icon> Home
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb">
        <a>
          <Icon type="logo-buffer"></Icon> Components
        </a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a>
          <Icon type="ios-cafe"></Icon> Breadcrumb
        </a>
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
import { Breadcrumb, BreadcrumbItem, Icon } from 'iview'
export default {
  name: 'CustomBreadCrumb',

  data () {
    return {
    }
  },

  components: {
    Breadcrumb,
    BreadcrumbItem,
    Icon
  },

  computed: {},

  methods: {},

  mounted () {}
}
</script>
<style lang="stylus" scoped>
</style>
