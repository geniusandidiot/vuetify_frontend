import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import axios from 'axios'
import VueClipboard from 'vue-clipboard2'
import motion from './plugins/motion'
import * as echarts from 'echarts';
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import ECharts from 'vue-echarts'

Vue.component('v-chart', ECharts);

Vue.prototype.$echarts = echarts;

axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.console = window.console
// 使用剪切板
Vue.use(VueClipboard)
// 使用转场动画
Vue.directive('motion', motion)

new Vue({
	vuetify,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
