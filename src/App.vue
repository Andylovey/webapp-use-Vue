<template>
     <div class="app-container">
       <!-- 头部区域 -->
       <mt-header fixed title="黑马程序员·Vue项目"></mt-header>
       <div class="goBack" @click="goBack" v-show="flag">
            <button type="button" class="mui-btn mui-btn-link">
		            <span class="mui-icon mui-icon-back"></span>
		            返回
		        </button>
        </div>

       

       <!-- 内容区域 -->
       <transition>
          <router-view></router-view>
       </transition>


       <!-- 尾部区域 -->
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item-l" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item-l" to="/member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item-l" to="/shopcar">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item-l" to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜索</span>
        </router-link>
      </nav>

     </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    this.flag = this.$route.path === "/home" ? false : true;
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>

<style>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}

.mui-btn-link {
  color: #fff;
  z-index: 9999;
  position: fixed;
  top: 5px;
}

.mint-header.is-fixed {
  z-index: 999;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s ease;
}

.mui-bar-tab .mui-tab-item-l.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-l {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-l .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-l .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
