import { useState } from "react";

interface ChildProps{
    color:string;
}

const users = [
    {name:"shivam",email:"shivam027"},
    {name:"sid",email:"sid015"}
]

export const Child = ({color}:ChildProps) => {
    const [name,setName] = useState("")
    const [guests,setGuests] = useState<string[]>([])
    const [foundUser,setFoundUser] = useState<{name:string,email:string}|undefined>()

    const addGuest = () => {
        setName('')
        setGuests([...guests,name])
    }

    const findUser = () => {
        const searchedUser = users.find((user)=>user.name === name)
        setFoundUser(searchedUser)
    }

    return (
        <div>
            <h3>Guest List</h3>
            <ul>
                {guests.map((guest)=> <li key={guest}>{guest}</li>)}
            </ul>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={addGuest}>Add Guest</button>

            <h3>Find User</h3>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={findUser}>Find User</button>
            {foundUser?foundUser.email:'user not found'}
        </div>
    )
}

