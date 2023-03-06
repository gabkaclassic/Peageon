import axiosInstance from "@/api/axiosInstance";
import auth from "@/api/auth";

export default {
    auth: auth(axiosInstance)
}