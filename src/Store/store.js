import { createContext } from 'react';
import { useState } from "react";

export const UserContext = createContext();

export default function UserProvider({children}){
    const cname = "IMDB_USER";

    const [user, setUser] = useState(GetUserFromCookie);

    const Login =(name) => {
        setUser(name);
        SetCookie(name);
    }
    const Logout = () => {
        setUser(null);
        document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    const SetCookie = (value, exp_days) =>{
        const d = new Date();
        d.setTime(d.getTime() + (exp_days * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + value + ";" + expires + ";path=/";
    }

    // when defining functions with function, like below, instead of like above you wont get issues with function declarations where they are used before they are defined errors,
    // hence why I would prefer the syntax like below, also it says function and doesn't have weird, basically a var that points to a anonymous function

    function GetUserFromCookie () {  // have to define function before it can be used, dumb javascript
        //console.log(document.cookie); // cookieData
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            console.log("name of user in cookie: " + name);
            console.log(c.substring(name.length, c.length))
            return c.substring(name.length, c.length);
          }
        }
        console.log("no user");
        return "";
    }

    return (
        <UserContext.Provider value={[user, Login, Logout]}>
            {children}
        </UserContext.Provider>
    );
}
