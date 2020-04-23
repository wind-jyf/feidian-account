<template>
  <div class="right">
      <p style="font-size:30px;font-weight:lighter">大前端</p>
      <p>昵称：{{ListMessage.nickname}}</p>
      <div class="line"></div>
      <p>性别：{{ListMessage.sex}}</p>
      <div class="line"></div>
      <p>生日：{{ListMessage.birthday}}</p>
      <div class="line"></div>
      <p>年级：{{ListMessage.grade}}</p>
      <div class="line"></div>
      <p>大学：{{ListMessage.school}}</p>
      <div class="line"></div>
      <p>加入时间：{{ListMessage.inTime}}</p>
      <div class="line"></div>
      <p>QQ：{{ListMessage.qq}}</p>
      <div class="line"></div>
      <p>管理员：{{ListMessage.admin}}</p>
      <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'PersonRight',
  props: {
    ListMessage:Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 13%;
    font-size: 18px;
}
p{
    height: 10px;
}
.line{
    height: 0;
    width: 40%;
    border-bottom: 1px dashed #DBDBDB;
}
</style>
