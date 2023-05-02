<template>
  <div>
    <v-dialog v-model="visible" class="mx-5" scrim="#000000">
      <div class="justify-center align-center d-flex">
        <v-card max-width="500px">
        <v-card-text>
          <v-alert
            title="Warning"
            text="Enter only known coordinates, otherwise it is likely that you will fall from a height or under the map!"
            type="error"
            variant="tonal"
          ></v-alert>
          <v-form>
            <v-container class="pa-3 mt-5">
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="coordiantes.x"
                    :rules="coordRule"
                    variant="outlined"
                    label="X"
                    suffix="m"
                    required
                  ></v-text-field>
                </v-col>

                <v-col>
                  <v-text-field
                    v-model="coordiantes.y"
                    :rules="coordRule"
                    variant="outlined"
                    label="Y"
                    suffix="m"
                    required
                  ></v-text-field>
                </v-col>

                <v-col>
                  <v-text-field
                    v-model="coordiantes.z"
                    :rules="coordRule"
                    variant="outlined"
                    label="Z"
                    suffix="m"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card-text>

        <v-card-actions class="mb-2 mx-2 d-flex justify-space-between">
          <v-btn variant="tonal" @click="visible = false">Cancel</v-btn>
          <v-btn color="primary" variant="tonal" @click="submit">Save</v-btn>
        </v-card-actions>
      </v-card>
      </div>
      
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
//TODO: add i18n support
import { defineExpose, ref, reactive, computed, onMounted } from 'vue';
import store from '../../store';

const position = computed(
  () => store.currentSave?.data?.m_Dict?.global?.player?.m_SaveGamePosition
);

const coordiantes = reactive({
  x: 0,
  y: 0,
  z: 0,
});

const visible = ref(false);

function show() {
  coordiantes.x = position.value?.[0] ?? 0;
  coordiantes.y = position.value?.[1] ?? 0;
  coordiantes.z = position.value?.[2] ?? 0;
  visible.value = true;
}

const coordRule = ref([
  (value: number) => {
    if (!value) return 'Value is required.';
    if (!isNaN(value)) return true;

    return 'Value must be a number.';
  },
]);

function submit() {
  if (isNaN(coordiantes.x) || isNaN(coordiantes.y) || isNaN(coordiantes.z)) {
    console.log('Invalid');
    return;
  }
  if (position.value) {
    /*
    position.value[0] = coordiantes.x;
    position.value[1] = coordiantes.y;
    position.value[2] = coordiantes.z;
    */
    store.newPosition([coordiantes.x, coordiantes.y, coordiantes.z])
    visible.value = false;
  } else {
    console.log('Invalid');
  }
}


defineExpose({
  show,
});
</script>

<style lang="scss">
.coordsInput {
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  padding: 0 10px !important;
}
</style>
