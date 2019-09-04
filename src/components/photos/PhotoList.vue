<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item',item.id ==0?'mui-active':'']" href="#item1mobile" data-wid="tab-top-subpage-1.html" v-for="item in list" :key="item.id" @click="clickHandler(item.content)">
                       {{item.title}}
                    </a>
                </div>
            </div>
        </div>
        <!-- 对应导航内容 -->
            <span>
                {{flag}}
            </span>
    </div>
</template>

<script>
//1.导入mui的js文件
import mui from "../../lib/mui/js/mui.min.js";

//定义axios
const axios = require("axios");

export default {
    data() {
        return {
            list: [
                {
                    id: 0,
                    title: "全部",
                    content:"布偶猫,又称'布拉多尔(Ragdoll)',发源于美国,是一种杂交品种宠物猫.是现存体型最大,体重最重的猫之一.头呈楔形,眼大而圆,被毛丰厚,四肢较长且富有肉感,尾长,身体柔软,毛色有重点色,手套色或双色等等.布偶猫较为温顺好静,对人友善.其美丽优雅又非常类似于狗的性格(Puppy cat)而又被称为'仙女猫','小狗猫'.特殊的外貌和温和的性格是布偶猫最大的特点之一."
                },
                {
                    id: 1,
                    title: "外形特点",
                    content:"布偶猫的体毛属于中长型,不会缠结在一起,质地柔滑.它的尾巴蓬松,颈部通常带'围脖',而臀部的体毛也比较长.定期梳理毛发会让布偶猫感到十分舒服.布偶猫是最漂亮的纯种猫之一,带有独特的单色点或双色点的毛.体色有海豹色,蓝色,巧克力色,丁香色,红色,奶油色."
                },
                {
                    id: 2,
                    title: "生活习性",
                    content:"布偶猫异常温柔,较适宜室内饲养.一般应为它们做绝育并提供适当的生活环境,例如配备猫抓板来适应它们的抓挠习惯等：这些是维持它们健康长寿和快乐的基本条件.布偶猫会舔洗和梳理一身中等长度的丝状毛发.如果要给它们梳理毛发的话可以抱着用钢针排梳梳理,使它们举止优雅.布偶猫善于讨好主人,总是形影不离地围着主人转,这种猫喜静,但也爱玩玩具,并喜欢参与家中的日常生活.布偶猫是一个晚熟的品种,它们的毛色至少要到2岁才会足够丰满,而体格和体重则要至少4岁才能发育完.刚出生的幼猫全身是白色的,一周后幼猫的脸部,耳朵,尾巴开始有颜色变化,直到2岁时被毛才稳定下来,直到3-4岁才完全长成布偶猫是猫,是猫总会掉毛,只是布偶掉的不严重而已.宠物掉毛多是温度问题,如果全年温度控制在21~22左右,能有效缓解这个问题."
                },
                {
                    id: 3,
                    title: "种群分布",
                    content:"布偶猫种群主要分布于美国,也有多处分布在美国境外,如加拿大,澳大利亚,英国等欧洲地区,中国,日本,俄罗斯分布较广.祖先为白色长毛猫与伯曼猫, 于1960年开始繁育,1965年在美国获得认可,1985年和1986年先后进入德国和法国,2003年,布偶猫引进中国,进入中国家庭以及动物园.种群动态是生态学理论的一个基石.这种猫在美国被列为一种濒危物种.有两种不同的假设来解释猫种群的分布.第一种假设认为,迁移是一个主要因素；第二种假设认为,在猫活动范围的外围,它们以独立的小型群落而存在."
                },
                {
                    id: 4,
                    title: "共同特征",
                    content:"布偶猫的体毛属于中长型,不会缠结在一起,质地柔滑.它的尾巴蓬松,颈部通常带'围脖',而臀部的体毛也比较长.定期梳理毛发会让布偶猫感到十分舒服.布偶猫是最漂亮的纯种猫之一,带有独特的单色点或双色点的毛.体色有海豹色,蓝色,巧克力色,丁香色,红色,奶油色."
                },
                {
                    id: 5,
                    title: "颜色分类",
                    content:"1,海豹色(Seal)----基因型(BBDD,BbDD,BBDd,BbDd)2,蓝色(Blue)----基因型(BBdd,Bbdd)3,巧克力色(Chocolate)----基因型(bbDD,bbDd)4,丁香色(Lilac)----基因型(bbdd)5,火焰色/红色(Flame/Red)----携带橙色基因(位于X染色体上)6,奶油色(Cream)----携带橙色基因(位于X染色体上)7,烟色(Smoke)----此类颜色曾出现于CFA布偶猫的颜色列表上,但因基因较为复杂,在此不做解释"
                }
            ],
            flag:''
        };
    },
    mounted() {
        //2.初始化滑动控件
        mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
        this.flag=this.list[0].content
    },
    methods: {
        clickHandler(content){
            this.flag=content;
        }
    }
};
</script>

<style lang="scss" scoped>
* {
    touch-action: pan-y;
}
</style>