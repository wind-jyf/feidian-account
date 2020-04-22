<template>
  <div>
      <el-form label-position="left" :model="Contact"  label-width="100px">
            <el-form-item  prop="qq" label="QQ">
                <el-input v-model="Contact.qq"></el-input>
            </el-form-item>
            <el-form-item  prop="email" label='邮箱'>
                <el-input v-model="Contact.email" disabled></el-input>
            </el-form-item>
        </el-form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data(){
      return{
          Contact:{
              qq:'',
              email:''
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
