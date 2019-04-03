
<template>
  <div class="login">
    <div class="login-con">
      <card
        icon="log-in"
        title="欢迎登录"
        :bordered="false"
      >
        <div class="form-con">
          <Spin
            fix
            v-if="spinShow"
          >
            <Icon
              type="ios-loading"
              size=18
              class="login-spin-icon-load"
            ></Icon>
            <div>Loading</div>
          </Spin>
          <login-form @on-success-valid="handleSubmit" />
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { Card, message, Spin, Icon } from 'iview'
import loginForm from '@/components/login-form'
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      spinShow: false
    }
  },
  components: {
    loginForm,
    Card,
    Spin,
    Icon
  },
  methods: {
    ...mapActions(['USER_LOGIN_ACTION']),
    handleSubmit ({ userName, password }) {
      var $this = this
      $this.spinShow = true
      this.USER_LOGIN_ACTION({ userName, password }).then(res => {
        $this.spinShow = false
        if (res.code === 1) {
          message.success({
            content: '登录成功',
            onClose () {
              $this.$router.push('/home')
            }
          })
        } else {
          message.warning({
            content: res.message
          })
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.login
  width 100%
  height 100%
  background-image url('../../assets/images/login-bg.jpg')
  background-size cover
  background-position center
  position relative
  &-con
    position absolute
    right 160px
    top 50%
    transform translateY(-60%)
    width 300px
    &-header
      font-size 16px
      font-weight 300
      text-align center
      padding 30px 0
    .form-con
      padding 10px 0 0
    .login-tip
      font-size 10px
      text-align center
      color #c3c3c3
.login-spin-icon-load
  animation ani-login-spin 1s linear infinite
@keyframes ani-login-spin
  from
    transform rotate(0deg)
  50%
    transform rotate(180deg)
  to
    transform rotate(360deg)
</style>
