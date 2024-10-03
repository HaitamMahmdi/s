<template>
  <footer class="py-5">
    <div class="Subscription d-flex justify-content-between align-items-center">
      <SectonsTitalVue class="tital">
        <template v-slot:h>
          STAY UPTO DATE ABOUT <br />
          OUR LATEST OFFERS
        </template>
      </SectonsTitalVue>
      <div class="act d-flex flex-direction-column">
        <input class="mb-2" placeholder="Enter Your address" type="text" />
        <input type="Button" value="Subscribe to Newsletter" />
      </div>
    </div>

    <div class="container">
      <div class="Social">
        <h4 class="brand noto-kufi-arabic-Boold mb-4">SHOP.CO</h4>
        <p>
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
        <ul class="Social-Media d-flex mt-3">
          <li><i class="fa-brands fa-facebook"></i></li>
          <li><i class="fa-brands fa-instagram mx-2"></i></li>
          <li><i class="fa-brands fa-github me-2"></i></li>
          <li><i class="fa-brands fa-twitter"></i></li>
        </ul>
      </div>
      <ul class="links">
        <li class="company">
          <h5 class="col-tital mb-3">company</h5>
          <ul class="list-links">
            <li class="mb-2">About</li>
            <li class="mb-2">Features</li>
            <li class="mb-2">Works</li>
            <li class="mb-2">Career</li>
          </ul>
        </li>
        <li class="company">
          <h5 class="col-tital mb-3">HELP MENU</h5>
          <ul class="list-links">
            <li class="mb-2">customrs support</li>
            <li class="mb-2">Delviery details</li>
            <li class="mb-2">trerms & conditions</li>
            <li class="mb-2">privacy policy</li>
          </ul>
        </li>
        <li class="help">
          <h5 class="col-tital mb-3">FAQ</h5>
          <ul class="list-links">
            <li class="mb-2">account</li>
            <li class="mb-2">manage delvierys</li>
            <li class="mb-2">orders</li>
            <li class="mb-2">payment</li>
          </ul>
        </li>
        <li class="FAQ">
          <h5 class="col-tital mb-3">Resources</h5>
          <ul class="list-links">
            <li class="mb-2">free eBooks</li>
            <li class="mb-2">development tutorial</li>
            <li class="mb-2">how to - blog</li>
            <li class="mb-2">YouTub playlist</li>
          </ul>
        </li>
      </ul>
      <hr class="my-5 w-100" />
      <p class="">© 2000-2021, All rights reserved</p>
    </div>
  </footer>
</template>
<script setup>
import SectonsTitalVue from "./SectonsTitalVue.vue";
</script>
<style lang="scss" scoped>
footer {
  background-color: $Secondary;
  position: relative;
  margin-top: 10.6rem;
  .Subscription {
    position: relative;
    background-color: $Primary;
    max-width: 77.5rem;
    min-width: 22.38rem;
    margin: 0 6.9%;
    padding: 2.25rem 4rem;
    transform: translateY(-153px);
    border-radius: 20px;
    .tital {
      * {
        color: white;
        text-align: left;
        font-size: 2.5rem;
      }
    }
    .act {
      flex-direction: column;
      flex-wrap: wrap;
      input {
        max-width: 21.81rem;
        min-width: 19.44rem;
        height: 3rem;
        border-radius: 3.88rem;
        padding: 0.75rem 1rem;
        border: none;
        background-color: white;
      }
    }
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    div.Social {
      width: 15.5rem;
      .brand {
        font-size: 2.06rem;
      }
      .Social-Media {
        i {
          font-size: 25px;
        }
      }
    }
    ul.links {
      flex-grow: 2;
      row-gap: 30px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(9.34rem, 9.94rem));
      justify-content: space-between;
    }
  }
}
@media (max-width: 768px) {
  footer {
    .Subscription {
      flex-wrap: wrap;
      flex-direction: column;

      .tital {
        margin-bottom: 20px;
        margin-right: 10px;
        * {
          font-size: 2rem !important;
        }
      }
      .act {
        width: 100%;
        input {
          min-width: 100% !important;
          max-width: 100% !important;
        }
      }
    }
    .container {
      flex-direction: column;
      div.Social {
        margin-bottom: 35px;
        width: 100%;
      }
    }
  }
}
</style>
