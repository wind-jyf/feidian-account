<template>
  <div class="index">
    <el-container>
      <el-aside width="450px">
        <left :src="src" center="个人中心" :btn="btn" :back="btn" :centerbtn="!btn"/>
      </el-aside>
      <el-main>
        <right :btn="btn" :btnAudit="btn" :list="list"/>
      </el-main>
    </el-container>
  </div>
</template>

<script>

import Left from '../../components/Left'
import Right from '../../components/Right'
import {GetAll} from '../../network/api'
export default {
  data(){
    return{
      src:require("../../assets/logo.png"),
      btn:true,
      list:[1,1,1,1,1,1,1,1]
    }
  },
  created(){
    GetAll().then(res=>{  //获得所有沸点成员
      this.list = res.data.result;
    })
  },
  components:{
    Left,
    Right
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  margin: 0 auto;
  width: 100%;
  color: white;
}
.el-aside{
  
  height: 570px;
}
.el-main{
  background:#F8F8F9;
}

</style>
