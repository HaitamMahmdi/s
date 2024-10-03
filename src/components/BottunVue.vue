<template>
  <button ref="botton">
    {{ Text }}
  </button>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
const Props = defineProps({
  Text: {
    type: String,
    required: true,
  },
  backgrond: {
    type: String,
  },
  width: {
    type: String,
  },
  hight: {
    type: String,
  },
  color: {
    type: String,
  },
  border_redus: {
    type: String,
  },
  border: { type: String },
}); // eslint-disable-line no-unused-vars
const botton = ref(null);
const BottonStyle = () => {
  botton.value.style.background = Props.backgrond;
  botton.value.style.width = Props.width;
  botton.value.style.height = Props.hight;
  botton.value.style.color = Props.color;
  botton.value.style.borderRadius = Props.border_redus;
  botton.value.style.border = Props.border;
};
onMounted(() => {
  BottonStyle();
});
</script>
<style></style>
