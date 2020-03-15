<template>
  <div id="app">
    <!-- 头部组件 -->
    <LayoutHeader/>
    <!-- 中间部分，一级路由容器 -->
    <div class="wrapper">
      <router-view/>
    </div>
    <!-- 底部组件 -->
    <LayoutFooter/>
  </div>
</template>
<script>
// 引入头部底部组件
import LayoutHeader from '@/components/layout-header.vue'
import LayoutFooter from '@/components/layout-footer.vue'

export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }

}
</script>

<style lang="less">

</style>
