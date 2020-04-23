<template>
  <div>
      <div class="form">
        <el-form :model="LoginMessage" :rules="rules" label-width="15px">
            <el-form-item  prop="email" label=" ">
                <el-input v-model="LoginMessage.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item  prop="password" label=' '>
                <el-input v-model="LoginMessage.password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-checkbox label="记住密码" name="type"></el-checkbox>
        </el-form>
    </div>
    <div class="submit">
        <el-button type="primary" round  @click="Submit">登录</el-button>
    </div>
  </div>
</template>

<script>
import {SendLogin} from '../../network/api'
export default {
  name: 'LoginForm',
  data(){
      return{
          LoginMessage:{
            email:'',
            password:''
          },
          rules:{
              email:[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
              ],
              password:[
                  { required: true, message: '请输入密码', trigger: 'blur' }
              ]
        }
    }
  },
  methods:{
      Submit(){
          this.$store.commit('changeisAddHeader',{
              isAddHeader:false    //此时拦截器不需要拦截
          })
          if(this.LoginMessage.email!=''&&this.LoginMessage.password!=''){
              let data = {
                  email:this.LoginMessage.email,
                  password:this.LoginMessage.password
              }
              console.log(data);
              SendLogin(data).then(res=>{
                  console.log(res);
                 if(res.data.status === 1){//说明登录成功
                     console.log(res.headers.authorization);//拿到token
                     this.$store.commit('changeLogin',{    //将token存到vuex中
                          Authorization:res.headers.authorization
                      })
                      this.$store.commit('changeEmail',{
                          email:this.LoginMessage.email  //存储用户邮箱
                      })
                      this.$store.commit('changeisAddHeader',{
                            isAddHeader:true //重新将拦截器设置为需要拦截
                        })
                        this.$router.push('/operator');
                        /*
                        if(res.data.result == "is admin"){
                            this.$router.push('/operator');
                        }else{
                            this.$router.push('/index');
                        }
                        */
                 }else{
                     this.$message.error("账号或密码错误")
                 }
              })
          }else{
              this.$message.error("邮箱或密码不能为空")
          }
      },
      keyEnter(){
      //登录添加键盘事件,注意,不能直接在焦点事件上添加回车
      let that = this;
      document.onkeydown = function () {
        let key = window.event.keyCode;
        if (key === 13){
          that.Submit();//方法
        }
      }
  }
  },
  created(){
      this.keyEnter();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

label{
    display: inline;
}
.form{
    margin-top: 5%;
}
.submit{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
}
button{
    width: 100%;
}
</style>
