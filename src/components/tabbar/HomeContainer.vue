<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in resultArr[0]" :key="item.url">
                <img :src="item.url" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 六宫格 -->
         <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
              <router-link to="/home/newslist">
                    <img src="../../assets/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
              </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../assets/images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
		</ul> 
    </div>
</template>

<script>
export default {
  data() {
    return {
      resultArr: []
    };
  },
  created() {
    this.getDataForCarousel();
  },
  methods: {
    getDataForCarousel() {
      this.$http
        .get(
          "/api/Joke/NewstImg?key=223ff8937d0043e5a9eb95f2162f8f36&page=1814&rows=2"
        )
        .then(res => {
          var dataObj = JSON.parse(res.bodyText);
          var result = dataObj.result;
           console.log(result);
          this.resultArr.push(result);
          console.log(this.resultArr);
        });
    }
  }
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      // background: red;
    }
    &:nth-child(2) {
      // background: blue;
    }
    &:nth-child(3) {
      // background: green;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
}

.mui-grid-view.mui-grid-9{
    background: #fff;
    border: none;
    li{
        border: none;
        img{
            width: 60px;
            height: 60px;
        }
        .mui-media-body{
            font-size: 13px;
        }
    }
}
</style>

