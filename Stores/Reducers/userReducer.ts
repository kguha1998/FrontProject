import { UserMain } from "../../Models/User";
import InitialState from "./initialState";




const initialState : UserMain = InitialState.user
export default function UserReducer(
    state: UserMain = initialState,
    action : any,
){
    switch(action.type){
        default :
        return state;
    }

}