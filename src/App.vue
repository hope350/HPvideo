<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbar-item path="/home">
        <img slot="item-icon-active" src="@/assets/img/tabbar/shouye_active.svg" alt="">
        <img slot="item-icon" src="@/assets/img/tabbar/shouye.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
      <img slot="item-icon-active" src="@/assets/img/tabbar/fenlei_active.svg" alt="">
        <img slot="item-icon" src="@/assets/img/tabbar/fenlei.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/vip">
      <img slot="item-icon-active" src="@/assets/img/tabbar/huiyuan_active.svg" alt="">
        <img slot="item-icon" src="@/assets/img/tabbar/huiyuan.svg" alt="">
        <div slot="item-text">会员</div>
      </tabbar-item>
      <tabbar-item path="/profile">
      <img slot="item-icon-active" src="@/assets/img/tabbar/wode_active.svg" alt="">
        <img slot="item-icon" src="@/assets/img/tabbar/wode.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar/Tabbar'
import TabbarItem from './components/tabbar/TabbarItem'

export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
