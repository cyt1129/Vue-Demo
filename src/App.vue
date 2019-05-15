<template>
  <div class="app-container">
    <mt-header fixed title="Vue项目"></mt-header>
    <h1>123</h1>
    <i class="el-icon-s-home"></i>
    <h6>首页</h6>
    
    <!--底部导航-->
    <el-footer>
      <a class="foot-nav">
        <i class="el-icon-grape"></i>
        <h6 class="icon-name">首页</h6>
      </a>
      <a class="foot-nav">
        <i class="el-icon-phone-outline"></i>
        <h6 class="icon-name">消息</h6>
      </a>
      <a class="foot-nav">
        <i class="el-icon-notebook-1"></i>
        <h6 class="icon-name">消息</h6>
      </a>
      <a class="foot-nav">
        <i class="el-icon-setting"></i>
        <h6 class="icon-name">消息</h6>
      </a>
    </el-footer>
  </div>
</template>

<script>
//按需导入组件
export default {
 
}
</script>

<style>
.app-container{
  padding-top:40px; 
}
html,body,p,h6,h1,h2{
  margin: 0;
  padding: 0;
}
.el-footer{
  background-color: #FFFFFF;
  border-top: solid 0.5px #DCDFE6;
  color: #606266;
  text-align: center;
  line-height: 20px;
  position: fixed;
  bottom: 0px;
  width:100%;
  display: flex;
  justify-content: space-between;
}
.foot-nav{
  width:25%;
  padding-top: 10px;
}
i{
  font-size: 24px;
}
</style>



