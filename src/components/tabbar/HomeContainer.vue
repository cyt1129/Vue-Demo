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
</style>
