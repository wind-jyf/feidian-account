<template>
  <div>
      <div class="form">
        <el-form :model="RegisterMessage" :rules="rules" label-width="15px">
            <el-form-item  prop="email" label=" ">
                <el-input v-model="RegisterMessage.email" placeholder="邮箱" size="large"></el-input>
            </el-form-item>
            <el-form-item  prop="password" label=' '>
                <el-input v-model="RegisterMessage.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item  prop="confirmPassword" label=' '>
                <el-input v-model="RegisterMessage.confirmPassword" placeholder="确认密码"></el-input>
            </el-form-item>
            <el-form-item  prop="name" label=" ">
                <el-input v-model="RegisterMessage.name" placeholder="姓名" size="large"></el-input>
            </el-form-item>
            <el-form-item  prop="id" label=" ">
                <el-input v-model="RegisterMessage.id" placeholder="学号" size="large"></el-input>
            </el-form-item>
            <el-form-item  prop="group" label=" ">
                <el-select v-model="RegisterMessage.group" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-button type="primary" round @click="submit" @keyup.enter="submit">注册</el-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {Form,FormItem,Input,Button,Select} from 'element-ui';
Vue.use(Form).use(FormItem).use(Input).use(Button).use(Select)
export default {
  name: 'HelloWorld',
  data(){
      return{
          RegisterMessage:{
                email:'',
                password:'',
                confirmPassword:'',
                name:'',
                id:'',
                group:''
            },
          options:[
              {
                value: '大前端',
                label: '大前端'
                }, {
                value: 'Java',
                label: 'Java'
                }, {
                value: 'iOS',
                label: 'iOS'
                }, {
                value: '信息安全',
                label: '信息安全'
                }
          ],
          rules:{
              email:[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
              ],
              password:[
                  { required: true, message: '请输入密码', trigger: 'blur' }
              ],
              confirmPassword:[
                  { required: true, message: '请输入确认密码', trigger: 'blur' }
              ],
              name:[
                  { required: true, message: '请输入姓名', trigger: 'blur' }
              ],
              id:[
                  { required: true, message: '请输入学号', trigger: 'blur' }
              ],
              group:[
                  { required: true }
              ]
        }
      }
      
  },
  methods:{
      submit(){
          console.log("注册")
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
input{
    width: 130%;
    margin-right: 30%;
}
button{
    width: 40%;
}
</style>
