<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr />
        <textarea placeholder="请输入要bb的内容(最多bb120个字)" v-model="text"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.add_time+i">
                <div class="cmt-title">第{{i+1}}楼 &nbsp;&nbsp;用户：{{item.user_name}}&nbsp;发表时间：{{item.add_time}}</div>
                <div class="cmt-body">{{item.content==""?"此用户很懒，什么都不愿意说":item.content}}</div>
            </div>
        </div>  
    </div>
</template>

<script>
const axios = require("axios");
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            comments:[],
            text:''
        };
    },
    created(){
        this.getComments()
    },
    methods: {
        getComments() {
            axios
                .get("https://www.easy-mock.com/mock/5d5fd9a3a90fa6144debe91a/comments/comments")
                .then(res => {
                    this.comments=res.data.data
                })
                .catch(function(error) {
                    // 请求失败处理
                    // console.log(error);
                    Toast('获取评论失败！')
                });
        },
        postComment(){
            // console.log("提交评论给服务器");
            if(this.text==''){
                Toast('评论内容不能为空！')
            }
        }
    },
    props:["id"]
};
</script>

<style lang="scss" scoped>
.cmt-container {
    h3 {
        font-size: 16px;
    }
    textarea {
        margin: 0;
        height: 85px;
    }
    .cmt-list {
        .cmt-item {
            margin-top: 10px;
            .cmt-title {
                background: #ccc;
                font-size: 13px;
                line-height: 30px;
            }
            .cmt-body {
                line-height: 35px;
                font-size: 14px;
                text-indent: 2em;
            }
        }
    }
}
</style>