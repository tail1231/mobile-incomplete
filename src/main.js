import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入mint-ui全部组件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

//导入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.config.productionTip = false

//引入轮播图组件
import {
    Swipe,
    SwipeItem
} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//引入axios
import axios from "axios";

//定义全局时间过滤器
Vue.filter("dateFormat", function (dateStr, arg) {
    var dt = new Date(dateStr);
    var y = dt.getFullYear();
    var m = (dt.getMonth() + 1).toString().padStart(2, "0");
    var d = dt.getDate().toString().padStart(2, "0");
    if (arg && arg.toLowerCase() == "yyyy-mm-dd") {
        return `${y}-${m}-${d}`;
    } else {
        var hours = dt.getHours().toString().padStart(2, "0");
        var minutes = dt.getMinutes().toString().padStart(2, "0");
        var seconds = dt.getSeconds().toString().padStart(2, "0");
        return `${y}-${m}-${d} ${hours}:${minutes}:${seconds}`;
    }
})



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
