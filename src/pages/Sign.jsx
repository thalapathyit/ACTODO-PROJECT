import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Sign(props)
{
  var user=props.user
  var setlogin=props.setlogin
  var navigate=useNavigate("")
  var[fname,setfname]=useState("")
  var[pname,setpname]=useState("")

  function handle1(evt)
  {
    setfname(evt.target.value)
  }
  function handle2(evt)
  {
    setpname(evt.target.value)
  }
  function handlesign(evt)
  {
    evt.preventDefault()
    setlogin([...user,{username:fname,password:pname}])
    navigate("/")
  }
return(
  <div className="login">
  <div className="login-1">
  <h1>HEY HII</h1>
  <p>I HELP YOU MANAGE YOUR ACTIVITES AFTER YOU LOGIN :)</p>
  <form>
   <input  placeholder="USERNAME" value={fname} onChange={handle1}></input>
   <br></br>
  <input placeholder="PASSWORD" value={pname} onChange={handle2}></input>
  <br></br>
  <input placeholder="CONFIRM PASSWORD"></input>
  <br></br>
 <button style={{backgroundColor:"red",color:"black",border:"none"}} onClick={handlesign} >SIGN UP</button>
  </form>
  <p>ALREADY HAVE AN ACCOUNT? <Link to={'/'}>LOGIN</Link></p>
 </div>
  </div> 
 
)
}
export default Sign