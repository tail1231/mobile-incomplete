<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotulist" :key="item.id">
                <img :src="item.url" :class="{'full':isfull}" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    data(){
        return {};
    },
    props:["lunbotulist","isfull"]
};
</script>

<style lang="scss" scoped>
.mint-swipe-item {
    text-align: center;
}
.mint-swipe {
    height: 200px;
}
img {
    // width: 100%;
    height: 100%;
}
.full {
    width: 100%;
}
</style>