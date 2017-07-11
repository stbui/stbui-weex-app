<template>
    <div class="footer">
        <div class="bottom-bar-item" @click="jump('/workspace')">
            <icon type="&#xe733;" class="icon"></icon>
            <text class="text">工作台</text>
        </div>
        <div class="bottom-bar-item" @click="jump('/workspace')">
           <icon type="&#xe702;" class="icon"></icon>
            <text class="text">CRM</text>
        </div>
        <div class="bottom-bar-item" @click="jump('/tasks')">
           <icon type="&#xe702;" class="icon"></icon>
            <text class="text">待办</text>
        </div>
        <div class="bottom-bar-item" @click="jump('/my')">
          <icon type="&#xe715;" class="icon"></icon>
            <text class="text">我的</text>
        </div>
    </div>
</template>

<style scoped>
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    border-top-width:1px;
    border-top-style:solid;
    border-top-color: #b2b2b2;
    background-color: #f8f8f8;

    flex-direction: row;
    align-items: center;
}

.bottom-bar-item {
    -ms-flex-align: center;
    align-items: center;
    -ms-flex: 1;
    flex: 1;
        height: 100%;
    justify-content: center;
}
.text {
    color: rgba(0, 0, 0, .54);
    font-size: 24px;
}

.icon {
    width: 64px;
    height: 64px;
    font-size: 48px;
        line-height: 64px;
    text-align: center;
    color: #999;
}
</style>

<script>
  var navigator = weex.requireModule('navigator')
  var modal = weex.requireModule('modal')

  export default {
    methods: {
    //   jump (event) {
    //     console.log('will jump')
    //     navigator.push({
    //       url: '#/'+event,
    //       animated: "true"
    //     }, event => {
    //       modal.toast({ message: 'callback: ' + event })
    //     })
    //   }
    }
  };
</script>