import React from "react";
import Payimg from "../../../assets/img/payImg.PNG"
const PayCard =(porps) =>{
    return (
      <div>
          <div className="row col-12" id="pay_card">
                <div className="col-6 noM">
                    <img src={Payimg}  alt="" id="payImg"/>
                </div>
                <div className="col-6 noM" id="sas">
                    <p  id="paywords_style">Pay</p>
                </div>
                <p id="code_card">**** **** **** **** 5601</p>
                <div className="row col-12" id="valid_card">
                    <div className="col noM">
                        <p id="up"className="noM">Valid THRU</p>
                        <p id="down"className="noM">05/21</p>
                    </div>
                    <div className="col noM">
                        <p id="up" className="noM">Card Holder</p>
                        <p id="down" className="noM">05/21</p>
                    </div>
                </div>
          </div>
     
      </div>
    )
}
export default PayCard;