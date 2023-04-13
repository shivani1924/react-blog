import axios from "axios";
import { Action } from "./repositoriesReducer";
import { ActionType } from "./repositoriesReducer";

const searchRepo = (term:string) => {
    return async (dispatch:any) => {
        dispatch({type:ActionType.SEARCH_REPOSITORY});

        try{

        }
        catch(err){
            if(err instanceof Error){
                dispatch({
                    type:ActionType.SEARCH_REPOSITORY_ERROR,
                    payload:err.message
                })
            }
        }
    }
}