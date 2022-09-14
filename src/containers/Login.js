import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useStore1 from "../store"
import { useUserData } from "../store/slice/globalStates"


export const Login = () =>{
  const[id,setId] = useState("")
  const setUserId = useStore1(state=>state.setUserId)
  const navigate = useNavigate()
  return(
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"2rem"}}>
    <h2>Please Login to Continue</h2>
    <div>
    <input type="text" placeholder="UserName"/>
    </div>
    <div>
    <input type="text" placeholder="UserId" onChange={(e)=>setId(e.target.value)}/>
    </div>
    <button disabled={id === ""} onClick={()=>{
      setUserId(id)
      navigate("/chat")}}>Continue</button>
    </div>
    
  )
}
