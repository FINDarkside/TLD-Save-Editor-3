<template>
  <v-app>
    <v-main>
      <div>
        <v-select
          :items="items"
          item-value="value"
          item-title="name"
          label="Current save"
          variant="underlined"
        ></v-select>
      </div>


    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const tab = ref(null);
watch(tab, () => console.log(tab))


const items = ref([{ name: 'Save 1', value: 'file1' }, { name: 'Save 1', value: 'file2' }])
const select = ref<undefined | string>()
</script>
