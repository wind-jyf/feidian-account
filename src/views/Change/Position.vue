<template>
  <div>
      <el-form label-position="left" :model="Position" label-width="100px">
            <el-form-item  prop="company" label="工作单位">
                <el-input v-model="Position.company"></el-input>
            </el-form-item>
            <el-form-item  prop="school" label='就读高校'>
                <el-input v-model="Position.school"></el-input>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
export default {
  name: 'Position',
  data(){
      return{
          Position:{
              company:'',
              school:''
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-form-item{
    height: 30px;
}
.el-input{
    width: 40%;
}
</style>
