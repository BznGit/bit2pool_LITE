import { createApp } from 'vue'
import App from './App.vue'
import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'
stockInit(Highcharts)
createApp(App).use(HighchartsVue).mount('#app')
