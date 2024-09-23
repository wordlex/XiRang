<template>
  <alicebar>
    <input type="text" placeholder="输入'/'或'#'快速体验" />
  </alicebar>
</template>

<script setup lang="ts"></script>

<style>
alicebar {
  /* background-color: aqua; */
}
alicebar input {
  min-width: 50vw;
  max-width: 90vw;
  font-size: 24px;
  padding: 8px 32px;
  border: 3px solid;
  border-radius: 24px;
  cursor: text;
  /* box-shadow: 2px 2px 0px var(--color-text); */
}
</style>
