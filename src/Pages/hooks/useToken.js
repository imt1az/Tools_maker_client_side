import axios from "axios";
import { useEffect, useState } from "react"


const useToken = user =>{
    const [token,setToken] = useState('');
    useEffect(()=>{
      const email = user?.user?.email;
      const currentUser = {email:email}
      if(email){
          axios.put(`https://stormy-brook-85190.herokuapp.com/user/${email}`,currentUser)
          .then(response =>{
              const {data} = response;
              console.log("User Data",data);
           
              const accessToken = data.token;
              localStorage.setItem('accessToken',accessToken)
              setToken(accessToken);
          })
      }
    },[user])
    return [token]
}
export default useToken;

