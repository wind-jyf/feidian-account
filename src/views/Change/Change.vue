<template>
  <div class="change">
    <p>资料修改</p>
    <div class="line"></div>
    <el-button type="primary" @click="save">保存</el-button>
    <div class="repaire">
      <div class="left">
        <left-nav-bar :on-update="updateData"/>
      </div>
      <div class="right">
        <p>亲爱的盆友们，请认真修改你的信息！当所有的信息都修改完成后才能点击保存哦!</p>
        <div class="img-avator">
          <span style="font-size:14px">点击修改头像</span>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <transition :name="transitionName[0]">
          <basic v-show="show[0]" ref="Basic"/>
        </transition>
         <transition :name="transitionName[1]">
        <position v-show="show[1]" ref="Position"/>
         </transition>
         <transition :name="transitionName[2]">
        <contact v-show="show[2]" ref="Contact"/>
         </transition>
       
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {Button,Upload} from 'element-ui'
Vue.use(Button).use(Upload);
import LeftNavBar from './LeftNavBar'
import Basic from './Basic'
import Position from './Position'
import Contact from './Contact'
export default {
  data(){
    return{
      message:{},
      imageUrl: '',
      show:[true,false,false],
      transitionName:[]
    }
  },
  methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        if (!(file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/jpg' || file.type === 'image/jpeg')) {
        this.$message.error('请上传格式为image/png, image/gif, image/jpg, image/jpeg的图片')
      }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        let fd = new FormData();//通过form数据格式来传
        fd.append("picFile", file); //传文件
        console.log(file);
        console.log(fd);
      },
      updateData(data){
        this.show = this.show.map(()=>{return false})
        this.transitionName = this.transitionName.map(()=>'');
        this.$set(this.show,data-1,true);
        this.$set(this.transitionName,data-1,'vux-pop-in');
      },
      updateBasic(data){
        console.log(data);
      },
      save(){
        const basic = this.$refs.Basic.$data.Basic;
        const position = this.$refs.Contact.$data.Contact;
        const contact = this.$refs.Position.$data.Position;
        this.message = Object.assign(basic,position,contact);
        console.log(this.message);
      }
    },
  components:{
    LeftNavBar,
    Basic,
    Position,
    Contact
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(../../style/common.css);
.change{
  width: 900px;
  height: 700px;
  background: #F8F8F9;
  margin: 0 auto;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 2%;
}
.change p{
  color: gray;
  font-size: 24px;
  height: 15px;
}
.line{
  height: 0;
  width: 100%;
  border-bottom: 2px solid #9B9B9B;
}
.el-button{
  float: right;
  margin-right: 6%;
  margin-top: -2%;
}
.repaire{
  width: 100%;
  height: 600px;
  margin-top: 3%;
  display: flex;
  justify-content: space-between;
}
.left{
  height: 80%;
  width: 20%;
  background: #545c64;
  padding-top: 7%;
}
.right{
  padding-left: 5%;
  padding-right: 5%;
  width: 60%;
  background: white;
}
.right p{
  font-size: 16px;
  text-indent: 30px;
  margin-bottom: 10%;
}
.avatar-uploader{
  border: 1px dashed #409EFF;
  width: 100px;
  margin-left: 10%;
}
.avatar-uploader .el-upload {
    border: 1px dashed #545C64;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
  .img-avator{
    display: flex;
    justify-content: flex-start;
    margin-bottom: 5%;
  }
  .none{
    display: none;
  }
</style>
