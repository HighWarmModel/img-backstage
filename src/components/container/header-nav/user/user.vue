<!-- user 用户头像 -->
<template>
  <div>
    <Dropdown style="margin-left: 20px">
      <Badge :dot="count > 0">
        <Avatar :src="src"  />
      </Badge>
      <Icon type="md-arrow-dropdown"></Icon>
        <DropdownMenu slot="list">
            <DropdownItem>
              消息中心<Badge style="margin-left: 10px" :count="count" :overflow-count="overflowCount"></Badge>
            </DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem>北京烤鸭</DropdownItem>
        </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import { Avatar, Badge } from 'iview'
export default {
  name: '',
  props: {
    count: {
      type: Number,
      default: 0
    },
    src: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      overflowCount: 99
    }
  },

  components: {
    Avatar,
    Badge
  },

  computed: {},

  methods: {},

  mounted () {}
}
</script>
<style lang="stylus" scoped>
</style>
