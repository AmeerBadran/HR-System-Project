import axios from "axios";
const baseURL = import.meta.env.VITE_HR_SYSTEM_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = 'get the token from its storage'

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   function (error) {
//     if (error.response) {
//       const status = error.response.status;

//       if (status === 401) {

//         alert("Session expired. Please log in again.");
//         window.location = "/login";

//         //last step now we should remove access token form its storage

//       }

//       if (status === 500) {
//         alert("A server error occurred. Please try again later.");

//         window.location = "/server-error";

//         // we should add server error page with image 500
//       }
//     } else if (error.request) {

//       alert("Network error. Please check your connection.");

//     } else {

//       alert("An unexpected error occurred.");
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;