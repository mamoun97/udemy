import axios from "axios";

const url = "https://academy.risetest.site/api/v1";

export const ApiConfig = {
    rootUrl: url,
    rootImagesUrl: "",
    version: "1.0.0",
    awsUrl: "",
   
};
const http = () => {
    let a = axios.create({
        baseURL: ApiConfig.rootUrl,

        headers: {
            // cache: "no-cache",
            "Content-type": "application/json",
            // cache: "no-cache",
            "Authorization": "Bearer " + (localStorage.getItem("token") ?? "")
        }
    })

    a.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) {
                // store.dispatch(setLogout());
                // window.location.href = "/";
            }
            if (error.response.status === 403) {
                // window.location.href = "/auth/login";
            }
            if (
                (error.response.status === 400 || error.response.status === 422) &&
                error.response.data
            ) {
                error = error.response.data;
            }
            return Promise.reject(error);
        }
    )
    return a
}

const httpUpload = () => {
    let a = axios.create({
        baseURL: ApiConfig.rootUrl,
        headers: {
            cache: "no-cache",
            "Content-type": "multipart/form-data",
            "Authorization": "Bearer " +( localStorage.getItem("token") ?? "")
        }
    })
    a.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) {
                // store.dispatch(setLogout());
                window.location.href = "/";
            }
            if (error.response.status === 403) {
                window.location.href = "/access-denied";
            }
            if (
                (error.response.status === 400 || error.response.status === 422) &&
                error.response.data
            ) {
                error = error.response.data;
            }
            return Promise.reject(error);
        }
    )
    return a
}
const swrOptions = {

    dedupingInterval: 50,
    refreshWhenHidden: false,
    revalidateOnFocus: false,

}

export { http, httpUpload, swrOptions };

export default ApiConfig;