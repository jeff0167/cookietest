import { useContext } from 'react';
import { UserContext } from "../Store/store";

export default function NavBar(){
    const [user] = useContext(UserContext);
    
    return (
        <div>
            <p>Hello {user} from navbar</p>
        </div>
    );
 }