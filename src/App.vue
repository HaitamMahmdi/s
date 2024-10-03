<template>
  <nav class="navbar navbar-expand-lg bg-white">
    <div class="container">
      <div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="navbar-toggler-icon fa-solid fa-bars"></i>
        </button>

        <RouterLink
          to="/"
          class="navbar-brand p-0 m-0 fs-1 noto-kufi-arabic-Boold"
          >SHOP.CO
        </RouterLink>
      </div>
      <ul class="navbar-nav nav-links mx-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Shope
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <RouterLink to="" class="dropdown-item">On Sale</RouterLink>
            <li><a class="dropdown-item" href="#">New Arrivals</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Brands</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">On Sale</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">New Arrivals</a>
        </li>
        <li>
          <a class="nav-link" href="#">Brands</a>
        </li>
      </ul>
      <div class="d-flex justify-content-center align-items-center">
        <form ref="serchForm" class="">
          <i class="fa-solid fa-magnifying-glass Search-icon"></i>
          <input
            class="form-control w me-2"
            type="search"
            placeholder="Search for products..."
            aria-label="Search"
          />
        </form>
        <div class="userActions">
          <ul class="d-flex">
            <li ref="serch_ico" class="Search mx-1">
              <a href="#">
                <i class="fa-solid fa-magnifying-glass Search-icon h4 mb-0"></i>
              </a>
            </li>
            <li class="mx-1">
              <i class="fa-solid fa-cart-shopping h4 h4 mb-0"></i>
            </li>
            <li class="mx-1">
              <a href="#">
                <i class="bi bi-person-circle mb-0 h4"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shope
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item">On Sale</a>
              </li>
              <li><a class="dropdown-item" href="#">New Arrivals</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Brands</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">On Sale</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">New Arrivals</a>
          </li>
          <li>
            <a class="nav-link" href="#">Brands</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</template>
<script setup>
import { onMounted, ref } from "vue";
const serchForm = ref(null);
const serch_ico = ref(null);
const showForm = () => {
  let cont = 0;
  serch_ico.value.addEventListener("click", () => {
    if (cont === 0) {
      serchForm.value.style.display = `flex`;
      cont++;
    } else {
      serchForm.value.style.display = `none`;
      cont = 0;
    }
  });
};
onMounted(() => {
  showForm();
  const htmlTag = document.querySelector(`html`);
  window.addEventListener("resize", () => {
    if (window.screen.width < 1220) {
      htmlTag.style.fontSize = "13px";
    } else {
      htmlTag.style.fontSize = "16px";
    }
  });
});
//onMounted(() => {});
</script>
<style lang="scss" scoped>
nav {
  div.container {
    width: 77.5rem;
    margin: auto;
    height: 3rem;
    .navbar-collapse {
      background-color: white;
      a {
        padding: 10px 15px;
        font-size: 1.3rem;
      }
    }
  }
  padding: 1rem 1rem;
  * {
    color: black;
  }
  a {
    font-size: 1rem;
  }
  .navbar-toggler {
    &:focus {
      box-shadow: none;
    }
    .navbar-toggler-icon {
      font-size: 1.56rem;
    }
  }

  form {
    position: relative;
    display: flex;
    .Search-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 15px;
    }
    [type="search"] {
      width: 35.06rem;
      height: 3rem;
      border-radius: 62px;
      padding: 0.75rem 2.5rem;
      background-color: $Secondary;
      border: none;
      &:focus {
        box-shadow: none;
      }
    }
  }
  .userActions {
    .Search {
      display: none;
    }
  }
}
@media (max-width: 991.98px) {
  nav {
    .nav-links {
      display: none;
    }
    form {
      display: none;
    }
    .userActions {
      .Search {
        display: block;
      }
    }
  }
}
@media (min-width: 991.98px) {
  nav {
    .collapse {
      display: none !important;
      background-color: rgb(255, 255, 255);
    }
  }
}
</style>
