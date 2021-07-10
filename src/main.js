// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh-CN',
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
    'zh-CN': require('./lang/zh'),   // 中文语言包
  }
})

const requireComponents = require.context('./views', true, /\.vue/);
requireComponents.keys().forEach(fileName => {
  const reqCom = requireComponents(fileName);
  Vue.component(reqCom.default.name, reqCom.default || reqCom)
})

Vue.filter('dateFormat', function (originDate) {
  const dt = new Date(originDate)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}.${m}.${d} ${hh}:${mm}:${ss}`
})

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  components: {App},
  template: '<App/>'
})
