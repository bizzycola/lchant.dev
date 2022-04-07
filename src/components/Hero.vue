<template>
  <section id="top" class="text-gray-400 dark-bg body-font min-h-screen shadow-lg flex items-center justify-center flex-row">
    <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <!--<img
                class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600"
            />-->

      <!--<img
        alt="team"
        class=" heroimg imgfg lg:w-2/8 md:w-3/8 w-5/6 mb-10 object-cover object-center rounded-full filter-mayfair"
        src="/prof.png"
      />-->

      <div class="text-center lg:w-2/3 w-full ">
        <h1 class="title-font sm:text-6xl text-4xl mb-4 font-medium text-white tshadow">
          Welcome!
        </h1>
        <p class="leading-relaxed mb-8 text-gray-100 text-2xl tshadow">
          I'm Lachlan, a 27 year old Full Stack Developer from Sydney, Australia.
          <br />Primarily experienced in web, specializing in backend APIs and microservices, including freelance services.<br />
          <br />C# & ASP.Net Core, JS, TS, NodeJS, VueJS.
        </p>
        <div class="flex justify-center">
          <a v-smooth-scroll href="#projects">
            <bx-bxs-down-arrow-circle class="text-5xl hero-down-arrow" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
.hero-down-arrow:hover {
    color: rgb(75, 73, 201);
}

.imgfg {
  background-color: rgba(26, 19, 20, 0.034);
}

.tshadow {
    text-shadow: 2px 2px 2px #000;
}

#top {
    background-color: #160A1E;
  background-image: linear-gradient(
    to bottom, transparent, #160A1E
  ), url(https://wallpaperaccess.com/full/1722876.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>
