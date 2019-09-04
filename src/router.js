import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import BuycarContainer from './components/tabbar/BuycarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import comment from './components/subcomponent/comment.vue'
import PhotoList from './components/photos/PhotoList.vue'
import GoodList from './components/goodslist/GoodList.vue'
import GoodsInfo from './components/goodslist/GoodsInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [ //配置路由规则
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:HomeContainer
    },
    {
      path:'/member',
      component:MemberContainer
    },
    {
      path:'/buycar',
      component:BuycarContainer
    },
    {
      path:'/search',
      component:SearchContainer
    },
    {
      path:'/home/newlist',
      component:NewsList
    },
    {
      path:'/home/newsinfo/:id',
      component:NewsInfo
    },
    {
      path:'/home/photolist',
      component:PhotoList
    },
    {
      path:'/home/goodslist',
      component:GoodList,
    },
    {
      path:'/home/goodsinfo/:id',
      component:GoodsInfo,
      name:'goodsinfo'
    }
  ],
  linkActiveClass:'mui-active' //覆盖默认路由高亮的类,
})
