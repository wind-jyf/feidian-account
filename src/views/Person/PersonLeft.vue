<template>
  <div class="left">
      <p>{{ListMessage.firstName+ListMessage.lastName}}</p>
      <div class="line"></div>
      <p>{{ListMessage.email}}</p>
      <div class="line"></div>
      <div>
      <el-button  type="primary"  @click="change" :class="{'NotMy':NotMy}">修改资料</el-button>
      </div>
      <div>
      <el-button  type="primary" plain  @click="back">返回上级</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'PersonLeft',
  props: {
    NotMy:Boolean,
    ListMessage:Object
  },
  methods:{
      change(){
          this.$router.push({path:'/change',query:{email:this.$store.state.email}});
      },
      back(){
          this.$router.go(-1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
    padding-top: 30%;
}
p{
    height: 10px;
}
.line{
    height: 0;
    width: 60%;
    border-bottom: 1px dashed #DBDBDB;
}
.el-button{
    margin: 20% 0 0 0;
}
.NotMy{
    display: none;
}
</style>
