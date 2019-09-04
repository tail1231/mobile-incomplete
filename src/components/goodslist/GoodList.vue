<template>
    <div class="goodslist">
        <!-- <router-link :to="'/home/goodsinfo/'+item.id" class="goods-item" v-for="item in list" :key="item.id">
            <img :src="item.url" alt />
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="new">{{item.newprice}}</span>
                    <span class="old">{{item.oldprice}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.remain}}只</span>
                </p>
            </div>
        </router-link>-->
        <div class="goods-item" v-for="item in list" :key="item.id" @click="getnewpage(item.id)">
            <img :src="item.url" />
            <h1 class="title">{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="new">{{item.newprice}}</span>
                    <span class="old">{{item.oldprice}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.remain}}只</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
//定义axios
const axios = require("axios");

export default {
    data() {
        return {
            list: []
        };
    },
    methods: {
        getnewpage(id) {
            // this.$router.push("/home/goodsinfo/" + id)
            // this.$router.push({path:"/home/goodsinfo/" + id})
            this.$router.push({ name: "goodsinfo", params: { id } });
        }
    },
    created() {
        axios
            .get(
                "https://www.easy-mock.com/mock/5d648ce905596563f9ab0a7d/goods/goods"
            )
            .then(response => {
                this.list = response.data.data;
            })
            .catch(function(error) {
                console.log(error);
            });
    }
};
</script>

<style lang="scss" scoped>
.goodslist {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 6px;
    .goods-item {
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 5px #ccc;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin: 3px 0;
        min-height: 280px;
        img {
            width: 100%;
        }
        .title {
            margin: 10px 0;
            font-size: 16px;
        }
        .info {
            background-color: #eee;
            p {
                margin: 0;
                padding: 5px;
            }
            .price {
                .new {
                    color: #f00;
                    font-size: 16px;
                    font-weight: 700;
                }
                .old {
                    font-size: 12px;
                    text-decoration: line-through;
                    margin-left: 10px;
                }
            }
            .sell {
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>