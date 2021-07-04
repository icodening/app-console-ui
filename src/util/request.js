import axios from "axios";

axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
const axiosInstance = axios.create({
  timeout: 5000
});
axiosInstance.interceptors.request.use(request => {
  return request;
}, error => {
  console.log(error)
})
axiosInstance.interceptors.response.use(response => {
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default axiosInstance;
