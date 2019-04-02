
<template>
  <div class="login">
    <div class="login-con">
      <card
        icon="log-in"
        title="欢迎登录"
        :bordered="false"
      >
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"/>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { Card } from 'iview'
import loginForm from '@/components/login-form'
export default {
  name: 'login',
  components: {
    loginForm,
    Card
  },
  methods: {
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: this.$config.homeName
          })
        })
      })
    }
  }
}
</script>
<style lang="stylus">
@import './login.styl'
</style>
