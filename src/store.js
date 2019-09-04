import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state:{
    car:[] //将购物车中商品的数据用一个数组存起来,存储元素为对象{id:商品id , count:要购买的数量 , price:商品单价 , selected:false}
  },
  mutations:{
    addToCar(state,goodsinfo){
      //点击加入购物车，把商品信息添加倒state中
      //如果购物车中，之前有对应商品，更新数量即可
      //如果没有，直接把商品信息添加到state中
      
      let flag = false;

      state.car.some(item=>{
        if(item.id==goodsinfo.id){
          item.count +=parseInt(goodsinfo.count);
          flag=true;
          return true;
        }
      })
      if(!flag){
        state.car.push(goodsinfo);
      }
    }
  },
  getters:{

  }
})

export default store;