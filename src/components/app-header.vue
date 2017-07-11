<template>
  <div class="header">
    <div class="header-left" @click="back">
      <icon type="&#xe720;" color="#fff"></icon>
      <text class="text">返回</text>
    </div>
    <div class="header-center"><text class="text">{{ title }}</text></div>
    <div class="header-right" @click="headerRight"><text class="text">更多</text></div>
  </div>
</template>

<style scoped>
.header-left {
  height: 100%;
  justify-content: center;
  color: #ffffff;
      flex-direction: row;
    align-items: center;
}
.header-right {

}

.text {
  color: #ffffff;
}

.header {
  position: relative;
  height: 86px;
  margin-bottom: 3px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #DDDDDD;
  background-color: #0598ff;
   flex-direction: row;
    align-items: center;
    justify-content: space-between;
        padding-right: 30px;
        padding-left: 30px;
}

.nav {
  display: flex;
  position: absolute;
  left: 120px;
  top: 35px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}

.link {
  padding-left: 15px;
  padding-right: 15px;
}

.title {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 32px;
  line-height: 44px;
  color: #FFFFFF;
}
</style>

<script>
import router from '../router';
import dingtalk from 'weex-dingtalk';

export default {
  props: {
      title: {
        type: String,
        default: '工作台'
      },
  },

  methods: {
    back() {
      router.back();
    },

    headerRight() {
      window.location.reload();
    }
  }
}
</script>
