import axios from 'axios';
import api from './modules';
import router from '../router';
import config from '../config';
import qs from 'qs';

axios.defaults.baseURL = config.url;
axios.defaults.timeout = 30000;
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.transformRequest = [function (data) {
    return qs.stringify(data);
}];

//请求前拦截(请求还没有发出去)
axios.interceptors.request.use(config => {
    let authorization = false; // TODO 获取本地token
    if (authorization) {
        config.headers['Authorization'] = authorization;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

//请求返回结果拦截
axios.interceptors.response.use(result => {
    if (result.data.status === 3 ) {// TODO 判断是否需要跳转到登录
        router.push({
            name: 'login'
        });
    }
    return result.data;
}, error => {
    return Promise.reject(error);
});

const install = (Vue) => {
    if (install.installed) {
        return;
    }
    Vue.api = api;
    Vue.http = axios;
    Vue.httpJsonConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        transformRequest: [function (data) {
            return JSON.stringify(data);
        }]
    };
    Vue.httpFormConfig = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        transformRequest: [function (data) {
            return data;
        }]
    };
    Object.defineProperties(Vue.prototype, {
        $api: {
            get() {
                return Vue.api;
            }
        }
    });
};

export default {
    install
};
