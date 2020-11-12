const index = () => import('@/views/home/index.vue');
import homeIndex from '@/views/home/home-index.vue';
export default [
	{
		path: '/home',
		name: 'home',
		component: index,
		meta: {
			title: '首页'
		},
		redirect: '/home/index',
		children: [
			{
				path: '/home/index',
				name: 'home.index',
				component: homeIndex,
				meta: {
					title: '系统首页'
				}
			}
		]
	}
];
