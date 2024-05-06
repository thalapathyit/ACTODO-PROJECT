import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Landing from "./pages/Landing";
import { useState } from "react";
function App()
{
  var[user,setlogin]=useState(
    [
      { 
        username:"fazil",
        password:"123"
      },
     
    ]
  )
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login user={user} setlogin={setlogin} />}></Route>
      <Route path='/sign' element={<Sign user={user} setlogin={setlogin} />}></Route>
      <Route path='/landing' element={<Landing/>}></Route>
    </Routes>
    </BrowserRouter>
      </>
  )
}

export default App;
