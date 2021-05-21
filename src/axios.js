import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-3fa6d-default-rtdb.firebaseio.com";

export default instance; 