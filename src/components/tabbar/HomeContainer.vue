<template>
    <div>
        <!-- 轮播图 -->
        <swiper :lunbotulist="newlist" :isfull="true"></swiper>
        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newlist">
                    <span class="mui-icon"></span>
                    <img src="../../images/menu1.png" />
                    <div class="mui-media-body">猫咪快报</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../images/menu2.png" />
                    <div class="mui-media-body">猫咪知识</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <span class="mui-icon"></span>
                    <img src="../../images/menu3.png" />
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="#">
                    <span class="mui-icon"></span>
                    <img src="../../images/menu4.png" />
                    <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="#">
                    <span class="mui-icon"></span>
                    <img src="../../images/menu5.png" />
                    <div class="mui-media-body">视频专区</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="#">
                    <span class="mui-icon"></span>
                    <img src="../../images/menu6.png" />
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
//引入swiper组件
import swiper from '../subcomponent/swiper.vue'
//定义axios
const axios = require("axios");

export default {
    data() {
        return {
            newlist: []
        };
    },
    created() {
        this.getlunbotu();
    },
    methods: {
        getlunbotu() {
            //获取轮播图数据的方法
            axios
                .get(
                    "https://www.easy-mock.com/mock/5d5e74ed0ea2af5f70b7be7c/test/test"
                )
                .then(res => {
                    this.newlist = res.data.data.list;
                })
                .catch(function(error) {
                    // 请求失败处理
                    console.log(error);
                });
        }
    },
    components:{
        swiper
    }
    // filters: {
    //     filterImgSrc(value) {
    //         return require("../../assets/lunbotu/" + value);
    //     }
    // }
};
</script>

<style scoped lang="scss">

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: 0;
    img {
        width: 60px;
        height: 60px;
    }

    .mui-media-body {
        font-size: 12px;
    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
}
</style>