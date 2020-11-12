import 'amfe-flexible';
import Vue from 'vue';
import App from './App';
import router from './router';
import Api from './api';

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(Api);
new Vue({
    router,
    el: '#app',
    render: h => h(App)
});

