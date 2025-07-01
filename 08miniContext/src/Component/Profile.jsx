import React, {useContext} from "react";
import { useUser } from "../UserContext1";


function Profile() {
    const {user} = useUser()
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile