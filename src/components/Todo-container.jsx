import { useState } from "react"
function Todo()
{
  var[shoplist,setlist]=useState([{id:1,activity:"GO FOR A WALK"}])
  var [fname,setfname]=useState("")
  function fhandle(evt)
  {
    evt.preventDefault()
    setfname(evt.target.value)
  }
  function handleadd(evt)
  {
    evt.preventDefault()
    setlist([...shoplist,{id:shoplist.length+1,activity:fname}])
    setfname([])
  }
  function handleremove(removeid)
  {
     var temp=shoplist.filter(function(data)
    {
      if(removeid===data.id)
      {
        return false
      }
      else
      {
        return true
      }
    })
    setlist(temp)
  }
  return(
    <div className="todo">
        <div className="todo-1">
        <h1>MANAGE ACTIVITIES</h1>
        <form>
          <input value={fname} onChange={fhandle} placeholder="Next Activity?"></input>
         <button onClick={handleadd}>ADD</button>
        </form>
        </div>
        <div className="todo-2">
          <h1>TODAY ACTIVITY</h1>
          {shoplist.length===0?"YOU HAVE NOT ADDED ANYTHING":""}
            {shoplist.map(function(item,index)
            {
              return(
                <div style={{display:"flex",justifyContent:"space-between"}}>
              <p>{index+1.}{item.activity}</p>
              <button style={{height:"30px",color:"red"}} onClick={()=>{handleremove(item.id)}}>DELETE</button>
              </div>
              )

            })}
        </div>
      </div>
  )
}
export default Todo