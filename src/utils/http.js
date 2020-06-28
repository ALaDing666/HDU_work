import Axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const http = Axios.create({
    baseURL: "http://94.191.90.221:8100/mock/46/api",
    withCredentials: true
});

http.interceptors.request.use(
    config => {
        // 加载进度条
        NProgress.start();
        return config;
    },
    err => {
        return err;
    }
)

http.interceptors.response.use(
    config => {
        // 结束加载进度条
        NProgress.done();
        return config;
    },
    err => {
        NProgress.done();
        return err;
    }
)

export default http;