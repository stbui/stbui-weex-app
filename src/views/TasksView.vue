<template>
  <div class="container">
  
    <text class="column-title">日程</text>

    <stbui-calender></stbui-calender>
  
    <text class="column-title">审批事项</text>
    <div class="stbui-grid">
      <div class="stbui-cell stbui-row stbui-border">
        <div class="cell-label">
          <text>待审批</text>
        </div>
      </div>
      <div class="stbui-cell stbui-row stbui-border">
        <div class="cell-label">
          <text>回款</text>
        </div>
      </div>
      <div class="stbui-cell stbui-row stbui-border">
        <div class="cell-label">
          <text>报告</text>
        </div>
      </div>
    </div>
  
    <text class="column-title">销售助手</text>
  
  </div>
</template>

<script>

export default {
}
</script>

<style>
.stbui-grid {
  flex-wrap: wrap;
  flex-direction: row;
}

.stbui-cell {
  flex: 1;
  padding: 24px;
}

.stbui-border {
  border-color: #ddd;
  border-style: solid;
  border-width: 1px;
  border-right-width: 0;
}

.stbui-grid {
  background-color: #fff;
}

.column-title {
  font-size: 28px;
  padding-left: 30px;
  background-color: #efeff4;
  color: #858e99;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
