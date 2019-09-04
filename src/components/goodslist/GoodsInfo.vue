<template>
    <div class="goodsinfo-container">
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="flag" ref="ball"></div>
        </transition>
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotulist="list" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品名称</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner hd">
                    <p class="price">
                        市场价：
                        <span class="common">￥2999</span>&nbsp;&nbsp;
                        销售价：
                        <span class="now">￥1999</span>
                    </p>
                    <p class="count"></p>
                    <div class="btn">
                        <div class="buycontent">
                            <p class="total">购买数量：</p>
                            <numbox @getcount="getNumber" :max="goods.remain"></numbox>
                        </div>
                        <mt-button type="primary">立即购买</mt-button>&nbsp;
                        <mt-button type="danger" @click="addshopcar">加入购物车</mt-button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="number">宠物货号：{{goods.number}}</p>
                    <p class="remain">库存情况：{{goods.remain}}</p>
                    <p class="date">上架时间：{{goods.date}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//定义axios
const axios = require("axios");
//引入swiper
import swiper from "../subcomponent/swiper.vue";
//引入numbox
import numbox from "../subcomponent/numbox.vue";

export default {
    data() {
        return {
            id: this.$route.params.id,
            list: [],
            flag: false,
            selectCount: 1,
            goods: {}
        };
    },
    created() {
        this.getlist();
    },
    methods: {
        getlist() {
            //获取数据
            axios
                .get(
                    "https://www.easy-mock.com/mock/5d648ce905596563f9ab0a7d/goods/goods"
                )
                .then(response => {
                    this.list = response.data.data;
                    this.goods = response.data.goodsinfo[0];
                    console.log(response.data.goodsinfo[0].remain);
                });
        },
        addshopcar() {
            //加入购物车
            this.flag = !this.flag;
            // console.log('我是加入购物车的console'+this.selectCount);
            // {id:商品id , count:要购买的数量 , price:商品单价 , selected:false}
            let goodsinfo = {
                id: this.id,
                count: this.selectCount,
                price: this.list[0].newprice,
                selected: true
            };
            this.$store.commit("addToCar", goodsinfo);
        },
        beforeEnter(el) {
            el.style.transform = "translate(0,0)";
        },
        enter(el, done) {
            el.offsetWidth;
            //先获取到小球的距离页面的距离
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            //再获取到购物车徽标距离页面的距离
            const badgePositon = document
                .getElementById("badge")
                .getBoundingClientRect();
            let xdist = badgePositon.left - ballPosition.left;
            let ydist = badgePositon.top - ballPosition.top;
            el.style.transform = `translate(${xdist}px,${ydist}px)`;
            el.style.transition = "all 0.5s ease";
            done();
        },
        afterEnter(el) {
            this.flag = !this.flag;
        },
        getNumber(count) {
            this.selectCount = count;
            console.log(count);
        }
    },
    components: {
        swiper,
        numbox
    }
};

//获取到numbox里面的value值，将value值给购物车的徽标
</script>

<style lang="scss" scoped>
.goodsinfo-container {
    background-color: #eee;
    overflow: hidden;
    .ball {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #f00;
        position: absolute;
        top: 390px;
        left: 147px;
        z-index: 99;
    }
}
.mui-card {
    .hd {
        p {
            color: #000;
        }
        .price {
            .common {
                text-decoration: line-through;
            }
            .now {
                font-size: 16px;
                color: #f00;
                font-weight: 700;
            }
        }
        .btn {
            .buycontent {
                overflow: hidden;
                line-height: 35px;
                .total {
                    float: left;
                }
                .mui-numbox {
                    float: left;
                    margin-right: 30px;
                }
            }
        }
    }
}
</style>