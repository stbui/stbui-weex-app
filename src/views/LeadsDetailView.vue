<template>
  <ul class="list list-offset">
      <li class="list-item">
        <span style="width:80px;height:80px;background-color:#3ac6ff;border-radius:16px"></span>
        <div class="list-content">
          <text class="title">stbui</text>
          <text class="small-title">免费使用</text>
        </div>
        
        <span style="flex: 1 1 1e-09px;"></span>
        <text class="badge">升级VIP版</text>
      </li>
    </ul>
</template>

<style scoped>
.list {
  background-color: #fff;
}

.list-item {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #ddd;
  display: flex;
  flex-direction: column;
}
.list-remark {
    font-size: 24px;
    color:#858299;
}

.list-offset {
  margin-bottom: 30px;
}

.list-content {
  margin-left: 10px;
}
</style>
