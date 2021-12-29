import React, { useEffect, Component } from "react";
import axios from 'axios';
import RightSideMenu from "../../components/rightSidemenu";
import MiddleHeader from "../../widgets/middleHeaders";
import PayCard from "../../widgets/pay";
import LeftSideMenu from "../../components/leftSidemenu";
import LineChart from "../../widgets/line.chart";
import BarChart from "../../widgets/bar.chart";
import DoughnutChart from "../../widgets/doughnut.chart";

class Dashboard extends Component {
    // useEffect(() => {
    //     document.body.style.padding = "0";
    //     document.body.style.margin = "0";
    //     document.body.style.backgroundColor = "white"
    // }, []);
    // state = {};
    // componentDidMount() {


    //     axios.get('user').then(
    //         Response => {
    //             console.log(Response);
    //             this.setState({
    //                 user: Response.data
    //             })
    //         },
    //         err => {
    //             console.log(err);
    //         }
    //     )
    // }

    render() {

        // if (this.state.user) {
        //     <h2>Hi{this.state.user.firstName}{this.state.user.lastName}</h2>
        // }
        return (<div>
            {/* this Phone version */}

            <div className="row col-12 noM">
                <div className="col-sm-2 noM" id="left_side_admin">
                    {/* this Left side version for pc*/}
                    <LeftSideMenu whichOne="Overview" isPhone={false} />
                </div>
                <div className="col-sm noM" id="middle_side_admin">
                    {/* this Middle side version for all */}
                    {/* <MiddleSide  name="Overview"/> */}
                    <div id="middle_div_Admin">
                        {/* Middle Header */}
                        <MiddleHeader name="Overview" />
                        <div className="row col-12 noM">
                            <div className="col-sm-5 mBA MMBS">
                                {/* <PayCard className="mBA"/> */}
                            </div>
                            <div className="col-sm-12 noM MMBS" id="right_side_admin_dash">
                                <div className="row col-12 noM ">
                                    <div className="col-sm noM">
                                        <p id="left_side_pf_l_S">Exchange rates</p>
                                    </div>
                                    <div className="col-sm noM">
                                        <p id="right_side_pf_l_S"> Frw </p>
                                    </div>
                                </div>
                                <LineChart />
                            </div>
                        </div>
                        <div className="row col-12" id="margin_top">
                            <div className="col-sm m-12 MMBS" id="right_side_admin_dash">
                                <div className="row col-12 noM ">
                                    <div className="col-sm noM">
                                        <p id="left_side_pf_l_S">Last cost</p>
                                    </div>
                                    <div className="col-sm noM">
                                        <p id="right_side_pf_l_S"> Frw </p>
                                    </div>
                                </div>
                                <BarChart />
                            </div>
                            <div className="col-sm-4 MMBS" id="right_side_admin_dash">
                                <p id="left_side_pf_l_S">Efficiency</p>
                                <DoughnutChart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 noM" id="right_side_admin">
                    {/* this Right side version for pc*/}
                    <RightSideMenu />
                </div>
            </div>
        </div>
        )
    }
}
export default Dashboard;