<template>
    <div class="cmtCom">
        <hr>
        <h3>发表评论</h3>
        <textarea placeholder="请发表你要BB的内容吧~~" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postCmt">评论</mt-button>

        <div class="allcmt">
            <div class="cmt" v-for="(item,i) in allcmt" :key="item.famous_name">
                <div class="cmt-title">
                    第{{i+1}}楼&nbsp;&nbsp;用户名：{{item.famous_name}}&nbsp;&nbsp;发表时间：2017-12-12
                </div>
                <div class="cmt-body">
                    {{item.famous_saying}}
                </div>
            </div>
            <!-- <div class="cmt">
                <div class="cmt-title">
                    第1楼&nbsp;&nbsp;用户名：张卫健&nbsp;&nbsp;发表时间：2017-12-12
                </div>
                <div class="cmt-body">
                    小鱼儿与花无缺
                </div>
            </div> -->
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>    
</template>

<script>
import { Toast, Indicator } from "mint-ui";
export default {
  data() {
    return {
      page: 1,
      allcmt: [],
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get(
          "/api/MingRenMingYan/LookUp?key=2780b20e3218411bb200c033374c5db6&keyword=%E5%A4%A9%E6%89%8D&page=" +
            this.page +
            "&rows=10"
        )
        .then(result => {
          // console.log(result.bodyText);
          var dataObj = JSON.parse(result.bodyText);
          // console.log(dataObj.result);
          this.allcmt = this.allcmt.concat(dataObj.result);
          console.log(this.allcmt);
        });
    },
    getMore() {
      var allcmtLen = 10;

      Indicator.open({
        text: "加载中...",
        spinnerType: "fading-circle"
      });
      this.page++;
      this.getComments();
      console.log(this.allcmt.length);
      if (this.allcmt.length >= allcmtLen) {
        setTimeout(function() {
          Indicator.close();
        }, 1000);
      }
      //     // Indicator.close();
      //   }
    },
    postCmt() {
      Toast("暂时无法发表评论");
      this.msg = "";
    }
  }
};
</script>

<style lang="less" scoped>
.cmtCom {
  h3 {
    font-size: 15px;
  }
  textarea {
    font-size: 13px;
    margin: 0;
  }
  .allcmt {
    margin: 5px 0;
    .cmt {
      font-size: 13px;
      .cmt-title {
        background: #ccc;
        line-height: 30px;
      }
      .cmt-body {
        line-height: 30px;
      }
    }
  }
}
</style>
