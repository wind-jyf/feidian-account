<template>
  <div class="left">
      <p>江羽凤</p>
      <div class="line"></div>
      <p>2367770337@qq.com</p>
      <div class="line"></div>
      <el-button  type="primary" @click="change" :class="{'NotMy':NotMy}">修改资料</el-button>
      <el-button  type="success" @click="back">返回上级</el-button>
  </div>
</template>

<script>
import Vue from 'vue';
import {Button} from 'element-ui'
Vue.use(Button);
export default {
  name: 'PersonLeft',
  props: {
    NotMy:Boolean
  },
  methods:{
      change(){
          this.$router.push('/change');
      },
      back(){
          this.$router.go(-1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    padding-top: 30%;
}
p{
    height: 10px;
}
.line{
    height: 0;
    width: 60%;
    border-bottom: 1px dashed #DBDBDB;
}
.el-button{
    margin: 8% 0 0 0;
}
.NotMy{
    display: none;
}
</style>
