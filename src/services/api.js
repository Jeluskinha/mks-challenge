import axios from "axios"

const api = axios.create({
    baseURL:"https://mks-challenge-api-frontend.herokuapp.com/api/v1",
    timeout:5000,
})

export default api