
import DefaultTheme from 'vitepress/theme'
import Starfield from './components/Starfield.vue'
import './custom.css'
import { h } from 'vue'

export default {
    ...DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'layout-bottom': () => h(Starfield)
        })
    }
}
