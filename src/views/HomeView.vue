<script setup lang="ts">
import ActionCard from "../components/ActionCard.vue";
import ActionCardContainer from "../components/ActionCardContainer.vue";


</script>

<template>
  <action-card-container>
    <div class="mb-1">
      <h1 class="text-xl font-bold" style="color: var(--accent-color)">HelloWRC.Dev</h1>
      <p class="text-sm opacity-75">一名学生，平时喜欢写一些有意思的小东西。</p>
    </div>
    <ActionCard header="关于我" icon="person24Regular" to="https://blogs.hellowrc.dev/intro.html"/>
    <ActionCard header="博客" icon="book24Regular" to="https://blogs.hellowrc.dev/"/>
    <span class="text-sm opacity-75">我的亮点项目</span>
    <ActionCard header="ClassIsland"
                description="一款适用于班级大屏的课表小工具，可以一目了然地显示各种信息。我是此项目的主要开发者。"
                icon="classisland" to="https://www.classisland.tech/"/>
    <ActionCard header="ClassIsland 集控服务器"
                description="批量管理多个 ClassIsland 实例，远程下发课表、提醒等信息。我是此项目的主要开发者。"
                icon="classisland" to="https://github.com/ClassIsland/ManagementServer"/>
    <ActionCard header="更多项目…" icon="folderOpen24Regular" to="/projects"/>
    <span class="text-sm opacity-75">相关链接</span>
    <ActionCard header="GitHub"
                icon="github" to="https://github.com/HelloWRC"/>
    <ActionCard header="哔哩哔哩"
                icon="bilibili" to="https://space.bilibili.com/355897687"/>
  </action-card-container>
</template>

<style scoped lang="scss">

</style>
