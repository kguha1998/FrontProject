import { UserLogin } from "../../Service/userService"

export enum UserActionTypes{
    Login_Success_Action = '[USER] Login Success Action',
}
export const LoginAction=(payload:any)=>{
    return(dispatch:any, getState: any)=>{
        console.log("calling",payload)
        return UserLogin(payload).then(response=>{
            if(response.data){
                //success
                console.log("call",response)
                dispatch(LoginSuccess(response.data))
            }
        }).catch(error=>{
            //error
        });
    };
}
export const LoginSuccess= (payload:any)=>{
     return{
        type: UserActionTypes.Login_Success_Action,
        payload:payload 
     }
}