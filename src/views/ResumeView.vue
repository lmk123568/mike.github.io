<script setup>

</script>

<template>
  <div class="container mx-auto px-4 pt-6">
    <div class="flex">
      <div class="w-1/4 h-screen text-center fixed left-0 top-0 bottom-0"> <!-- 左侧栏容器 -->


        <div class="avatar py-10">
          <div class="w-32 rounded-full">
            <img src="../assets/avatar.jpg" />
          </div>
        </div>

        <p class="text-2xl font-bold py-2">Mike Liu</p>
        <p class="text-1xl py-1">中国科学院大学</p>
        <p class="text-1xl py-1">计算机技术</p>

        <p class="text-1xl pt-10">Local</p>
        <p class="text-1xl py-2">Email</p>
        <p class="text-1xl py-2">Github</p>
        <p class="text-1xl py-2">Google Scholar</p>

      </div>
      <div class="ml-64 flex-1 overflow-y-auto"> <!-- 右侧栏容器 -->

        <p class="text-2xl py-5">🤗 简介</p>
        <p class="text-1xl py-1">我硕士毕业于中国科学院大学的微电子所（京所），我的导师是王云教授。我目前在国资委所属央国企研发部门担任 AI 算法研究员，职级是高级工程师</p>
        <p class="text-1xl py-1">我的研究领域包括：</p>
        <ul class="list-disc pl-6 space-y-2 py-1">
          <li>Object Det、Seg、Track</li>
          <li>Large Language Model</li>
        </ul>


        <p class="text-2xl py-5">🎓 学历</p>
        <ul class="list-disc pl-6 space-y-2 py-1">
          <li>2019 - 2022，<img src="../assets/ucas_logo.png" width="18" class="inline-block" alt=""> 中国科学院大学 计算机技术 硕士</li>
          <li>2015 - 2019，<img src="../assets/xiyou_logo.jpg" width="18" class="inline-block" alt=""> 西安邮电大学 电子信息科学与技术 本科</li>
        </ul>


        <p class="text-2xl py-5">🔧 技能</p>
        <p class="text-1xl py-1">我对前端、后端和算法都略懂</p>

        <div class="collapse collapse-plus bg-gray-50 py-1 w-2/3">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div class="collapse-title text-1xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content text-1xl">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-gray-100 py-1 w-2/3">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div class="collapse-title text-1xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content text-1xl">
            <p>hello</p>
          </div>
        </div>
        <div class="collapse collapse-plus bg-gray-200 py-1 w-2/3">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div class="collapse-title text-1xl font-medium">
            Click to open this one and close others
          </div>
          <div class="collapse-content text-1xl">
            <p>hello</p>
          </div>
        </div>


        <p class="text-2xl py-5">📝 论文专利</p>

        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>