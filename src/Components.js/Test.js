import { useContext, useState } from "react";
import { UserContext } from "../Store/store";

export default function Test(){

    const [user, Login, Logout] = useContext(UserContext);

    const [userName, setUserName] = useState("");

    async function SubmitForm(e){
        e.preventDefault();
        Login(userName);
    }

    return (
        <div>
            <p>hello {user} in Test</p>
            <form onSubmit={SubmitForm}>
                <input value={userName} autoFocus onChange={(e) => setUserName(e.target.value)} />
                <button type="submit" style={{margin: "5px"}}>Sign in</button>
            </form>
            <br></br>
            <button onClick={() => Logout()}>Reset</button>
        </div>
    );
}