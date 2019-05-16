<template>
  <div>
    <!--轮播图区域-->
    <el-carousel height="200px">
      <!--在组件中循环的时候-->
      <el-carousel-item v-for="item in lunbotuList" :key="item">
        <img v-bind:src="item" > <!--注意：直接写src=“item”，会把item当做字符串，加载不出图片，要将src与item属性绑定-->
      </el-carousel-item>
    </el-carousel>

    <!--6宫格区域-->
    <ul>
      <li class="icon-item">
        <i class="el-icon-edit"></i>
        <div>新闻资讯</div>
      </li>
      <li class="icon-item">
        <i class="el-icon-picture"></i>
        <div>图片分享</div>
      </li>
      <li class="icon-item">
        <i class="el-icon-camera-solid" style="{color:red;}"></i>
        <div>商品购买</div>
      </li>
      <li class="icon-item">
        <i class="el-icon-edit"></i>
        <div>留言反馈</div>
      </li>
      <li class="icon-item">
        <i class="el-icon-edit"></i>
        <div>视频专区</div>
      </li>
      <li class="icon-item">
        <i class="el-icon-edit"></i>
        <div>新闻资讯</div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data(){
    return{
      lunbotuList:[]//保存轮播图的数组
    }
  },
  created(){
    this.getLunbotu();
  },
  methods:{
    getLunbotu(){
      this.$http.get("http://120.77.181.41:3000/api/getcover")
                .then(result=>{
                  //console.log(result.body);
                  if(result.body.status == 1){
                    this.lunbotuList = result.body.imgs;
                  }else{
                    console.log("加载失败")//用弹框
                  }
                });
    },
  }
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
img{
  width:100%;
  height: 100%;
}
ul{
  list-style: none;
  padding: 0;
  margin-top: 20px;
  text-align: center;
}
.icon-item{
  display: inline-block;
  width: 30%;
  height: 100px;
  position: relative;
  text-align: center;
}
.icon-item div{
  position: absolute;
  bottom: 10px;
  margin-left: -24px; /*绝对定位居中，因为absolute情况下无法使用margin:0 auto*/
  left:50%;
  font-size: 12px;
}
i{
  font-size: 32px;
  margin-top: 20%;
}
</style>
