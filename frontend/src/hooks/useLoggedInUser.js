 import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
 const useLoggedInUser= ()=>{
    const [user] =useAuthState(auth);
     const email= user?.email;

     const [loggedInUser,setLoggedInUser]=useState({});
     const [error, setError] = useState(null);
     useEffect(()=>{
        fetch(`http://localhost:6001/loggedInUser?email=${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setLoggedInUser(data)
        })
        .catch(error => {
            console.error('Error fetching logged in user:', error);
            setError(error);
          });
     },[email])
     return[loggedInUser,setLoggedInUser,error]
 };
 export default useLoggedInUser;