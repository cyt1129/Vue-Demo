<template>
  <div>
    <div class="window">
      <!--1、图片部分-->
      <ul class="container" :style="containerStyle">
        <!--列表最前面的辅助图，就是图5，用于无限滚动-->
        <li>
          <img :src="sliders[sliders.length - 1].img" alt="">
        </li>
        <!--图1到图5正常部分-->
        <li v-for="(item,index) in sliders" :key="index">
          <img :src="item.img" alt="">
        </li>
        <!--列表最后的辅助图图1,用于无限滚动-->
        <li>
          <img :src="sliders[0].img" alt="">
        </li>
      </ul>
      <!--2、两侧的箭头-->
      <ul class="direction">
        <li class="left" @click="move(375,-1)"></li>
        <li class="right" @click="move(375,1)"></li>
      </ul>
      <!--3、下面的小圆点-->
      <ul class="dots">
        <li v-for="(dot,i) in sliders" :key="i"
        :class="{dotted:i === (currentIndex - 1)}" @click="jump(i+1)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import img1 from '../../assets/1.jpg';//直接写img的相对路径会被当字符串处理
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
export default {
  data(){
    return {
      sliders:[
        {img:img1},
        {img:img2},
        {img:img3},
        {img:img4},
        {img:img5},
      ],
      currentIndex:1,
      distance:-375,
      time:null
    }
  },
  computed:{
    containerStyle(){//使用了计算属性，distance改变触发这个函数，改变containerStyle
      return{
        transform:`translate3d(${this.distance}px,0,0)`
      }
    }
  },
  mounted(){
    this.play();
  },
  methods:{
    move(offset,direction,speed){ //左右箭头控制图片移动
      if(this.timer){
        window.clearInterval(this.timer);
        this.timer = null;
      }
      if(direction === 1){
        this.distance -= offset;
        this.currentIndex += (offset/375);
      }else if(direction === -1){
        this.distance += offset;
        this.currentIndex -= offset/375;
      }
      if(this.currentIndex > 5){
        this.currentIndex = 1;
        this.distance += 1875;
      }
      if(this.currentIndex < 1){
        this.currentIndex = 5;
        this.distance -= 1875;
      }
      this.play();
    },
    jump(index){
      this.currentIndex = index;
      this.distance = -375*index;
    },
    play(){
      this.timer = window.setInterval(()=>{
        this.move(375,1)
      },3000)
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ol,ul{
  list-style: none;
}
.window{
  width: 100%;
  height: 200px;
  border: 1px red solid;
  position: relative;
  overflow: hidden;/*超出的banner影藏*/
}
.container{
  display: flex;
  position: absolute;
}
img{
  width: 375px;/*设成屏幕宽度*/
  height: 200px;
}
.left, .right{
  position: absolute;
  top:50%;
  transform:translateY(-50%);
  width:30px;
  height:30px;
  background-color:rgba(0,0,0,.3);
  border-radius:50%;
  cursor:pointer;
}
.left{
  left:3%;
  padding-left:12px;
  padding-top:10px;
}
.right{
  right:3%;
  padding-right:12px;
  padding-top:10px;
}
.dots{
  position:absolute;
  bottom: 10px;/*距离容器底部10px*/
  left:50%;
  transform: translateX(-50%);
}
.dots li{
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 0 3px;
  background-color:rgba(0,0,0,.3);
}
.dots .dotted{
  background-color: blueviolet;
}
</style>


