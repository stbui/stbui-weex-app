<template>
  <div class="container">
    <!--<stbui-loading></stbui-loading>-->
    <stbui-list class="leads-list" :data="lists"></stbui-list>
  </div>
</template>

<style>
.leads-list {
  margin-bottom: 100px
}
</style>


<script>

export default {
  data() {
    return {
      lists: []
    }
  },
  created() {
    for (let i = 0; i < 30; i++) {
      this.lists.push({ id: i, name: '线索 ' + i })
    }
  }
}
</script>

<style>
.container {
  background-color: #efeff4;
}

</style>
