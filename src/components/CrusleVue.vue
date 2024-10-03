<template>
  <Carousel
    :autoplay="3000"
    :transition="300"
    :items-to-show="props.itemsToShow"
    :wrap-around="true"
    :pauseAutoplayOnHover="true"
  >
    <Slide v-for="slide in props.NumberOfSlideItem" :key="slide">
      <div class="carousel__item">
        <img :src="imgs(slide)" alt="" />
      </div>
    </Slide>

    <template #addons> </template>
  </Carousel>
</template>

<script setup>
import { defineProps } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const props = defineProps({
  NumberOfSlideItem: { type: Number, requird: true },
  itemsToShow: { type: Number, requird: true },
});
const imgs = (r) => {
  return require(`@/assets/madie/imgs/trademark/${r}.png`);
};
</script>
<style scoped lang="scss">
li {
  height: 7.63rem;
  padding: 0px 10px;
  img {
    width: 100%;
  }
}
</style>
