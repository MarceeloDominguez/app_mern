import axios from "axios";

const baseURL = "http://192.168.1.42:3000";

const postApi = axios.create({ baseURL });

export default postApi;
