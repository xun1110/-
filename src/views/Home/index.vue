<script setup>
import HomeProduct from './components/HomeProduct.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomePanel from './components/HomePanel.vue'

</script>

<template>
  <div class="container">
    <HomeCategory/>
    <HomeBanner/>
  </div>
  <HomeNew/>
  <HomeHot/>
  <HomeProduct/>
  <!--新鲜好物  -->
  <HomePanel title="新鲜好物" subTitle="新鲜好物  好多商品">
    我是新鲜好物的插槽内容
  </HomePanel>
  <!-- 人气推荐 -->
  <HomePanel title="人气推荐" subTitle="人气推荐  好多商品">
    我是人气推荐的插槽内容
  </HomePanel>
</template>