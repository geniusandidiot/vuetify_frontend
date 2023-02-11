import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import axios from 'axios'
import VueClipboard from 'vue-clipboard2'
import motion from './plugins/motion'
// 导入echarts
//import ECharts from 'vue-echarts';
// echarts-gl中包含所有图标需要的依赖模块
//import 'echarts-gl';

axios.defaults.withCredentials = true

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
