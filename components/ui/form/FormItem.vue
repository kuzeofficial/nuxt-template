<script lang="ts">
import { type InjectionKey } from 'vue'
</script>

<script lang="ts" setup>
import { provide, useAttrs } from 'vue'
import { useId } from 'radix-vue'
import { cn } from '@/lib/utils'

const FORM_ITEM_INJECTION_KEY = Symbol(
  'form-item-injection-key',
) as InjectionKey<string>
defineExpose({ FORM_ITEM_INJECTION_KEY })

defineOptions({
  inheritAttrs: false,
})

const id = useId()
provide(FORM_ITEM_INJECTION_KEY, id)

const { class: className, ...rest } = useAttrs()
</script>

<template>
  <div :class="cn('space-y-2', className ?? '')" v-bind="rest">
    <slot />
  </div>
</template>
