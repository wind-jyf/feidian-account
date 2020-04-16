<template>
  <div class="person">
    <el-row :gutter="10">
      <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11"><div class="grid-content left">
        <person-left :NotMy="NotMy"/>
        </div></el-col>
      <el-col :xs="13" :sm="14" :md="13" :lg="13" :xl="13"><div class="grid-content right">
        <person-right/>
        </div></el-col>
    </el-row>
  </div>
</template>

<script>
import PersonLeft from './PersonLeft';
import PersonRight from './PersonRight'
export default {
  data(){
    return{
      NotMy:false
    }
  },
  components:{
    PersonLeft,
    PersonRight
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.person{
  width: 1000px;
  height: 577px;
  background: #F8F8F9;
  margin: 0 auto;
}
.grid-content {
    margin-top: 7%;
    min-height: 520px;
}
.left{
  border-right: 1px solid #aaaaaa;
}
</style>
