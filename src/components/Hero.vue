<template>
    <section class="text-gray-400 dark-bg body-font h-screen">
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <!--<img
                class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                alt="hero"
                src="https://dummyimage.com/720x600"
            />-->
            <img
                alt="team"
                class="lg:w-2/8 md:w-3/8 w-5/6 mb-10 object-cover object-center rounded-full heroimg"
                src="/prof.jpg"
                id="top"
            />
            <div class="text-center lg:w-2/3 w-full">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white" >Welcome!</h1>
                <p class="leading-relaxed mb-8">
                    I'm Lachlan, a 26 year old Full Stack Developer from Sydney, Australia.
                    <br />Primarily experienced in web, specializing in backend APIs and microservices, including freelance services.<br/>
                    <br/>C# & ASP.Net Core, JS, TS, NodeJS, VueJS.
                </p>
                <div class="flex justify-center">
                    <a href="#projects" v-smooth-scroll>
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

.heroimg {
    filter: opacity(.6);
}
</style>