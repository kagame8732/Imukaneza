import React from "react";
const Navigation =(porps) =>{
    return (
       <div>
           <ul id="list_navigation">
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