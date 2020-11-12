import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let list = [];
//循环获取路由配置文件
let files = require.context('./modules/',true, /\.js$/);
files.keys().forEach(key => {
    list.push(...files(key).default);
});

const routes = [
	{
		path:'*',
		redirect: '/home',
	},
	...list
];

const router = new VueRouter({
    scrollBehavior: () => ({
        y: 0
    }),
    routes
});

router.beforeEach((to, from, next) => {
   next();
});
export default router;
