

<script lang="ts">
import { defineComponent } from "vue";

import data from "./data.json";
import { useRenderer, type FormDesignerData } from './renderer'
import { VCard, VBtn } from 'vuetify/components'

export default defineComponent({
  components: {
    VCard,
    VBtn
  },
  setup() {
    const { renderer } = useRenderer()
    return () => renderer(data as unknown as FormDesignerData)
  },
});
</script>
<style>
#app {
  height: 100vh;
}
.outer {
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
}
.inner {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
