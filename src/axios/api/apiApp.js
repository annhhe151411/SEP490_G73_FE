import axios from "axios";

const instance = axios.create({
  // baseURL: "https://reqres.in",
  baseURL: "http://localhost:3500",
});

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // Check data nếu data không có gì thì response sẽ trả status về 204
    return response.data ? response.data : { statusCode: response.status };
  },
  function (error) {
    let res = {};
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      res.data = error.response.data;
      res.status = error.response.status;
      res.headers = error.response.headers;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return res;
    // return Promise.reject(error);
  }
);

export default instance;
