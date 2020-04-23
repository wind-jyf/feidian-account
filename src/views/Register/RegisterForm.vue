<template>
  <div>
      <div class="form">
        <el-form :model="RegisterMessage" :rules="rules" label-width="15px">
            <el-form-item  prop="email" label=" ">
                <el-input v-model="RegisterMessage.email" placeholder="邮箱" size="large"></el-input>
            </el-form-item>
            <el-form-item  prop="password" label=' '>
                <el-input v-model="RegisterMessage.password" placeholder="密码" show-password></el-input>
            </el-form-item>
            <el-form-item  prop="confirmPassword" label=' '>
                <el-input v-model="RegisterMessage.confirmPassword" placeholder="确认密码" show-password></el-input>
            </el-form-item>
            <el-form-item  prop="firstname" label=" ">
                <el-input v-model="RegisterMessage.firstname" placeholder="姓" size="large"></el-input>
            </el-form-item>
            <el-form-item  prop="lastname" label=" ">
                <el-input v-model="RegisterMessage.lastname" placeholder="名字" size="large"></el-input>
            </el-form-item>
            <el-form-item  prop="spell" label=" ">
                <el-input v-model="RegisterMessage.spell" placeholder="姓名全拼" size="large"></el-input>
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
        <el-button type="primary" round @click="submit">注册</el-button>
    </div>
  </div>
</template>

<script>
import {sendRegister} from '../../network/api'
export default {
  data(){
      return{
          RegisterMessage:{
                email:'',
                password:'',
                confirmPassword:'',
                firstname:'',
                lastname:'',
                spell:'',
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
              firstname:[
                  { required: true, message: '请输入姓', trigger: 'blur' }
              ],
              lastname:[
                  { required: true, message: '请输入名', trigger: 'blur' }
              ],
              spell:[
                  { required: true, message: '请输入全拼', trigger: 'blur' }
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
          this.$store.commit('changeisAddHeader',{
              isAddHeader:false   //设置为拦截器不需要拦截
          })
          if(this.RegisterMessage.email!=''&&this.RegisterMessage.password!=''&&this.RegisterMessage.confirmPassword!=''&&this.RegisterMessage.firstname!=''&&this.RegisterMessage.lastname!=''&&this.RegisterMessage.spell!=''&&this.RegisterMessage.id!=''&&this.RegisterMessage.group!=''&&this.RegisterMessage.password==this.RegisterMessage.confirmPassword){
              let data = this.RegisterMessage;
              console.log(data);
              sendRegister(data).then(res=>{  //想后台发送注册请求
                  console.log(res);
                  if(res.data.status == 1){
                      this.$message.success('注册成功');
                      this.$router.push('/login');
                  }
                  else{
                      this.$message.error('注册失败');
                  }
                  this.$store.commit('changeisAddHeader',{
                        isAddHeader:true
                  })
                  
              })
          }else{
              this.$message.error('有信息填写错误');
          }
      },
      keyEnter(){
      //登录添加键盘事件,注意,不能直接在焦点事件上添加回车
      let that = this;
      document.onkeydown = function () {
        let key = window.event.keyCode;
        if (key === 13){
          that.submit();//方法
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
