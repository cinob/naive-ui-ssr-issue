import viteSSR from 'vite-ssr'
import routes from 'virtual:generated-pages'
import { createHead } from '@vueuse/head'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

export default viteSSR(App, {
  routes,
}, ({ app }) => {
  const head = createHead()
  app.use(head)

  return { head }
})
