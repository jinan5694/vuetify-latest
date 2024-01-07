

<script lang="ts">
import { defineComponent, h } from "vue";

import data from "./data.json";
import { renderer, type FormDesignerData } from './renderer'

export default defineComponent({
  setup() {
    // return () => renderer(data as FormDesignerData)
    return () => h('v-card', { title: 'card title', text: 'sdsf'})
  },
});
</script>
<style>
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
