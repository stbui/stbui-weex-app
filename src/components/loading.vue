<template>
    <div class="stbui-loading">
        <text class="stbui-loading-text">{{ text }}</text>
    </div>
</template>

<style scoped>
.stbui-loading {
    align-items: center;
    position: fixed;
    left: 0;
    top: 86px;
    right: 0;
    bottom: 100px;
    z-index: 999;
}

.stbui-loading-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    background-color: rgba(0, 0, 0, 0.6);

    padding-left: 30px;
    padding-right: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 16px;
    color: white;
    text-align: center;
}
</style>


<script>
export default {
    props: {
        text: {
            type: String,
            default: '拼命加载中'
        }
    }
}
</script>
