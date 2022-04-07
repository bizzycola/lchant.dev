<template>
  <section id="projects" class="text-gray-400 body-font dark-bg min-h-screen">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
          Projects
        </h1>
        <p
          class="lg:w-1/2 w-full leading-relaxed text-opacity-80"
        >
          Here is a list containing some the of past and present<br />projects I've been involved with.
        </p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>

      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4"
            >
              <img src="/logos/deployrlogo.png" />
            </div>
            <h2 class="text-lg text-white font-medium title-font mb-2">
              <a href="https://deployrdocs.black-kro.dev" target="_blank">Deployr</a>
            </h2>
            <p
              class="leading-relaxed text-base"
            >
              Self-Hosted Backend Docker deployment tool with a similar workflow to Netlify, integrates with Github and contains an integrated custom reverse proxy.
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4"
            >
              <carbon-cafe />
            </div>
            <h2 class="text-lg text-white font-medium title-font mb-2">
              <a href="https://codebyte.cafe" target="_blank">CodeByte</a>
            </h2>
            <p
              class="leading-relaxed text-base"
            >
              Social Media site for people in IT and STEM fields, themed like a cafe hangout place. Currently invite only, contact me for further information.
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4"
            >
              <mdi-midi />
            </div>
            <h2 class="text-lg text-white font-medium title-font mb-2">
              <a
                href="https://github.com/bizzycola/MidiGameBoi"
                target="_blank"
              >MidiGameBoi</a>
            </h2>
            <p
              class="leading-relaxed text-base"
            >
              Simple, configurable .NET program to convert MIDI notes from devices(midi keyboards, etc) to keyboard/mouse events.
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4"
            >
              <carbon-task />
            </div>
            <h2 class="text-lg text-white font-medium title-font mb-2">
              TaskRunner
            </h2>
            <p
              class="leading-relaxed text-base"
            >
              Precursor to Deployr, ran commands based on shell scripts as opposed to docker.
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4"
            >
              <bx-bx-bot />
            </div>
            <h2 class="text-lg text-white font-medium title-font mb-2">
              Discord & Twitch
            </h2>
            <p
              class="leading-relaxed text-base"
            >
              I've built a variety of Discord and Twitch chat bots for communities. Freelance services available.
            </p>
          </div>
        </div>
        <div class="xl:w-1/3 md:w-1/2 p-4">
          <div class="border border-gray-700 border-opacity-75 p-6 rounded-lg">
            <div
              class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4"
            >
              <ant-design-project-outlined />
            </div>
            <h2 class="text-lg text-white font-medium title-font mb-2">
              Web Services
            </h2>
            <p
              class="leading-relaxed text-base"
            >
              I've built freelance web projects for clients not listed here, but freelance services are available.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div class="flex justify-center">
        <a v-smooth-scroll href="#contact">
          <bx-bxs-down-arrow-circle class="text-5xl hero-down-arrow" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-down-arrow:hover {
    color: rgb(75, 73, 201);
}
</style>
