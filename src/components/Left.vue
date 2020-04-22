<template>
  <div class="aside">
        <div class="left">
          <div class="img">
            <img :src="src">
          </div>
          <h1>Write The Code, Change The World</h1>
          <div class="slogan">
            <p>沸腾的心</p>
            <p>飞扬的梦</p>
            <p>点滴积累</p>
            <p>共码未来</p>
          </div>
          <el-button type="primary" round size="medium" @click="backup" :class="{'back':back}">返回上级</el-button>
          <el-button type="primary" round size="medium" @click="person" :class="{'center':centerbtn}">{{center}}</el-button>
          <el-button-group :class="{'btn':btn}">
            <el-button type="primary" plain round @click="audit">审核新成员</el-button>
            <el-button type="primary" plain round @click="output">输出成员Excel</el-button>
          </el-button-group>
        </div>
        </div>
</template>

<script>
import Vue from 'vue'
import {Button} from 'element-ui'
Vue.use(Button)
export default {
  name: 'Left',
  props:{
    src:String,
    center:String,
    btn:Boolean,
    back:Boolean,
    centerbtn:Boolean
  },
  methods:{
    backup(){
      this.$router.go(-1);
    },
    person(){
      this.$router.push({path:'/person',query:{email:this.$store.state.email}})
    },
    audit(){
      this.$router.push('/audit');
    },
    output(){
      console.log("输出excel")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aside{
  background:#333333;
  width: 450px;
  height: 100%;
  position: fixed;
}
.left{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.img{
  overflow: hidden;
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 7%;
}
img{
  width: 80px;
  height: 80px;
}
h1{
  margin-top: 7%;
}
.slogan{
  font-size: 25px;
  font-weight: lighter;
  letter-spacing: 20px;
}
button{
  margin-top: 5%;
}
.btn{
  display: none;
}
.center{
  display: none;
}
.back{
  display: none;
}
</style>
