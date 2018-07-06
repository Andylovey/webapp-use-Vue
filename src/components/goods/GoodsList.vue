<template>
    <div class="allGoodsList">
        <div class="goods-list" v-for="item in allPic" :key="item.title"
        @click="getPage(item.title)">
            <img :src="item.picUrl" alt="">
            <div class="info">
                <h1>{{item.title}}</h1>
                <div class="price">
                    <span>￥899</span>
                    <span>￥699</span>
                </div>
                <div class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </div> 
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
        <!-- <div class="goods-list">
            <img src="https://g-search1.alicdn.com/img/bao/uploaded/i4/TB1OVumi8jTBKNjSZFwXXcG4XXa.jpg_220x220.jpg_.webp" alt="">
            <div class="info">
                <h1>小米 小米手机8 超清四曲面，AI超感光双摄，红外人脸识别</h1>
                <div class="price">
                    <span>￥899</span>
                    <span>￥699</span>
                </div>
                <div class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </div> 
            </div>
        </div>  
        <div class="goods-list">
            <img src="https://g-search1.alicdn.com/img/bao/uploaded/i4/TB1OVumi8jTBKNjSZFwXXcG4XXa.jpg_220x220.jpg_.webp" alt="">
            <div class="info">
                <h1>小米 小米手机8 超清四曲面，AI超感光双摄，红外人脸识别</h1>
                <div class="price">
                    <span>￥899</span>
                    <span>￥699</span>
                </div>
                <div class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </div> 
            </div>
        </div>     -->
    </div>
</template>

<script>
import { Indicator } from "mint-ui";

export default {
  data() {
    return {
      allPic: [],
      num: 10
    };
  },
  created() {
    this.getAllPic();
  },
  methods: {
    getAllPic() {
      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      this.$http
        .get(
          "http://api.tianapi.com/meinv/?key=c4c468f33f3bffe658cf1aebb04bc7ba&num=" +
            this.num
        )
        .then(result => {
          var dataObj = JSON.parse(result.bodyText);
          // this.allPic = dataObj.newslist;
          this.allPic = this.allPic.concat(dataObj.newslist);
          console.log(this.allPic);
          Indicator.close();
        });
    },
    getMore() {
      this.num += 10;
      this.getAllPic();
    },
    getPage(title){
        this.$router.push("/home/goodslist/" + title);
    }
  }
};
</script>

<style lang="less" scoped>
.allGoodsList {
  display: flex;
  flex-wrap: wrap;
  padding: 0 5px;
  justify-content: space-between;
  .goods-list {
    width: 49%;
    box-shadow: 0 0 8px #bbb;
    margin: 5px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 278px;
    img {
      width: 100%;
    }
    .info {
      background: #eee;
      padding: 4px;
      h1 {
        font-size: 13px;
      }
      .price {
        font-size: 12px;
        span {
          &:first-child {
            color: red;
            font-weight: bolder;
            font-size: 15px;
          }
          &:last-child {
            color: #aaa;
            margin-left: 10px;
          }
        }
      }
      .sell {
        font-size: 12px;
        color: #aaa;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
