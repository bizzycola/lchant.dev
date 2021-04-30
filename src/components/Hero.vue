<template>
    <div class="hero">
        <div class="text-gray-100 text-center font-mono">
            <h1 class="xl:text-8xl md:text-7xl text-6xl text-gray-100 mt-15">Lachlan Chant</h1><br/>
            <p class="xl:text-lg md:text-lg text-lg">
                Experience in backend APIs and microservices,<br/>
                Discord and Twitch bots and devops services.<br/><br/>
                
            </p>
            <a href="#"><bx-bxs-down-arrow-circle class="text-5xl hero-down-arrow"/></a>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.hero {
    background: #121212;
    background: linear-gradient(159deg, rgba(2,0,36,1) 0%, rgba(36,11,28,1) 0%, rgba(14,13,13,1) 36%);
    position: relative;
    width: 100%;
    max-width: 100%;
    height: 100vh;
    min-height: 550px;
    display: flex;
    justify-content: center;
    text-shadow: 2px 2px 8px #000;
    margin-bottom: 55px;
    box-shadow: 0 5px 13px 0 rgba(0, 0, 0, 0.68);
}

.hero-down-arrow:hover {
    color: rgb(75, 73, 201)
}
</style>