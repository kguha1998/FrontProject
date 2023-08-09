import axios from "axios";
import { BaseUrl, environment } from "../environment";


export const UserLogin =(data : any)=>{
    return axios.get(BaseUrl + environment.url.loginUrl,data)
};