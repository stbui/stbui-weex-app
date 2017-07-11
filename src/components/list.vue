<template>
    <list class="list">
      <cell>
        <ul class="list">
          <li class="list-item" v-for="d in data" :key="d">
            <text>{{ d.name }}</text>
            <text class="list-remark">{{ d.name }}</text>
          </li>
          <!--<li class="list-item">
            <span style="flex: 1 1 1e-09px;"></span>
            <icon type="&#xe6f8;" color="#ccc"></icon>
          </li>-->
        </ul>
      </cell>
    </list>
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


<script>
export default {
  props: {
      data: {
          default:[]
      }
  }
}
</script>


