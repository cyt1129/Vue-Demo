<template>
  <div class="app-container">
    <mt-header fixed title="✧(≖ ◡ ≖✿)嘿嘿"></mt-header>
    <!--中间主页面-->
    <router-view></router-view>


    <!--底部导航-->
    <el-footer>
      <router-link class="foot-nav" to="/home">
        <i class="el-icon-grape"></i>
        <h6 class="icon-name">首页</h6>
      </router-link>
      <router-link class="foot-nav" to="/member">
        <i class="el-icon-phone-outline"></i>
        <h6 class="icon-name">会员</h6>
      </router-link>
      <router-link class="foot-nav" to="/search">
        <i class="el-icon-shopping-cart-1"></i>
        <h6 class="icon-name">购物车</h6>
      </router-link>
      <router-link class="foot-nav" to="/shopcar">
        <i class="el-icon-search"></i>
        <h6 class="icon-name">搜索</h6>
      </router-link>
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
.active-router{
  color: #409EFF;
}
a{
  text-decoration: none;
  color:#606266;
}
</style>



