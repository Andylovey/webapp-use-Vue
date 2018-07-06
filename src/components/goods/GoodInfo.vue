<template>
    <div>
        <div @click="go" class="go">
            <button type="button" class="mui-btn mui-btn-link">
		            <span class="mui-icon mui-icon-back"></span>
		            返回
		        </button>
        </div>
        <h3>商品详情 --- {{title}}</h3>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.params.title,
      boolean: true
    };
  },
  methods: {
    go() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
.go {
  position: fixed;
  top: 6px;
  z-index: 9999;
  .mui-btn-link {
    color: #fff;
  }
}
h3 {
  text-align: center;
  color: red;
  font-size: 14px;
}
</style>
