<template>
  <div class="container">
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

    <ul class="list list-offset">
      <li class="list-item">
        <text>专家预约服务</text>
      </li>
      <li class="list-item">
        <text>电话客服</text>
      </li>
      <li class="list-item">
        <text>产品培训</text>
        <span style="flex: 1 1 1e-09px;"></span>
        <icon type="&#xe6f8;" color="#ccc"></icon>
      </li>
    </ul>

    <ul class="list list-offset">
      <li class="list-item">
        <text>帮助中心</text>
        <span style="flex: 1 1 1e-09px;"></span>
        <icon type="&#xe6f8;" color="#ccc"></icon>
      </li>
      <li class="list-item">
        <text>升级公告</text>
        <span style="flex: 1 1 1e-09px;"></span>
        <icon type="&#xe6f8;" color="#ccc"></icon>
      </li>
      <li class="list-item">
        <text>推荐领福利</text>
        <span style="flex: 1 1 1e-09px;"></span>
        <icon type="&#xe6f8;" color="#ccc"></icon>
      </li>
    </ul>

    <ul class="list list-offset">
      <li class="list-item">
        <text>应用管理</text>
        <span style="flex: 1 1 1e-09px;"></span>
        <icon type="&#xe6f8;" color="#ccc"></icon>
      </li>
    </ul>

    <ul class="list">
      <li class="list-item">
        <text>设置</text>
        <span style="flex: 1 1 1e-09px;"></span>
        <icon type="&#xe6f8;" color="#ccc"></icon>
      </li>
    </ul>
  
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.container {
  background-color: #efeff4;
}

.list {
  background-color: #fff;
}

.list-item{
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #ddd;
  display: flex;
  flex-direction: row;
      align-items: center;
}
.list-offset {
  margin-bottom: 30px;
}

.list-content {
  margin-left: 10px;
}

.title {
  font-size: 28px;
}
.small-title {
  font-size: 20px;
  color:#858299;
}

.badge {
  font-size: 20px;
  background-color: #11c1f3;
  color:#fff;
  border-radius: 8px;
  padding: 10px;
}
</style>
