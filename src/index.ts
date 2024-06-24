import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { MdEditor, MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
import 'md-editor-v3/lib/style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'highlight.js/styles/github.css'

import './el-forward.scss'
import { BlogApp } from '@blog/home'
import router from './router'

import 'virtual:uno.css'

createApp(BlogApp)
  .use(ElementPlus)
  .use(router)
  .component('MdEditor', MdEditor)
  .component('MdPreview', MdPreview)
  .mount('#app')
