import axios from "axios";

const interceptor = function (){
    axios.interceptors.request.use(request => {
        // Dans le local storage, ou le store
        const jwt = 'Mon super Token';
        request.headers ??= {};
        request.headers.Authorization = `Bearer ${jwt}`;
        return request;
    }, function (error) {
        return Promise.reject(error); // Arrête la promesse
    })
}
export default interceptor;