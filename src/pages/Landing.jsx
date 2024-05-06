import { useLocation } from "react-router-dom"
import Header from "../components/Header";
import Product from "../components/Product";
import Todo from "../components/Todo-container";
function Landing()
{
  var data=useLocation()
  return(
    <div className="head">
    <div className="head-1">
    <Header fname={data.state.user}/>
    <div>
     <Product/>
    </div>
    <div>
    <Todo></Todo>
    </div>
    </div>
 </div>
  )
}
export default Landing