import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login(props)
{
  var user=props.user

  var[ruser,setruser]=useState(true)
  var[fname,setfname]=useState("")
  var[pname,setpname]=useState("")
  var Navigate= useNavigate("")

  function handlef(evt)
  {
    setfname(evt.target.value)
  }
  function handlep(evt)
  {
    setpname(evt.target.value)
  }
  function handlelogin(evt)
  {
    evt.preventDefault()
    var userfound=false
    user.forEach(function(item)
  {
    if(item.username===fname && item.password===pname)
      {
          console.log("login succesfuk")
          userfound =true
          Navigate("/landing" ,{state:{user:fname}})

       
      }
      if(userfound===false)
        {
          console.log("login failed")
          setruser(false)
        }
      
  })
     
  }
return(
  <div className="login">
  <div className="login-1">
  <h1>HEY HII</h1>
   {ruser?<p>I HELP YOU MANAGE YOUR ACTIVITES AFTER YOU LOGIN :)</p> :<p style={{color:"red"}}>"PLEASE FIRST SIGN UP YOUR PAGE"</p>}
  <form>
   <input  placeholder="USERNAME" value={fname} onChange={handlef}></input> <br></br>
  <input placeholder="PASSWORD" value={pname} onChange={handlep}></input><br></br>
 <button onClick={handlelogin}>LOGIN</button>
  </form>
  <p>DON'T HAVE AN ACCOUNT? <Link to={'/sign'}>SIGN UP</Link>  </p>
 </div>
  </div>
 
)
}
export default Login