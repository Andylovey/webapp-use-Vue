<template>
    <div class="newslist">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in this.allNews[0].data" :key="item.uniquekey">
                <router-link :to="'/home/newlist/newinfo/' + item.uniquekey">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>{{ item.date }}</span>
                            <span>
                                <!-- <a :href="item.url">页面</a> -->
                                作者：{{ item.author_name }}
                            </span>
                        </p>
                    </div>
                </router-link>
            </li>
		</ul>
    </div>    
</template>

<script>
export default {
  data() {
    return {
      allNews: []
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      this.$http
        .get("/api/TouTiao/Query?key=dac2f378074c4b2db069ba731045f676&type=top")
        .then(result => {
          var dataObj = JSON.parse(result.bodyText);
          // console.log(dataObj.result);
          this.allNews.push(dataObj.result);
          console.log(this.allNews[0].data);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.newslist {
  position: relative;
  overflow: hidden;
  .mui-table-view {
    h1 {
      font-size: 13px;
    }
    .mui-ellipsis {
      font-size: 12px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
