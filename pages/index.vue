<template>
  <div class="container">
    <div>
      <img class="mb-6" src="../assets/logo.png" alt="Nuxt Tailwind Storybook Starter">
      <h2 class="mb-4 text-xl">
        Nuxt Tailwind Storybook Starter is a starter template for adding Storybook to a Nuxt.js project that uses Tailwind.
      </h2>
      <div class="mb-4">
        <code class="inline-block px-6 py-4 mr-4 bg-gray-200 rounded shadow">
          <p><strong>Nuxt:</strong> npm run dev</p>
          <p><strong>Storybook:</strong> npm run storybook</p>
        </code>
      </div>
      <Btn href="http://localhost:2001" class="bg-nuxt-green">
        Go to Storybook
      </Btn>
    </div>
  </div>
</template>

<script>
import Btn from '~/components/atoms/Btn'

export default {
  components: {
    Btn
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
