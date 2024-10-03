<template>
  <main>
    <section class="hero-section">
      <div class="textBox container">
        <div class="heroText">
          <h2 class="noto-kufi-arabic-Boold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h2>
          <p class="text-secondary">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <BottunVue
            Text="Shop Now"
            backgrond="#000000"
            width="210px"
            hight="52px"
            border_redus="62px"
            color="white"
            class="px-3 py-1"
            border="none"
          >
            <template v-slot:contant> </template>
          </BottunVue>
        </div>
        <div class="info d-flex align-items-center mt-5">
          <div class="first">
            <h4 class="noto-kufi-arabic-Boold">200+</h4>
            <p class="text-secondary">International Brands</p>
          </div>
          <hr />
          <div class="Second">
            <h4 class="noto-kufi-arabic-Boold">2,000+</h4>
            <p class="text-secondary">High-Quality Products</p>
          </div>
          <hr />
          <div class="Third">
            <h4 class="noto-kufi-arabic-Boold">30,000+</h4>
            <p class="text-secondary">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
    <section class="brands">
      <CrusleVue class="" :itemsToShow="5" :NumberOfSlideItem="5" />
    </section>
    <section class="py-5 cloths">
      <div class="container">
        <div class="newArrivals py-5">
          <SectonsTitalVue>
            <template v-slot:h> NEW ARRIVALS </template>
          </SectonsTitalVue>
          <CardsVue
            :NumberOfCards="5"
            :-card-img-top="imgs"
            :data="prodcts"
            class="mt-5"
          ></CardsVue>
          <BottunVue
            Text="View All"
            backgrond="white"
            width="13.63rem"
            hight="3.25rem"
            border="1px solid #ddd"
            border_redus="62px"
            color="#00000"
            class="px-3 py-1 d-block mx-auto my-3"
          />
        </div>
        <hr class="divider" />
        <div class="topSelling py-5">
          <SectonsTitalVue>
            <template v-slot:h> TOP SELLING </template>
          </SectonsTitalVue>
          <CardsVue
            :NumberOfCards="5"
            :-card-img-top="imgs"
            :data="prodcts"
            class="mt-5"
          ></CardsVue>
          <BottunVue
            Text="View All"
            backgrond="white"
            width="13.63rem"
            hight="3.25rem"
            border="1px solid #ddd"
            border_redus="62px"
            color="#00000"
            class="px-3 py-1 d-block mx-auto mt-3"
          />
        </div>
      </div>
    </section>
    <section class="dressStyle py-5">
      <div class="container p-5">
        <div class="row my-5">
          <SectonsTitalVue>
            <template v-slot:h> BROWSE BY dress STYLE </template>
          </SectonsTitalVue>
        </div>
        <div class="row mb-3">
          <div class="col-md-5 col-sm-10 mx-auto position-relative">
            <a href=""
              ><img
                class="w-100 h-100 p-1"
                src="../assets/madie/imgs/Types_of_clothing/Casual.png"
                alt=""
            /></a>
            <p class="position-absolute top-50 start-50">Casual</p>
          </div>
          <div class="col-md-7 col-sm-10 mx-auto position-relative">
            <a href="">
              <img
                class="w-100 h-100 p-1"
                src="../assets/madie/imgs/Types_of_clothing/Formal.png"
                alt=""
            /></a>
            <p class="position-absolute top-50 start-50">Formal</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 col-sm-10 mx-auto position-relative">
            <a href="">
              <img
                class="w-100 h-100 p-1"
                src="../assets/madie/imgs/Types_of_clothing/Party.png"
                alt=""
            /></a>
            <p class="position-absolute top-50 start-50">Party</p>
          </div>

          <div class="col-md-5 col-sm-10 mx-auto position-relative">
            <a href=""
              ><img
                class="w-100 h-100 p-1"
                src="../assets/madie/imgs/Types_of_clothing/Gym.png"
                alt=""
            /></a>
            <p class="position-absolute top-50 start-50">Gym</p>
          </div>
        </div>
      </div>
    </section>
    <section class="our-happy-customrs mb-5">
      <div class="container">
        <SectonsTitalVue style="" class="me-auto text-left mb-5 customrs-tital">
          <template v-slot:h> OUR HAPPY CUSTOMERS </template>
        </SectonsTitalVue>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="100"
          viewBox="0 0 300 100"
        >
          <!-- رمز الميكروفون المتطور -->
          <rect
            x="20"
            y="20"
            width="40"
            height="60"
            rx="10"
            ry="10"
            fill="#2f3e46"
            stroke="#1c2833"
            stroke-width="3"
          />
          <circle
            cx="40"
            cy="20"
            r="15"
            fill="#2f3e46"
            stroke="#1c2833"
            stroke-width="3"
          />
          <line
            x1="40"
            y1="80"
            x2="40"
            y2="95"
            stroke="#1c2833"
            stroke-width="3"
          />
          <rect x="35" y="95" width="10" height="5" fill="#1c2833" />

          <!-- نص الموقع -->
          <text
            x="80"
            y="55"
            font-family="Verdana, sans-serif"
            font-size="32"
            fill="#1c2833"
            font-weight="bold"
          >
            NewsExpress
          </text>
        </svg>
        <FeedbacksVue ref="carouselRef" />
      </div>
    </section>
  </main>
  <FooterVue />
</template>

<script setup>
import CardsVue from "@/components/CardsVue.vue";
import BottunVue from "@/components/BottunVue.vue";
import CrusleVue from "@/components/CrusleVue.vue";
import SectonsTitalVue from "@/components/SectonsTitalVue.vue";
import FeedbacksVue from "@/components/FeedbacksVue.vue";
import FooterVue from "@/components/FooterVue.vue";
import { data } from "@/fakeStoreAPI";

let prodcts = data.filter((e) => {
  if (e.category === `men's clothing` || e.category === `women's clothing`) {
    return e;
  }
});
</script>
<style lang="scss" scoped>
section.hero-section {
  background-image: url("../assets/madie/imgs/heroSection/heroBack.webp");
  width: 100%;
  height: calc(100vh - 80px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  .textBox {
    width: 77.5rem;
    padding-top: 6.875rem;
    .heroText {
      h2 {
        font-size: 4rem;
        width: 36.06rem;
        color: $Primary;
        line-height: 4rem;
      }
      p {
        width: 34.06rem;
        line-height: 1.38rem;
        margin: 2rem 0rem;
      }
    }
    .info {
      width: 37.25rem;
      height: 4.63rem;
      h4 {
        font-size: 2.5rem;
      }
      hr {
        width: 1px;
        background-color: $Primary;
        height: 4rem;
        margin: 0 2rem;
      }
    }
  }
}
@media (max-width: 768px) {
  section.hero-section {
    background-image: url("../assets/madie/imgs/heroSection/herBackPhon.webp");
    height: 1400px;
    background-size: contain;
    background-position: bottom;
    background-color: #f2f0f1;
    .textBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      .info {
        justify-content: center;
      }
    }
  }
}
@media (max-width: 575.98px) {
  section.hero-section {
    height: 1000px;
    .textBox {
      width: 32rem !important;
      .heroText {
        h2 {
          width: fit-content !important;
          font-size: 3rem;
        }
        p {
          width: fit-content !important;
          width: 26.06rem !important;
          margin: 2rem auto !important;
        }
      }
      .info {
        width: 31.25rem !important;
      }
    }
  }
}
.brands {
  content-visibility: auto;
  background-color: black;
}
.divider {
  content-visibility: auto;
  background-color: $Primary;
  height: 1px;
  width: 100%;
}

.dressStyle {
  content-visibility: auto;
  div.container {
    background-color: $Secondary;
    border-radius: 2.5rem;
    div.row {
      div {
        img {
          transition: 1s;
          border-radius: 1.25rem;
        }
        p {
          font-size: 3rem;
          color: $Primary;
          transition: 1s;
          transform: translate(-50%, -50%);
          opacity: 0;
          font-weight: bold;
          cursor: pointer;
        }
        &:hover {
          img {
            filter: blur(1.5rem);
          }
          p {
            opacity: 1;
          }
        }
      }
    }
  }
}
.our-happy-customrs {
  .container {
    position: relative;
    .customrs-tital {
      * {
        text-align: left;
      }
    }
  }
}
@media (max-width: 767.98px) {
  .dressStyle {
    div.container {
      div.row {
        div {
          height: 11.88rem;
        }
      }
    }
  }
}
</style>
