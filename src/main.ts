import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'layouts-generated'
import App from './App.vue'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import './styles/main.css'
import './styles/sw.scss'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { VueReCaptcha } from 'vue-recaptcha-v3'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
    ctx.app.use(VueSmoothScroll)
    ctx.app.use(VueReCaptcha, { siteKey: '6LcCmn0iAAAAAIiuaJ_Uvmkwmr0LzyIn2mEz-GQR' })
  },
)
