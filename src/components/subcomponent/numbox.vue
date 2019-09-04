<template>
    <div>
        <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="max">
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input
                id="test"
                class="mui-input-numbox"
                type="number"
                value="1"
                @change="countChange"
                ref="numbox"
            />
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
</template>

<script>
//引入mui
import mui from "../../lib/mui/js/mui.min.js";

export default {
    data() {
        return {};
    },
    props: ["max"],
    methods: {
        countChange() {
            this.$emit("getcount", this.$refs.numbox.value);
        }
    },
    mounted() {
        mui(".mui-numbox").numbox();
    },
    watch: {
        max: function(newVal, oldVal) {
            mui(".mui-numbox")
                .numbox()
                .setOption("max", newVal);
        }
    }
};
</script>

<style>
</style>