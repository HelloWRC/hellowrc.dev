<script setup lang="ts">

import ActionCard from "../components/ActionCard.vue";
import ActionCardContainer from "../components/ActionCardContainer.vue";
</script>

<template>
  <action-card-container>
    <div class="mb-1">
      <p class="text-sm" style="color: var(--accent-color)">HelloWRC.Dev</p>
      <p class="text-xl">项目列表</p>
      <span class="text-sm opacity-75">我主要参与开发的项目。</span>
    </div>
    <ActionCard icon="arrowLeft24Regular" header="返回首页" to="/"/>
    <hr class="opacity-50"/>
    <span class="text-sm opacity-75">亮点项目</span>
    <ActionCard header="ClassIsland"
                description="一款适用于班级大屏的课表小工具，可以一目了然地显示各种信息。"
                icon="classisland" to="https://www.classisland.tech/"/>
    <ActionCard header="ClassIsland 集控服务器"
                description="批量管理多个 ClassIsland 实例，远程下发课表、提醒等信息。"
                icon="classisland" to="https://github.com/ClassIsland/ManagementServer"/>
    <span class="text-sm opacity-75">其它项目</span>
    <ActionCard header="PhainonDistributionCenter"
                description="ClassIsland 分发系统，基于 ASP.NET + Blazor 开发。"
                icon="/src/assets/pdc.png" to="https://github.com/ClassIsland/PhainonDistributionCenter"/>
    <ActionCard header="classisland-web-vuetify"
                description="ClassIsland 首页。"
                icon="classisland" to="https://github.com/ClassIsland/classisland-web-vuetify"/>
    <ActionCard header="ClassIslandBot"
                description="用于处理 ClassIsland 组织内事务的 GitHub App “classisland-bot” 的后端代码。"
                icon="/src/assets/classisland-bot.png" to="https://github.com/ClassIsland/ClassIslandBot"/>
    <ActionCard header="philia-build-image"
                description="适用于 ClassIsland 面向信创 Linux 平台构建的环境的 Docker 镜像。"
                icon="/src/assets/philia-build-image.png" to="https://github.com/ClassIsland/philia-build-image"/>
    <span class="text-sm opacity-75">已归档的项目</span>
    <span class="text-sm opacity-75">这些项目已经归档，不建议再使用。</span>
    <ActionCard header="StickyHomeworks"
                description="一款支持富文本的桌面作业贴工具。"
                icon="/src/assets/stickyhomeworks.png" to="https://github.com/HelloWRC/StickyHomeworks/"/>
    <ActionCard header="RandomPicker"
                icon="/src/assets/randompicker.svg" to="https://github.com/HelloWRC/RandomPicker/"/>
    <ActionCard header="W-DesktopCountdown"
                icon="/src/assets/wdcd.svg" to="https://github.com/HelloWRC/W-DesktopCountdown/"/>
    <hr class="opacity-50"/>
    <ActionCard icon="github" header="查看更多项目" to="https://github.com/HelloWRC?tab=repositories"/>
    <ActionCard icon="arrowLeft24Regular" header="返回首页" to="/"/>
  </action-card-container>
</template>

<style scoped lang="scss">

</style>