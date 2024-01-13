<script setup lang="ts">
import { useMouse } from '@vueuse/core'
import { useExample } from '~/stores/use-example'
defineNuxtComponent({
  name: 'IndexPage',
})
const { $state, increment, decrement } = useExample()
const { x, y } = useMouse()
const count = computed(() => $state.count)
</script>

<template>
  <div class="text-center items-center flex flex-col h-screen justify-center">
    <h1>Counter: {{ count }}</h1>
    <div class="gap-2 flex mt-8">
      <Button :disabled="!count" @click="decrement"> Decrement </Button>
      <Button @click="increment"> Increment </Button>
    </div>
    <span>Mouse position:</span>
    <div>pos: {{ x }}, {{ y }}</div>
  </div>
</template>
