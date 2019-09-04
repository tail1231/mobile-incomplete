<template>
    <div class="newsinfo-container">
        <h3>{{newsinfo.name}}</h3>
        <p>
            <span>{{newsinfo.add_time}}</span>
            <span>{{newsinfo.click}}</span>
        </p>

        <hr />
        <div class="content">
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
            {{newsinfo.title}}
        </div>
        <!-- 评论子组件 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
const axios = require("axios");
//先导入组件
import comment from '../subcomponent/comment.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,
            newsinfo:{}
        };
    },
    created(){
        this.getNewsInfo();
    },
    methods:{
        getNewsInfo(){
            axios
                .get("https://www.easy-mock.com/mock/5d5f88f5e168516d1373cb36/pic/pic")
                .then(res => {
                    this.newsinfo = res.data.data.list[this.id-1];
                })
                .catch(function(error) {
                    // 请求失败处理
                    Toast('获取信息失败！');
                });
        }
    },
    //注册子组件
    components:{
        "comment-box":comment
    }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
    padding: 0 5px;
    h3 {
        font-size: 16px;
        text-align: center;
        color: red;
    }
    p {
        display: flex;
        justify-content:space-between;
        font-size: 12px;
        color: #26a2ff;
    }
    .content {
    }
}
</style>