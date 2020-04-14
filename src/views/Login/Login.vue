<template>
  <div class="login">
    <el-row :gutter="10">
      <el-col :xs="5" :sm="6" :md="7" :lg="8" :xl="4"><div class="grid-content bg-gray"></div></el-col>
      <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="16">
        <div class="grid-content content">
          <img src="../../assets/logo.png" alt="">
          <h1>Welcome to feidian</h1>
          <login-form></login-form>
          <span>还没有沸点账号？<router-link to="/register"><el-link type="primary">立即注册</el-link></router-link></span>
        </div>
      </el-col>
      <el-col :xs="5" :sm="6" :md="7" :lg="8" :xl="4"><div class="grid-content bg-gray"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import {Col,Row,Link} from 'element-ui'
import LoginForm from './LoginForm'

Vue.use(Col).use(Row).use(Link);
export default {
  components:{
    LoginForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  width: 100%;
  height: 100%;
}
.grid-content {
  height: 100%;
  min-height: 560px;
}
.bg-gray {
    background: #F8F8F9;
}
.content{
  font-size: 12px;
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
img{
  width: 30%;
  margin-top: 7%;
}
span{
  margin-top: 2%;
}
a{
  text-decoration: none;
}
</style>
