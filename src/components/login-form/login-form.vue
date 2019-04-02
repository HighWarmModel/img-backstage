<template>
  <i-form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <form-item prop="userName">
      <i-input v-model="form.userName" placeholder="请输入用户名">
        <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
        </span>
      </i-input>
    </form-item>
    <form-item prop="password">
      <i-input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <icon :size="14" type="md-lock"></icon>
        </span>
      </i-input>
    </form-item>
    <form-item>
      <i-button @click="handleSubmit" type="primary" long>登录</i-button>
    </form-item>
  </i-form>
</template>
<script>
import { FormItem, Input, Icon, Button, Form } from 'iview'
export default {
  name: 'LoginForm',
  components: {
    'i-form': Form,
    'form-item': FormItem,
    'i-input': Input,
    Icon,
    'i-button': Button
  },
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        userName: '',
        password: ''
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit () {
      console.log(this.$refs.loginForm)
      this.$refs.loginForm.validate((valid) => {
        console.log(valid)
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.form.userName,
            password: this.form.password
          })
        }
      })
    }
  }
}
</script>
