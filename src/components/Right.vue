<template>
  <div class="main">
      <div class="right">
     <el-input
        placeholder="请输入内容"
        v-model="search"
        @keyup.enter.native="Search">
        <i slot="prefix" class="el-input__icon el-icon-search" @click.stop="Search"></i>
     </el-input>
     <div class="divider">
         <span class="divider-span">|</span>
         <span>关键词</span>
     </div>
     <div class="tag">
         <el-button type="primary" plain @click="group('大前端')">大前端</el-button>
         <el-button type="primary" plain @click="group('Java')">Java</el-button>
         <el-button type="primary" plain @click="group('iOS')">iOS</el-button>
         <el-button type="primary" plain @click="group('信息安全')">信息安全</el-button>
     </div>
     <div class="divider">
         <span class="divider-span">|</span>
         <span>成员档案</span>
     </div>
     <div class="member" >
         <el-card  shadow="hover" v-for="(item,index) in Currentlist" :key="index" @click.native="person(item.email)">
             <div class="img">
                <el-avatar shape="square" :size="90" :src="squareUrl"></el-avatar>
             </div>
             <p>{{item.firstName+item.lastName}}</p>
             <p>{{item.email}}</p>
             <el-button type="text" class="red" :class="{'btn':btn}" @click.stop="Delete">删除</el-button>
             <div :class="{'btn':btnAudit}">
                 <el-link type="success" :underline="false" @click.stop="agree(item.email)">同意</el-link>
                 <el-link type="warning" :underline="false" @click.stop="disagree(item.email)">拒绝</el-link>
             </div>
         </el-card>
     </div>
     <div class="footer">
         <span>共{{list.length}}条数据</span>
         <el-pagination
            background
            layout="prev, pager, next"
            :total="Math.ceil(list.length/9)*10"
            @current-change='change'
            @pre-click='change'
            @next0click='change'
            >
         </el-pagination>
     </div>
     </div>
  </div>
</template>

<script>
import {Sendagree,Senddisagree,SearchPerson,byGroup,deleteMessage} from '../network/api'
export default {
  name: 'Right',
  props:{
      btn:Boolean,
      btnAudit:Boolean,
      list:Array
  },
  data(){
      return{
          search:"",
          Currentlist:[],
          squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
      }
  },
  methods:{
      person(email){
          this.$router.push({path:'/person',query:{email:email}});
      },
      Delete(){
          let data = {
              email:'666@qq.com'
          }
          deleteMessage(data).then(res=>{
              if(res.data.code == 1){
                  this.$emit('updateMessage');
                  this.$message.success('删除成功');
              }else{
                  this.$message.error('删除失败');
              }
          })
      },
      agree(email){
          let data = {
              email:email
          }
          Sendagree(data).then(res=>{
              console.log(res);
              if(res.data.status == 1){
                  this.$emit('updateAudit');
                  this.$message.success("处理成功");
              }else{
                  this.$message.error("处理失败");
              }
          })
      },
      disagree(email){
          let data = {
              email:email
          }
          Senddisagree(data).then(res=>{
              console.log(res);
              if(res.data.status == 1){
                  this.$emit('updateAudit');
                  this.$message.success("处理成功")
              }else{
                  this.$message.error('处理失败')
              }
          })
      },
      change(num){
          this.Currentlist = this.list.slice((num-1)*9,num*9);//当切换到其他页时
      },
      Search(){
          let data = {
              str:this.search
          }
          SearchPerson(data).then(res=>{
              this.Currentlist = res.data.result;
          })
      },
      group(name){
          let data = {
              group:name
          }
          byGroup(data).then(res=>{
              this.Currentlist = res.data.result;
          })
      }
  },
  created(){
      console.log(this.list);
      //console.log(this.$parent.list);
      this.Currentlist = this.list.slice(0,9);//进行分页
      console.log(this.Currentlist);
  },
  watch:{
      list:{  //因为list是作为props传递的，当子组件拿到父组件传递来的list时，还为空，然后才执行的create，拿到的数据，所以需要添加watch
          handler(newValue){
              this.Currentlist = newValue;
          },
          deep:true,
          immediate:true
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
i{
    cursor: pointer;
}
i:hover{
    color: coral;
}
.divider{
    margin-top: 3%;
}
.divider-span{
    color: #409EFF;
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
    justify-content:flex-start
}
.el-card{
    margin-right: 8%;
    width: 25%;
    height: 210px;
    margin-top: 5%;
    text-align: center;
    cursor: pointer;
}
.img{
    width: 80%;
    height: 90px;
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
