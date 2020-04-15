<template>
  <div class="main">
      <div class="right">
     <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="search">
     </el-input>
     <div class="divider">
         <span class="divider-span">|</span>
         <span>关键词</span>
     </div>
     <div class="tag">
         <el-button type="success" plain>大前端</el-button>
         <el-button type="success" plain>Java</el-button>
         <el-button type="success" plain>iOS</el-button>
         <el-button type="success" plain>信息安全</el-button>
     </div>
     <div class="divider">
         <span class="divider-span">|</span>
         <span>成员档案</span>
     </div>
     <div class="member" >
         <el-card  shadow="hover" v-for="(item,index) in list" :key="index" @click.native="person(index)">
             <div class="img"  >
                 <img src="">
             </div>
             <p>江羽凤</p>
             <p>2367770337@qq.com</p>
             <el-button type="text" class="red" :class="{'btn':btn}" @click="Delete">删除</el-button>
             <div :class="{'btn':btnAudit}">
                 <el-link type="success" :underline="false" @click="agree">同意</el-link>
                 <el-link type="warning" :underline="false" @click="disagree">拒绝</el-link>
             </div>
         </el-card>
     </div>
     <div class="footer">
         <span>共{{list.length}}条数据</span>
         <el-pagination
            background
            layout="prev, pager, next"
            :total="list.length*10">
         </el-pagination>
     </div>
     </div>
  </div>
</template>

<script>
import Vue from 'vue'
import {Input,Button,Card,Pagination} from 'element-ui'
Vue.use(Input).use(Button).use(Card).use(Pagination)
export default {
  name: 'Right',
  props:{
      btn:Boolean,
      btnAudit:Boolean,
      list:Array
  },
  data(){
      return{
          search:""
      }
  },
  methods:{
      person(){
          this.$router.push('/person');
      },
      Delete(){
          console.log("删除")
      },
      agree(){
          console.log("同意")
      },
      disagree(){
          console.log("拒绝")
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.right{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
}
.el-input{
    margin-top: 5%;
}
.divider{
    margin-top: 3%;
}
.divider-span{
    color: #41BAA8;
    font-weight: bold;
}
span{
    letter-spacing: 4px;
    font-weight: lighter;
    color: black;
}
.tag{
    margin-top: 2%;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.member{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between
}
.el-card{
    width: 25%;
    height: 220px;
    margin-top: 5%;
    text-align: center;
    cursor: pointer;
}
.img{
    background: red;
    width: 80%;
    height: 100px;
    margin: 0 auto;
}
.member p{
    font-size: 12px;
    color: gray;
    font-weight: lighter;
}
.red{
    color: red;
}
.btn{
    display: none;
}
.el-link{
    margin-left: 5%;
    margin-left: 5%;
}
.footer{
    margin-top: 10%;
    display: flex;
    justify-content: center;
}
.footer span{
    margin-top: 1%;
}
</style>
