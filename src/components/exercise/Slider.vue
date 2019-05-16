<template>
  <div>
    <div class="slider-container">
      <div class="slider-banner">
        <transition-group>
         <img v-for="(item,index) in imgs" :src="item.src" :key="item.id">
        </transition-group>
      </div>
      <ul class="btn">
        <li class="left-btn" @click="move(-1)"></li>
        <li class="right-btn" @click="move(1)"></li>
      </ul>
      <ul class="dots">
        <li v-for="item in 3" :key="item" @click="change(item)"
        :class="{dotted:item == currentIndex+1}"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import img1 from "../../assets/1.jpg"; //直接写img的相对路径会被当字符串处理
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
export default {
  data() {
    return {
      imgs: [
        { id:0,src: img1 }, 
        {id:1, src: img2 }, 
        {id:2, src: img3 }],
      currentIndex: 0
    };
  },
  methods: {
    move(dir) {
      // console.log(this.currentIndex)
      if (dir === 1) {
        var end = this.imgs.splice(1,2);
        this.imgs = end.concat(this.imgs);
        console.log(this.imgs);
      } else {
        var end = this.imgs.splice(2,1);
        this.imgs = end.concat(this.imgs);
      }
      // if (this.currentIndex > 2) {
      //   this.currentIndex = 0;
      // }
      // if (this.currentIndex < 0) {
      //   this.currentIndex = 2;
      // }
      
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
.slider-container {
  height: 200px;
  width: 100%;
  background-color: aquamarine;
  position: relative;
  overflow: hidden;
}
img {
  width: 100%;
  height: 200px;
}
.btn li {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: rgba(0, 0, 1, 0.5);
  display: inline-block;
  position: absolute;
  top: 50%;
  margin-top: -10px;
}
.left-btn {
  left: 10px;
}
.right-btn {
  right: 10px;
}
.dots {
  position: absolute;
  bottom: 10px; /*距离容器底部10px*/
  left: 50%;
  transform: translateX(-50%);
}
.dots li {
  display: inline-block;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: rgba(0, 0, 1, 0.5);
  margin: 0 5px;
}
.dots .dotted {
  background-color: blueviolet;
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100%);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
