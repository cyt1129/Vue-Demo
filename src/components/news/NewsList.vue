<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media"
      v-for="(news,index) in lists" :key="news.id">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" 
            :src="news.img_url">
            <div class="mui-media-body">
                <h1>{{news.title}}</h1>
                <p class='mui-ellipsis'>
                  <span>{{news.add_time}}</span>
                  <span>点击{{news.clicked}}次</span>
                </p>
            </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      lists:[]
    }
  },
  created(){
    this.getNewsLists()
  },
  methods:{
    getNewsLists(){
      this.$http.get("http://120.77.181.41:3000/api/getnews?pageIdx=1")
          .then(res=>{
            console.log(res.body);
            var obj = JSON.parse(res.body.news);
            this.lists = obj;
            console.log(obj)
          })
    }
  }
};
</script>

<style scoped>
.mui-table-view li h1{
  font-size: 14px;
}
.mui-ellipsis{
  font-size: 12px;
  display:flex;
  justify-content: space-between;
}
</style>
