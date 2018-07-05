<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html" @click="getPhotoForTop">
							头条
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html" @click="getPhotoForTiyu">
							体育
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html" @click="getPhotoForYule">
							娱乐
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html" @click="getPhotoForShehui">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html" @click="getPhotoForShishang">
							时尚
						</a>
                        <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html" @click="getPhotoForKeji">
							科技
						</a>
					</div>
				</div>

		</div>

        <ul class="photo-list">
            <li v-for="item in allData" :key="item.uniquekey">
                <img v-lazy="item.thumbnail_pic_s">
                <div class="info">
                    <div class="info-title">
                        <h1>{{item.title}}</h1>
                    </div>
                    <div class="info-body">
                        <p>作者：{{item.author_name}}</p>
                        <p>来自于：{{item.category}}</p>
                        <p>时间：{{item.date}}</p>
                    </div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
import mui from "../../assets/libs/js/mui.min.js";
import { Indicator } from "mint-ui";

export default {
  data() {
    return {
      allData: []
    };
  },
  created() {
    this.getPhotoForTop();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getPhotoForTop() {
      Indicator.open();
      this.$http
        .get("/api/TouTiao/Query?key=dac2f378074c4b2db069ba731045f676&type=top")
        .then(result => {
          //   console.log(result.bodyText);
          var dataObj = JSON.parse(result.bodyText);
          // console.log(dataObj.result.data)
          this.allData = dataObj.result.data;
          console.log(this.allData);
          Indicator.close();
        });
    },
    getPhotoForTiyu() {
      Indicator.open();
      this.$http
        .get(
          "/api/TouTiao/Query?key=dac2f378074c4b2db069ba731045f676&type=tiyu"
        )
        .then(result => {
          //   console.log(result.bodyText);
          var dataObj = JSON.parse(result.bodyText);
          // console.log(dataObj.result.data)
          this.allData = dataObj.result.data;
          console.log(this.allData);
          Indicator.close();
        });
    },
    getPhotoForShehui() {
      Indicator.open();
      this.$http
        .get(
          "/api/TouTiao/Query?key=dac2f378074c4b2db069ba731045f676&type=shehui"
        )
        .then(result => {
          //   console.log(result.bodyText);
          var dataObj = JSON.parse(result.bodyText);
          // console.log(dataObj.result.data)
          this.allData = dataObj.result.data;
          console.log(this.allData);
          Indicator.close();
        });
    },
    getPhotoForYule() {
      Indicator.open();
      this.$http
        .get(
          "/api/TouTiao/Query?key=dac2f378074c4b2db069ba731045f676&type=yule"
        )
        .then(result => {
          //   console.log(result.bodyText);
          var dataObj = JSON.parse(result.bodyText);
          // console.log(dataObj.result.data)
          this.allData = dataObj.result.data;
          console.log(this.allData);
          Indicator.close();
        });
    },
    getPhotoForShishang() {
      Indicator.open();
      this.$http
        .get(
          "/api/TouTiao/Query?key=dac2f378074c4b2db069ba731045f676&type=shishang"
        )
        .then(result => {
          //   console.log(result.bodyText);
          var dataObj = JSON.parse(result.bodyText);
          // console.log(dataObj.result.data)
          this.allData = dataObj.result.data;
          console.log(this.allData);
          Indicator.close();
        });
    },
    getPhotoForKeji() {
      Indicator.open();
      this.$http
        .get(
          "/api/TouTiao/Query?key=dac2f378074c4b2db069ba731045f676&type=keji"
        )
        .then(result => {
          //   console.log(result.bodyText);
          var dataObj = JSON.parse(result.bodyText);
          // console.log(dataObj.result.data)
          this.allData = dataObj.result.data;
          console.log(this.allData);
          Indicator.close();
        });
    }
  }
};
</script>

<style lang="less" scoped>
* {
  touch-action: pan-y;
}
.photo-list {
  list-style-type: none;
  padding: 0;
  margin: 8px 8px 0px;
  li {
    background: #ccc;
    margin-top: 8px;
    box-shadow: 0 0 8px #999;
    position: relative;
    img {
      width: 100%;
      display: block;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: #fff;
      position: absolute;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      width: 100%;
      .info-title {
        h1 {
          font-size: 14px;
        }
      }
      .info-body {
        p {
          color: #fff;
          padding: 0;
          margin: 0;
        }
      }
    }
  }
}
</style>
