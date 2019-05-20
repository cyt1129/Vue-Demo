<template>
  <div class="app-container">
    <mt-header fixed title="✧(≖ ◡ ≖✿)嘿嘿"></mt-header>
    <!--中间主页面-->
    <transition>
      <router-view></router-view>
    </transition>

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
  overflow-x: hidden;/*影藏x轴上的滚动条，因为动画时，待出现的页面会出现在页面右侧看不见的地方，就会产生一个滚动条*/
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
  color:#606266;
}
i{
  font-size: 24px;
}
.active-router{
  color: #409EFF;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);/*进入之前在100%位置*/
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);/*进入之前在100%位置*/
  position: fixed;/*或者absolute也行，因为是脱离标准流*/
}
.v-enter-active,.v-leave-active{
  transition: all 0.5s ease;
}
</style>



