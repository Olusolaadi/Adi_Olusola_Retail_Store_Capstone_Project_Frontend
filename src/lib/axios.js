import axios from "axios";

const axiosFunction = axios.create({
	baseURL: import.meta.env.REST_API_URL || "/api",
	withCredentials: true,
});

export default axiosFunction;
