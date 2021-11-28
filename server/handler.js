var axios = require("axios")

const service = axios.create({
    baseURL: "https://zccyucheng.zendesk.com/api/v2",
    timeout: 50 * 1000
})

service.interceptors.request.use(config => {
    // token
    // IMPORTANT: Please make sure use your token here
    // format: <email>/token:<token>
    var token = "";

    config.headers['Authorization'] = "Basic " + Buffer.from(token).toString('base64');
    return config
}, error => {
    console.log("error")
})

service.interceptors.response.use(response => {
    return response.data
})

module.exports = {
    service,
}