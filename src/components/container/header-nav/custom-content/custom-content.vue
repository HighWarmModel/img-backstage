<!-- custom-content 顶部导航操作 -->
<template>
  <div>
    <fullscreen
      v-model="isFullscreen"
      style="margin-right: 10px;"
    />
    <user
      :message-unread-count="unreadCount"
      :user-avator="userAvator"
    />
    <error-store
      v-if="$config.plugin['error-store'] && $config.plugin['error-store'].showInHeader"
      :has-read="hasReadErrorPage"
      :count="errorCount"
    ></error-store>
  </div>
</template>

<script>
export default {
  name: 'customContent',

  data () {
    return {
    }
  },

  components: {},

  computed: {},

  methods: {},

  mounted () {}
}
</script>
<style lang="stylus" scoped>
</style>
