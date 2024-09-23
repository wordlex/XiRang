<template>
  <div class="p-colors" :style="{ backgroundColor: currentColor }">
    <div class="logo">
      <span>传统四十二色</span>
    </div>

    <div class="title">
      <p style="color: #133d7e">群青</p>
    </div>

    <div
      class="stamper"
      v-for="item in chineseColors"
      :key="item.color"
      :style="{ backgroundColor: item.color }"
    >
      {{ item.name }}
    </div>

    <!-- <div class="colors-card" v-for="item in colors" :key="'color' + item.code">
      <div class="name">{{ item.name }}</div>
      <div class="box">
        <div
          class="cell"
          v-for="color in item.colors"
          :key="color"
          :style="{ backgroundColor: color }"
        >
          {{ color }}
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue'
interface Color {
  code: string
  name: string
  tags?: Array<string>
  colors: Array<string>
}
const colors: Ref<Array<Color>> = ref([])

const currentColor: Ref<string> = ref('#eeeeee')

const chineseColors = ref([
  { name: '白', color: '#f4f2ef', desc: '' },
  { name: '青', color: '#8bc2d8' },
  { name: '黑', color: '#2f2f32' },
  { name: '赤', color: '#c3272b' },
  { name: '黄', color: '#efd87a' }
  // { name: '群青', color: '#133d7e' },
  // { name: '赤色', color: '#c3272b' }
])

colors.value.push({
  code: '0001',
  name: '赛博朋克',
  tags: [],
  colors: ['#69f4f9', '#ca2f8b', '#5c356a', '#453274', '#2a1c3f']
})
colors.value.push(
  ...[
    {
      code: '0002',
      name: '赛博朋克2',
      tags: [],
      colors: ['#e349ed', '#05f8f8']
    }
  ]
)
</script>

<style>
.p-colors {
  width: 100%;
  height: 100vh;
  padding: 20px;
  font-family: 'Times New Roman', Times, serif;
  writing-mode: vertical-rl;

  /* background-color: antiquewhite; */

  /* background-color: #133d7e; */
}

@media (min-width: 1024px) {
  .m-colors {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    min-height: 100vh;
  }
}

.box {
  display: flex;
  font-size: 12px;
}

.cell {
  width: 80px;
  height: 80px;

  /* border-radius: 50%; */
}

.title {
  font-size: 48px;
}

.logo {
  position: relative;
  height: 364px;
  font-size: 48px;
  color: #133d7e;
  color: #fff;
  text-decoration: underline;
}

.logo::before {
  position: absolute;
  top: -32px;
  left: 32px;

  /* content: ''; */
  width: 136px;
  height: 430px;
  background-color: rgba(19, 61, 126, 20%);

  /* border: 4px solid; */
  border-radius: 32px;

  /* background-color: rgb(196, 202, 214); */
}

.stamper {
  width: 96px;
  height: 96px;
  font-size: 32px;
  line-height: 96px;
  color: #fff;
  text-align: center;
  background-color: #133d7e;

  /* border-radius: 60% 40% 70% 50% / 45% 65% 55% 65%;
  border-radius: 50%; */
}
</style>
