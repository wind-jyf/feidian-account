<template>
  <div class="register">
    <el-container>
      <el-aside width="450px"><img src="../../assets/1.png" class="img1"></el-aside>
      <el-container width>
        <el-header>
          <a href="http://www.52feidian.com/"><el-link type="info" :underline="false">沸点官网</el-link></a>
          <el-link type="info"   :underline="false" @mouseover.native='enter' @mouseout.native="out">沸点交流群</el-link>
          <router-link to="/login"><el-link type="info" :underline="false">wiki账号</el-link></router-link>
          <router-link to="/login"><el-link type="info" :underline="false">登录</el-link></router-link>
        </el-header>
        <el-main>
          <img src="../../assets/feidian.png" class="img2" :class="{'unshow':unshow}">
          <p style="font-size:30px;font-weight:lighter;margin-left:7%">欢迎加入沸点</p>
          <p style="font-size:20px;font-weight:lighter;margin-left:7%">每一天都要进步</p>
          <register-form/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue'
import {container,Link} from 'element-ui'
import RegisterForm from './RegisterForm'
Vue.use(container).use(Link)
export default {
  data(){
    return{
      unshow:true
    }
  },
  components:{
    RegisterForm
  },
  methods:{
    enter(){
      console.log('移入')
      this.unshow = false
    },
    out(){
      console.log('移出')
      this.unshow = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
  width: 100%;
  margin: 0 auto;
}
.img1{
  width: 430px;
  height: 650px;
  position: fixed;
}
.el-aside {
  overflow: hidden;
    background: #F8F8F9;
    height: 600px;
}
.el-header{
  display: flex;
  justify-content:space-around;
  align-items: center;
  background: #F8F8F9;
}
a{
  text-decoration: none;
  font-size: 20px;
}
.img2{
  width: 120px;
}
.unshow{
  display: none;
}
.el-main {
    background: #F8F8F9;
}
</style>
