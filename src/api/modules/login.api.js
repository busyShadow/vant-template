import Vue from 'vue';
export default {
    login(data) {//默认是JSON传参给后端，Vue.httpFormConfig是以form形式传给后端
        return Vue.http.post('/userlogin', data);
        // return Vue.http.post('/userlogin', data, Vue.httpFormConfig);
    }
};
