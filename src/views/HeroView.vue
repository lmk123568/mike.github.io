<script setup>
import { RouterLink} from 'vue-router'
</script>

<template>
  <div class="hero min-h-screen bg-base-200" id="hero">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <div class="avatar pb-6">
          <div class="w-32 rounded-full">
            <img src="../assets/avatar.jpg" />
          </div>
        </div>
        <h1 class="text-4xl font-bold">Hello there 👋</h1>
        <p class="pt-6">我是 Mike，毕业于 <a href="https://www.ucas.ac.cn/">UCAS</a>，我是一名听障人士🦻🏼</p>
        <p class="pb-6">得益于编程👨‍💻，我能巧妙避免听力劣势从而实现自我价值</p>
        <RouterLink to="/resume" class="btn btn-primary">认识一下我</RouterLink>
      </div>
    </div>
  </div>

</template>

<style scoped>
#hero {
  background: linear-gradient(-45deg, #D8DEE9, #E5E9F0, #ECEFF4);
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
  height: 100vh;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}


</style>