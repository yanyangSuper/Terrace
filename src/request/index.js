import axios from 'axios'
import qs from 'qs'

axios.defaults.withCredentials = true

// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

axios.interceptors.request.use(function (config) {
    console.log(config)
    if (config.submitType && config.submitType == 'formData') {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    } else if (config.submitType && config.submitType === 'submitUpload') {//批量上传商品
        config.headers['Content-Type'] = 'multipart/form-data'
    } else if (config.submitType && config.submitType === 'blob') {//批量下载文件管理
        config.headers['Content-Type'] = 'application/json'
        config.responseType = 'blob'
    } else {
        config.headers['Content-Type'] = 'application/json'
    }

    let tokenName = localStorage.getItem('tokenName')
    let tokenValue = localStorage.getItem('tokenValue')
    // if (account !== 'admin') {
    config.headers['account'] = localStorage.getItem('account');
    // }
    config.headers[tokenName] = tokenValue;

    // if (store.getters.token) {
    //     config.headers['XR-accessToken'] = getToken()
    // }
    return config
})


axios.interceptors.response.use(response => {
    // 对于流文件类直接返回流
    if (response.headers['content-type'].indexOf('octet-stream') !== -1) {
        return response.data
    }
    if (response.headers['content-type'].indexOf('json') === -1) {
        return { success: false, msg: '登录状态失效，请清除Cookie重新登录！' }
    }
    const res = response.data;
    if (res.code == 200) {
        return response.data
    } else if (res.code == 3) {
        // store.dispatch('FedLogOut')
        //     .then(() => {
        //         router.replace('/login')
        //         location.reload()
        //     })
        //     .catch(err => {
        //         console.log('FedLogOut', err)
        //     })
    } else if (res.code != -2) {
        return Promise.reject(response.data);
    }
    // 关闭进度条
    return response.data
}, error => {
    if (error.response) {
        const status = error.response.status;
        let err_msg;
        switch (status) {
            case 400:
                err_msg = '请求错误(400)';
                break;
            case 401:
                err_msg = '未授权，请重新登录(401)';
                break;
            case 403:
                err_msg = '拒绝访问(403)';
                break;
            case 404:
                err_msg = '请求出错(404)';
                break;
            case 408:
                err_msg = '请求超时(408)';
                break;
            case 500:
                err_msg = '服务器错误(500)';
                break;
            case 501:
                err_msg = '服务未实现(501)';
                break;
            case 502:
                err_msg = '网络错误(502)';
                break;
            case 503:
                err_msg = '服务不可用(503)';
                break;
            case 504:
                err_msg = '网络超时(504)';
                break;
            case 505:
                err_msg = 'HTTP版本不受支持(505)';
                break;
            default:
                err_msg = `连接出错(${error.response.status})!`;
        }
        return Promise.reject({ success: false, msg: err_msg })
    }
    return Promise.reject({ success: false, msg: 'Sorry, 页面错误！' });
})

const Ajax = {
    ajax(url, params, opts) {
        if (!url.startsWith('http')) {
            url = process.env.ABS_PATH + url
        }
        let config = { url: url, method: 'post', responseType: 'json', timeout: 60000 }
        if (opts) {
            config = { ...config, ...opts }
        }
        if (config['method'] === 'post') {
            if (opts.submitType && opts.submitType == 'formData') {
                // config['data'] = qs.stringify(params)
            } else if (opts.submitType && opts.submitType == 'queryPost') {
                config['params'] = params
            } else if (opts.submitType && opts.submitType == 'submitUpload') {//批量上传商品
                config['data'] = params
            } else {
                config['data'] = params
            }
        } else {
            config['params'] = params
        }
        return axios(config)
    },
    get(url, params, opts) {
        if (opts) {
            opts = Object.assign(opts, { method: 'get' })
        } else {
            opts = { method: 'get' }
        }
        return this.ajax(url, params, opts)
    },
    post(url, params, opts) {
        if (opts) {
            opts = Object.assign(opts, { method: 'post' })
        } else {
            opts = { method: 'post' }
        }
        return this.ajax(url, params, opts)
    }
}
export default Ajax
