import { Component, ReactNode } from "react";

interface User{
    name:string,
    email:string
}

interface UserProps{
    users:User[]
}

interface UserSearchState{
    name:string,
    foundUser:User | undefined
}

class UserSearch extends Component<UserProps>{

    state:UserSearchState = {
        name:'',
        foundUser:undefined
    }

    findUser = ()=>{
        const searchedUser= this.props.users.find((user)=>user.name === this.state.name)
        this.setState({foundUser:searchedUser})
    }

    render(): ReactNode {

        const {name,foundUser} = this.state

        return (
            <>
            <h3>Find User</h3>
            <input type="text" value={name} onChange={(e)=>this.setState(({name:e.target.value}))}/>
            <button onClick={this.findUser}>Find User</button>
            {foundUser?foundUser.email:'user not found'}
            </>
        )
    }

}

export default UserSearch