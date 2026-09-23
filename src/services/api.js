import axios from "axios";

const api = axios.create({
 baseURL: "https://travelexplorer-backend-c3g8.onrender.com/"
});

export default api;