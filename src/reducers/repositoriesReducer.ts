export enum ActionType{
    SEARCH_REPOSITORY = 'search_repository',
    SEARCH_REPOSITORY_SUCESS = 'search_repository_sucess',
    SEARCH_REPOSITORY_ERROR = 'search_repository_error'
}

// contracts
interface RepositoryState{
    loading:boolean,
    error:string|null,
    data:string[]
}

interface SearchRepositoryAction{
    type:ActionType.SEARCH_REPOSITORY,
}

interface searchRepositorySucessAction{
    type: ActionType.SEARCH_REPOSITORY_SUCESS,
    payload:string[]
}

interface searchRepositoryErrorAction{
    type:ActionType.SEARCH_REPOSITORY_ERROR,
    payload:string
}

export type Action = SearchRepositoryAction
                |searchRepositorySucessAction
                |searchRepositoryErrorAction

const reducer = (state:RepositoryState, action: Action ):RepositoryState => {
 
    switch(action.type){
        case ActionType.SEARCH_REPOSITORY:
            return {loading:true,error:null,data:[]}
        case ActionType.SEARCH_REPOSITORY_SUCESS:
            return {loading:false,error:null,data:action.payload}
        case ActionType.SEARCH_REPOSITORY_ERROR:
            return {loading:false,error:action.payload,data:[]}
        default:
            return state
    }
}
export default reducer