<template>
  <div class="signin">
    <div class="container">
      <img src="/images/logo_white.svg" width="250" alt="" class="lg mx-2">
      <p class="title">NERD Admin Panel</p>
      <form class="signin_form" @submit.prevent="handleSubmit">
        <input v-model="form.name" type="text" name="name" placeholder="Username" required />
        <input v-model="form.password" type="password" name="email" placeholder="Password" required />
        <div class="remember">
          <input v-model="form.remember" type="checkbox" id="remember" />
          <label for="remember">Remember me</label>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
definePageMeta({
  layout: true
})

export default {
  data: () => ({
    form: {
      name: "",
      password: "",
      remember: false,
    },
  }),
  methods: {
    handleSubmit: () => {}
  }
}
</script>
