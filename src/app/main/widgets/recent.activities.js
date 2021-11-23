import React from "react";

const RecentActivities =(porps) =>{
    return (
        <>
            <div className="row col-12">
                <div className="col-sm">
                    <div id="circ_div" style={{backgroundColor:`${porps.iconsBackground}`}}>
                        <porps.icons id="maginA" style={{color:`${porps.iconsColor}`}}/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <p id="recentActivitiesdivName">{porps.name}</p>
                    <p id="recentActivitiesdivStyle">{porps.status}</p>
                </div>
                <div className="col-sm">
                <p id="recentActivitiesdivMoney">{`${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(porps.number)}`} Fr 
                </p>
                </div>
            </div> 
        </>
    )
}
export default RecentActivities;