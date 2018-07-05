<template>
    <div class="allGoodsList">
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
        </div>    
    </div>
</template>

<script>
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
    img {
      width: 100%;
    }
    .info {
      h1 {
        font-size: 13px;
      }
      .price {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        // color: #333;
        font-size: 12px;
        span {
          &:first-child {
            color: red;
          }
          &:last-child {
            color: #ccc;
          }
        }
      }
      .sell{
          font-size: 12px;
      }
    }
  }
}
</style>
