<template>
  <Carousel ref="myCarousel" :items-to-show="2.5" :wrap-around="true">
    <Slide ref="mySlide" v-for="feedback in feedbacks" :key="feedback">
      <div class="carousel__item">
        <div class="box text-start">
          <ul class="d-flex">
            <li v-for="star in feedback.Evaluation" :key="star">
              <i class="fa-solid fa-star color-gold"></i>
            </li>
          </ul>
          <div class="userName my-3 d-flex align-items-center">
            <h4 class="pe-2">{{ feedback.userName }}</h4>
            <i v-if="feedback.Verified" class="fa-solid fa-check Verified"></i>
          </div>
          <template> </template>
          <p>{{ feedback.feedbacks }}</p>
        </div>
      </div>
    </Slide>
  </Carousel>
  <div class="nav-crusle">
    <button class="pervButton" ref="pervButton">
      <i class="fa-solid fa-arrow-left"></i>
    </button>
    <button class="nextButton" ref="nextButton">
      <i class="fa-solid fa-arrow-right"></i>
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const myCarousel = ref(null);
const nextButton = ref(null);
const pervButton = ref(null);
const mySlide = ref([]);
const clickNext = () => {
  myCarousel.value.next();
  console.log(`sss`);
};
const clickPrev = () => {
  myCarousel.value.prev();
};
const feedbacks = ref([
  {
    Evaluation: 5,
    userName: "Oliver",
    feedbacks: ` Lorem ipsum dolor sit amet consectetur,
 adipisicing elit. Ipsam recusandae,
  ratione Ipsam recusandae,
  ratione`,
    Verified: true,
  },
  {
    Evaluation: 5,
    userName: "Emma",
    feedbacks: ` Lorem ipsum dolor sit amet consectetur,
 adipisicing elit. Ipsam recusandae,
  ratione Ipsam recusandae,
  ratione`,
    Verified: true,
  },
  {
    Evaluation: 5,
    userName: "Sophia",
    feedbacks: ` Lorem ipsum dolor sit amet consectetur,
 adipisicing elit. Ipsam recusandae,
  ratione Ipsam recusandae,
  ratione`,
    Verified: true,
  },
  {
    Evaluation: 5,
    userName: "Ethan",
    feedbacks: ` Lorem ipsum dolor sit amet consectetur,
 adipisicing elit. Ipsam recusandae,
  ratione Ipsam recusandae,
  ratione`,
    Verified: true,
  },
  {
    Evaluation: 5,
    userName: "Alex",
    feedbacks: ` Lorem ipsum dolor sit amet consectetur,
 adipisicing elit. Ipsam recusandae,
  ratione Ipsam recusandae,
  ratione`,
    Verified: true,
  },
  {
    Evaluation: 5,
    userName: "Noah",
    feedbacks: ` Lorem ipsum dolor sit amet consectetur,
 adipisicing elit. Ipsam recusandae,
  ratione Ipsam recusandae,
  ratione`,
    Verified: true,
  },
]);

onMounted(() => {
  // mySlide.value.style.cssText = ``
  console.log(mySlide);
  nextButton.value.addEventListener("click", clickNext);
  pervButton.value.addEventListener("click", clickPrev);
});
</script>
<style lang="scss" scoped>
.box {
  width: 25rem;
  border-radius: 20px;
  padding: 1.75rem 2rem;
  border: 1px solid rgb(0, 0, 0, 10%);
  .color-gold {
    color: gold;
    h4 {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
  .Verified {
    color: white;
    background-color: green;
    padding: 5px;
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
  }
}
.nav-crusle {
  position: absolute;
  top: 10px;
  right: 0;
  .nextButton,
  .pervButton {
    border: none;
    background-color: transparent;
    padding: 5px;
    border-radius: 50%;
    i {
      font-size: 1.5rem;
    }
  }
}
.carousel__slide {
  width: fit-content !important;
  padding: 0 10px;
}
@media (max-width: 425px) {
  .nav-crusle {
    right: 14px;
    top: 30px;
  }
}
</style>
