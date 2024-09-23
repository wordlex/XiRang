<template>
  <header></header>
  <nav class="bottom" >
    <RouterLink v-for="(item, index) in navlist" :to="item.router" :key="index">
      <span class="sign">{{ item.logo }}</span>
      <span>{{ item.name }}</span>
    </RouterLink>
  </nav>
  <RouterView />
  <!-- <Main /> -->
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import Main from '@/components/MainPlayground.vue'

const navlist = ref([
  {
    name: '息壤',
    logo: '⛰',
    router: '/'
  },
  {
    name: '朝日',
    logo: '☀️',
    router: '/diary'
  },
  {
    name: '调色板',
    logo: '🎨',
    router: '/colors'
  }
  // {
  //   name: '营地',
  //   logo: '⛺️',
  //   router: '/'
  // },
  // {
  //   name: 'SKI',
  //   logo: '🏂🏻',
  //   router: '/'
  // },
  // {
  //   name: 'ANIME',
  //   logo: '🖼',
  //   router: '/'
  // }
])
</script>
<style>
header {
  line-height: 1.5;
}

.sign {
  display: inline-block;
  width: 24px;
  text-align: center;
}

nav {
  position: fixed;
  top: 50%;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  font-size: 20px;
  text-shadow: -2px 2px 0 #222;
  background-color: var(--color-background-soft);
  background-color: rgba(93, 0, 253, 90%);
  border: 2px solid #000;
  border-left: 0;
  box-shadow: -8px 8px 0 rgba(150, 108, 217, 50%);

  /* transform: translateY(-50%); */

  &.bottom {
    top: initial;
    bottom: 0;
    flex-direction: row;
    justify-content: space-around;
    min-width: 100%;
    border: none;
    border-top: 2px solid;
    box-shadow: none;
  }
}

nav a.router-link-exact-active {
  font-weight: bold;
  color: #fff;
  text-decoration: underline;
}

nav a.router-link-exact-active:hover {
  font-weight: bold;
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 0.4rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
