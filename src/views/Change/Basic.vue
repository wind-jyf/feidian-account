<template>
  <div class="basic">
      <el-form label-position="left" :model="Basic" :rules="rules" label-width="100px">
            <el-form-item  prop="name" label="姓名">
                <el-input v-model="Basic.name"></el-input>
            </el-form-item>
            <el-form-item  prop="password" label='密码'>
                <el-input v-model="Basic.password"></el-input>
            </el-form-item>
            <el-form-item  prop="petName" label='昵称'>
                <el-input v-model="Basic.petName"></el-input>
            </el-form-item>
            <el-form-item  prop="gender" label='性别'>
                <el-radio-group v-model="Basic.gender">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item  prop="birth" label='出生日期'>
                <el-input v-model="Basic.petName" ></el-input>
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
import Vue from 'vue';
import {Form,Input,Radio} from 'element-ui'
Vue.use(Form).use(Input).use(Radio)
export default {
  name: 'Basic',
  data(){
      return{
          Basic:{
              name:'',
              password:'',
              petName:'',
              gender:'',
              brith:'',
              id:'',
              group:''
          },
          rules:{
              name:[
                  {message: '请输入姓名', trigger: 'blur' }
              ],
              password:[
                  {message: '请输入密码', trigger: 'blur' }
              ]
        }
      }
  },
  methods:{
     
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
