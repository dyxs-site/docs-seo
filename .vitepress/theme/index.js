import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import { onMounted } from 'vue'
import '../styles/index.css' // 引入自定义 CSS 文件

export default {
  ...DefaultTheme,
  setup() {
    onMounted(() => {
      mediumZoom('.main img')
    })
  }
}
