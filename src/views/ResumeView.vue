<script setup>
</script>

<template>
  <div class="dynamic-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-3 vh-100 d-flex flex-column align-items-center">

          <img alt="头像" class="rounded-circle mt-5 mb-3" src="../assets/avatar.jpg" width="128"/>

          <p class="fs-4 fw-bold my-2">Mike Liu</p>
          <p class="fs-6 my-1">中国科学院大学</p>
          <p class="fs-6 my1">计算机技术</p>

          <p class="bi bi-geo-alt-fill mt-5 my-2"> 陕西 西安</p>
          <p class="bi bi-envelope-fill my-2"> lmk123568@qq.com</p>
          <p class="bi bi-github my-2"> Github</p>
          <p class="bi bi-mortarboard-fill my-2"> Google Scholar</p>


        </div>
        <div class="col-md-9">
          <p class="fs-4 fw-bold mt-5">🤗 简介</p>
          <p class="fs-6">我硕士毕业于中国科学院大学的微电子所（京所），师从王云教授。我目前在国资委所属央国企研发部门担任
            AI 算法研究员，职级是高级工程师。</p>
          <p class="fs-6">我的研究领域包括：</p>
          <ul>
            <li>Object Det、Seg、Track</li>
            <li class="mt-1">Large Language Model</li>
          </ul>

          <p class="fs-4 fw-bold">🎓 学历</p>
          <ul>
            <li>2019 - 2022,<img class="mx-2" src="../assets/ucas_logo.png" width="18px">中国科学院大学 - 计算机技术 -
              硕士
            </li>
            <li class="mt-1">2015 - 2019,<img class="mx-2" src="../assets/xiyou_logo.jpg" width="18px">西安邮电大学 -
              电子信息科学与技术 - 本科
            </li>
          </ul>

          <p class="fs-4 fw-bold">📝 论文专利</p>


        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.dynamic-bg {
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