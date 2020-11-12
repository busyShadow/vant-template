export default {
    // url: process.env.VUE_APP_API_URL,
    url: 'http://192.168.0.145:8082',//本地服务器
    storageOptions: {
        namespaces: 'prvot_',
        name: 'ls',
        storage: 'session'
    },
    router: {
        whiteList: ['login','download-browser'],
        defaultRouter: '/'
    }
};
