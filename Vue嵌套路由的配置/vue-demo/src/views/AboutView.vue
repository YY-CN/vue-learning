<template>
  <div class="about">
    <!-- 这里要写全路径,即配合父路径 -->
    <router-link to="/about/us">关于我们</router-link> | 
    <router-link to="/about/info">关于信息</router-link>
    <router-view/>
  </div>
</template>
