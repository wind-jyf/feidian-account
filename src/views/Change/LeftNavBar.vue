<template>
  <div>
      <el-menu
      @select="Select"
      :default-active="activeIndex"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF">
      <el-menu-item index="1">
        <span slot="title">基本信息</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span slot="title">就业信息</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <span slot="title">联系方式</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Vue from 'vue'
import {Menu} from 'element-ui'
Vue.use(Menu);
export default {
  name: 'LeftNavBar',
  props: {
    onUpdate: Function
  },
  data(){
    return{
      activeIndex:'1'
    }
  },
  methods:{

    Select(key){
      this.activeIndex = key;
      this.onUpdate(this.activeIndex);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-item{
    text-align: center;
    font-size: 16px;
}
</style>
