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
import Vue from 'vue'
import {container} from 'element-ui'
Vue.use(container)
import Left from '../../components/Left'
import Right from '../../components/Right'
import {SendLogin} from '../../network/api'
export default {
  data(){
    return{
      src:require("../../assets/logo.png"),
      btn:true,
      list:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    }
  },
  created(){
    SendLogin().then(res=>{
      console.log(res);
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
