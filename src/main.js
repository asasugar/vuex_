// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import VConsole from 'vconsole'
Vue.config.productionTip = false
/* eslint-disable no-new */

// 初始化vConsole
window.vConsole = new VConsole({
  defaultPlugins: ['system', 'network', 'element', 'storage'], // 可以在此设定要默认加载的面板
  maxLogNumber: 1000,
  onReady: function() {
    // console.log('vConsole is ready.');
  },
  onClearLog: function() {
    // console.log('on clearLog');
  }
});

console.info('欢迎使用 vConsole。vConsole 是一个由微信公众平台前端团队研发的 Web 前端开发者面板，可用于展示 console 日志，方便开发、调试。');
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
