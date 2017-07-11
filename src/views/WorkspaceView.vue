<template>
  <div class="worker-view">
    <list class="worker-list" @loadmore="loadMoreStories" loadmoreoffset="50">
      <cell>
        <text class="column-title">销售管理</text>
        <div class="stbui-grid" v-for="column in columns" :key="column.id" append="tree">
          <div class="stbui-cell stbui-row stbui-border" v-for="v in column" :key="v.id" @click="GoToRoute(v.type)">
            <icon type="&#xe71d;" :class="['icon', 'icon-' + v.type]"></icon>
            <div class="cell-label">
              <text>{{ v.name }}</text>
            </div>
          </div>
        </div>
  
        <text class="column-title">销售支持</text>
        <div class="stbui-grid" v-for="support in columns_support" :key="support.id">
          <div class="stbui-cell stbui-row stbui-border" v-for="v in support" :key="v.id" @click="GoToRoute(v.type)">
            <icon type="&#xe71d;" :class="['icon', 'icon-' + v.type]"></icon>
            <div class="cell-label">
              <text>{{ v.name }}</text>
            </div>
          </div>
        </div>
  
        <text class="column-title">常用功能</text>
      </cell>
  
    </list>
  </div>
</template>

<style scoped>

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

.stbui-row {
  flex-direction: row;
  align-items: center;
}

.cell-label {
  padding-left: 10px;
}

.icon {
  width: 80px;
  height: 80px;
  border-radius: 10px;
  text-align: center;
      font-size: 40px;
    color: #fff;
    line-height: 80px;
}

.icon-radius {
  border-radius: 10px;
}

.icon-svg {
  width: 40px;
  height: 80px;
  fill: #fff;
  font-size: 26px;
}




/* ikcrm icon start */

.icon-leads {
  background-color: #78c06e;
}

.icon-customer {
  background-color: #5e97f6;
}

.icon-opportunities {
  background-color: #f65e8d;
}

.icon-contracts {
  background-color: #ff943e;
}
.icon-seas {
      background-color: #5ec9f6
}
.icon-search {
  background-color: #6bb5ce
}
.icon-records {
      background-color: #f6bf26
}
.icon-checkin {
background-color: #3bc2b5
}
.icon-reports {
background-color: #f38484
}
.icon-product {
background-color: #bd84cd
}
.icon-contacts {
  background-color: #ff704f
}
.icon-share {
  background-color: #38adff
}
.icon-contacts {
  background-color: #ff704f
}
.icon-expense_account {
  background-color: #38adff
}
.icon-sms {
  background-color: #f65e8d
}

.icon-leads-svg {}






/* ikcrm icon end */

.worker-view {
  background-color: #efeff4;
}

.worker-list {
  margin-bottom: 100px;
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


<script>
import AppHeader from '../components/app-header.vue';
import AppFooter from '../components/app-footer.vue';
import router from '../router';
import dingtalk from 'weex-dingtalk';

export default {
  components: { AppHeader, AppFooter },
  data() {
    return {
      columns: [
        { name: '线索', type: 'leads' },
        { name: '客户', type: 'customer' },
        { name: '商机', type: 'opportunities' },
        { name: '合同', type: 'contracts' }
      ],
      columns_support: []
    }
  },
  methods: {
    GoToRoute(url) {
      router.push(url);
    },

    loadMoreStories() {

    }
  },
  mounted() {
    dingtalk.ready(function () {
      const dd = dingtalk.apis;
      // 设置导航
      dd.biz.navigation.setTitle({
        title: '工作台'
      });
    });
  },
  created() {
    this.columns = [
      [
        { name: '线索', type: 'leads', icon: 'fa-address-book-o' },
        { name: '客户', type: 'customer', icon: 'fa-address-book-o'} 
      ],
      [
        { name: '商机', type: 'opportunities', icon: 'icon-opportunities' },
        { name: '合同', type: 'contracts', icon:'icon-contracts' }
      ]
    ];

    this.columns_support = [
      [
        { name: '公海', type: 'seas' },
        { name: '查重', type: 'search' }
      ],
      [
        { name: '跟进记录', type: 'records' },
        { name: '拜访签到', type: 'checkin' }
      ],
      [
        { name: '工作报告', type: 'reports' },
        { name: '产品', type: 'product' }
      ],
      [
        { name: '联系人', type: 'contacts' },
        { name: '短信', type: 'sms' }
      ],
      [
        { name: '费用报销', type: 'expense_account' },
        { name: '社交推广', type: 'share' }
      ]
    ];

    //
    this.addFontIcon();
  }
 
}
</script>

