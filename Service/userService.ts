import axios from "axios"
import { BaseUrl, environment } from "../Environment";

export const UserLogin =(data : any)=>{
    return axios.get(BaseUrl + environment.url.loginUrl,data)
};