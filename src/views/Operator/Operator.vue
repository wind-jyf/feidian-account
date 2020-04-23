<template>
  <div class="index">
    <el-container>
      <el-aside width="450px">
        <left :src="src" center="管理员的中心"  :btn="btn" :back="!btn" :centerbtn="btn"/>
      </el-aside>
      <el-main>
        <right :btn="btn" :list="list" :btnAudit="!btn"  :updateMessage="updateMessage"/>
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
      src:require("../../assets/tianyi.jpg"),
      btn:false,
      list:[]
    }
  },
  methods:{
    updateMessage(){
      GetAll().then(res=>{ //获得所有需要审核的成员
      this.list = res.data.result;
    })
    }
  },
  created(){
    this.updateMessage();
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

