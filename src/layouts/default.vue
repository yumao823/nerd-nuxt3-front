<template>
  <div>
    <div class="nav">
      <div class="nav__logo">
        <a href="/">
          <Lottie :options="waterAnimation"
          />
        </a>
      </div>
      <div class="nav__separator"/>
      <div class="menu">
        <input id="menu__show-menu" type="checkbox">
        <label for="menu__show-menu">X</label>
        <ul>
          <li><a href="/">NERD's Picks</a></li>
          <li>
            <a href="/">Talent</a>
            <div class="menu__icon-dropdown">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" width="11px" height="16px" data-icon="angle-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#6e6e6e" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" class=""></path></svg>
            </div>
          </li>
          <li><a href="/about-nerd">About NERD</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

    </div>

    <slot />
  </div>
</template>

<script>
import animationData from 'assets/animations/nerd_logo_animation_vector_v7.json'

export default {
  data() {
    return {
      waterAnimation: {
        animationData: animationData,
        loop: true,
      }
    }
  }
}
</script>
