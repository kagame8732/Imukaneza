import React from "react";
import {useHistory} from "react-router-dom"
const Navigation =(porps) =>{
    // navigation style file
    const history = useHistory()
    return (
       <div>
           <ul id="list_navigation" onClick={()=>history.push(porps.url)}>
               {
                   porps.theOne === porps.name ?
                   <>
                    <li className="active"><porps.icon /></li>
                    <li id="two" className="active">{porps.name}</li>
                   </>:
                   <>
                    <li><porps.icon/></li>
                    <li id="two">{porps.name}</li>
                   </>
               }
               
           </ul>
       </div>
    )
}
export default Navigation;