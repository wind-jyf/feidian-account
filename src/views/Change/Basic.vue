<template>
  <div class="basic">
      <el-form label-position="left" :model="Basic" label-width="100px">
            <el-form-item  prop="firstname" label="姓">
                <el-input v-model="Basic.firstName"></el-input>
            </el-form-item>
            <el-form-item  prop="lastname" label="名">
                <el-input v-model="Basic.lastName"></el-input>
            </el-form-item>
            <el-form-item  prop="password" label='密码'>
                <el-input v-model="Basic.password"></el-input>
            </el-form-item>
            <el-form-item  prop="nickname" label='昵称'>
                <el-input v-model="Basic.nickname"></el-input>
            </el-form-item>
            <el-form-item  prop="sex" label='性别'>
                <el-radio-group v-model="Basic.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item  prop="birthday" label='出生日期'>
                <el-input v-model="Basic.birthday" ></el-input>
            </el-form-item>
            <el-form-item  prop="id" label='学号' >
                <el-input v-model="Basic.id" disabled></el-input>
            </el-form-item>
            <el-form-item  prop="group" label='组别'>
                <el-input v-model="Basic.group" disabled></el-input>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
export default {
  name: 'Basic',
  data(){
      return{
          Basic:{
              firstName:'',
              lastName:'',
              password:'',
              nickname:'',
              sex:'',
              birthday:'',
              id:'',
              group:''
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
