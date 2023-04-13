interface AuthState{
    email:string,
    token:string,
    loading:boolean
}

const initialState:AuthState={
    email:"",
    token:"",
    loading:true
}

type Action = {type:"user_logged_in",payload:[]}

export const AuthReducer = (state:AuthState=initialState,action:Action) => {
    switch(action.type){
        case "user_logged_in":{
            return {...state,...action.payload,loading:false}
        }
        default:
            return state
    }
}