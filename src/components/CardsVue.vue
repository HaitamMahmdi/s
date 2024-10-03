<template>
  <Carousel :itemsToShow="card" :wrapAround="true" :transition="500">
    <Slide class="c" v-for="obj in props.data" :key="obj">
      <div class="carousel__item" style="width: 18rem">
        <img :src="obj.image" class="w-100 card-img-top" alt="2005 * 200" />
        <div class="box">
          <div class="">
            <h5 class="tital noto-kufi-arabic-Boold mt-1">
              {{ obj.title }}
            </h5>
          </div>
          <ul class="">
            <li class="d-flex">
              <ul>
                <i
                  v-for="star in Math.trunc(obj.rating.rate)"
                  :key="star"
                  class="fa-solid fa-star color-gold"
                ></i>
              </ul>
              <p>
                {{ obj.rating.count }}/<span class="text-secondary">5</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>
<script setup>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { defineProps, onMounted, ref } from "vue";
const props = defineProps({
  NumberOfCards: { type: Number, required: true },
  CardImgTop: { required: true },
  data: { required: true },
});
const card = ref(5);
onMounted(() => {
  if (window.innerWidth <= 990 && window.innerWidth >= 575.98) {
    card.value = 3;
    console.log(`ss`);
  } else if (window.innerWidth <= 575.98) {
    card.value = 1;
    console.log(`sss`);
  } else {
    card.value = 5;
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 990 && window.innerWidth >= 575.98) {
      card.value = 3;
      console.log(`ss`);
    } else if (window.innerWidth <= 575.98) {
      card.value = 1;
      console.log(`sss`);
    } else {
      card.value = 5;
    }
  });
  document.querySelectorAll(`.cloths div.carousel__viewport`).forEach((e) => {
    e.style.cssText = `  height: 500px;
  padding: 33px 0px; `;
  });
});
/*
const priceBeforDiscount = (discountedPrice, discountPercentage) => {
  return Math.ceil(discountedPrice / (1 - discountPercentage / 100));
};
*/
</script>
<style scoped lang="scss">
.box {
  text-align: left;
}
.card-img-top {
  border-radius: 20px;
  height: 18.6rem;
}
.tital {
  font-size: 1.25rem;
  font-weight: 700;
}
.price {
  font-size: 1.5rem;
}
.orginal-price {
  color: rgba(0, 0, 0, 0.4);
  text-decoration: line-through;
  font-size: 1.5rem;
}
.discount {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 51, 51, 0.1);
  color: #ff3333;
  padding: 6px 14px;
  font-size: 0.9rem;
  border-radius: 3.88rem;
  width: 3.63rem;
}

.color-gold {
  color: $Gold;
}

.carousel__slide {
  padding: 5px;
}
div.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}
.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  margin: 0 10px 0 16px;
}
.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
