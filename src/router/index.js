import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入tabbar的组件
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import ShopcarContainer from '../components/tabbar/ShopcarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'
import NewsList from '../components/news/NewsList.vue'
import NewInfo from '../components/news/NewInfo.vue'

var router = new VueRouter({
    routes : [
        {path : '/' , redirect : '/home'},
        {path : '/home' , component : HomeContainer},
        {path : '/member' , component : MemberContainer},
        {path : '/shopcar' , component : ShopcarContainer},
        {path : '/search' , component : SearchContainer},
        {path : '/home/newslist' , component : NewsList},
        {path : '/home/newlist/newinfo/:uniquekey' , component : NewInfo }
    ],
    linkActiveClass : 'mui-active'
})

export default router;