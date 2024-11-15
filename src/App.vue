<script setup>

</script>

<template>
   <!-- 一级路由出口 -->
    <router-view/>
    <!-- 测试scss -->
     <div class="test">
        测试：
     </div>
</template>

<style lang="scss" scoped>
.test {
    color: $warnColor;
}
</style>