<template>
  <section class="text-gray-400 dark-bg body-font relative min-h-screen">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1
          id="contact"
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white"
        >
          Contact Me
        </h1>
        <p
          class="lg:w-2/3 mx-auto leading-relaxed text-base"
        >
          Send me a message for further information or for freelance services.
        </p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="name" class="leading-7 text-sm text-gray-400">Name</label>
              <input
                id="name"
                v-model="contactForm.name"
                type="text"
                name="name"
                class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-1/2">
            <div class="relative">
              <label for="email" class="leading-7 text-sm text-gray-400">Email</label>
              <input
                id="email"
                v-model="contactForm.email"
                type="email"
                name="email"
                class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div class="p-2 w-full">
            <div class="relative">
              <label for="message" class="leading-7 text-sm text-gray-400">Message</label>
              <textarea
                id="message"
                v-model="contactForm.msg"
                name="message"
                class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                :maxlength="500"
              ></textarea>
            </div>
          </div>
          <div class="p-2 w-full">
            <button
              v-if="!loading"
              class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              :disabled="contactForm.valid"
              @click="sendContact"
            >
              Send
            </button>
            <Spinner v-else class="flex mx-auto" />
          </div>
          <div class="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
            <span class="inline-flex">
              <a
                class="text-gray-500 hover:text-gray-300"
                href="https://soundcloud.com/bizzycola"
                target="_blank"
              >
                <bx-bxl-soundcloud />
              </a>
              <!--<a
                class="ml-4 text-gray-500 hover:text-gray-300"
                href="https://twitter.com/bizzycola3"
                target="_blank"
              >
                <bi-twitter />
              </a>-->
              <a
                class="ml-4 text-gray-500 hover:text-gray-300"
                href="https://github.com/bizzycola"
                target="_blank"
              >
                <bi-github />
              </a>
              <a
                class="ml-4 text-gray-500 hover:text-gray-300"
                href="https://www.linkedin.com/in/lachlan-chant-737671112/"
                target="_blank"
              >
                <bi-linkedin />
              </a>
            </span>

            <p class="leading-normal my-5">
              &copy; Lachlan Chant, 2022
            </p>

            <div class="flex justify-center">
              <a v-smooth-scroll href="#top">
                <bx-bxs-up-arrow-circle class="text-5xl hero-down-arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAxios } from '@vueuse/integrations'
import { ref, watch, computed, reactive } from 'vue'
import Swal from 'sweetalert2'
import { useReCaptcha, IReCaptchaComposition } from 'vue-recaptcha-v3'

const loading = ref(false)
const disableBtn = ref(false)

const contactForm = reactive({
  name: '',
  email: '',
  msg: '',

  valid: computed(() => {
    const nameInvalid = contactForm.name.length < 2 || contactForm.name.length > 30
    const emailInvalid = contactForm.email.length < 3
    const msgInvalid = contactForm.msg.length < 5 || contactForm.msg.length > 500

    if (disableBtn.value || nameInvalid || emailInvalid || msgInvalid) return true

    return false
  }),
})

const { executeRecaptcha, recaptchaLoaded } = useReCaptcha() as IReCaptchaComposition

const sendContact = async() => {
  loading.value = true

  try {
    await recaptchaLoaded()
    const token = await executeRecaptcha('login')

    const { data, error, isFinished } = useAxios(
      'https://formspree.io/f/xdojdbyr',
      {
        method: 'POST',
        data: {
          'name': contactForm.name,
          'email': contactForm.email,
          'message': contactForm.msg,
          'g-recaptcha-response': token,
        },
        headers: {
          Accept: 'application/json',
        },
      },
    )

    watch(isFinished, (val, prevVal) => {
      loading.value = false

      if (data.value) {
        if (!data.value.errors) {
          Swal.fire({
            icon: 'success',
            title: 'Your message has been sent!\nI\'ll try and respond to it as soon as possible!',
          })
        }
        else {
          Swal.fire({
            title: 'Oops!',
            html: `Failed to send the form:<br/><strong>${data.value.errors?.map((error: { message: any }) => error.message).join(', ')}</strong>`,
            icon: 'error',
          })
        }
      }
      else {
        let errData = ''

        for (const [_, val] of Object.entries(error.value?.response?.data.errors))
          errData += `<br/>${val}`

        Swal.fire({
          title: 'Oops!',
          html: `Failed to send the form: <strong>${errData}</strong>`,
          icon: 'error',
        })
      }
    })
  }
  catch (e) {
    loading.value = false
    Swal.fire({
      title: 'Oops!',
      html: `Failed to send the form: <strong>${e}</strong>`,
      icon: 'error',
    })
  }
}

</script>

<style scoped>
.hero-down-arrow:hover {
    color: rgb(75, 73, 201);
}
</style>
