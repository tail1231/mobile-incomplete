<template>
    <div>
        <ul class="mui-table-view">
            <li
                class="mui-table-view-cell mui-media"
                v-for="(item ,index) in list"
                :key="item+index "
            >
                <router-link :to="'/home/newsinfo/'+ item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url" />
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class="mui-ellipsis">
                            <span>{{item.add_time | dateFormat}}</span>
                            <span>{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
//引入Toast
import { Toast } from "mint-ui";
//定义axios
const axios = require("axios");

export default {
    data() {
        return {
            list: null
        };
    },
    created() {
        axios
            .get(
                "https://www.easy-mock.com/mock/5d5f88f5e168516d1373cb36/pic/pic"
            )
            .then(response => {
                this.list = response.data.data.list;
            })
            .catch(function(error) {
                // 请求失败处理
                Toast("获取列表失败！");
            });
    }
};
</script>

<style scoped lang="scss">
.mui-table-view {
    li {
        h1 {
            font-size: 14px;
        }
        .mui-ellipsis {
            display: flex;
            justify-content: space-between;
        }
        .mui-ellipsis {
            span {
                font-size: 12px;
                color: #26a2ff;
            }
        }
    }
}
</style>