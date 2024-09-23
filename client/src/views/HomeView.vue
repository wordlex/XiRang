<script setup lang="ts">
import AliceBar from '@/components/AliceBar.vue'
import MagicBook from '@/components/MagicBook.vue'
//@ts-ignore
import confetti from 'canvas-confetti'
import { onMounted } from 'vue'

function shoot() {
  // go Buckeyes!

  confetti({
    origin: { y: 1 },
    shapes: ['😁']
  })
}
onMounted(() => {
  shoot()
})
</script>

<template>
  <section class="map"></section>
  <section class="items"></section>
  <section class="chat">
    <AliceBar />
  </section>
  <MagicBook />
</template>
<style>
.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.chat {
  width: 100vw;
  position: fixed;
  bottom: 1vh;
  display: flex;
  justify-content: center;
}
</style>
