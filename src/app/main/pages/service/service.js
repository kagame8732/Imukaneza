import React, { useEffect, Component } from "react";
import LeftSideMenu from "../../components/leftSidemenu";
import RightSideMenu from "../../components/rightSidemenu";
import MiddleHeader from "../../widgets/middleHeaders";
import { LocalShippingRounded, ArrowDropDownCircleRounded, CardGiftcardRounded } from '@material-ui/icons';
import { useHistory } from 'react-router-dom'
import RideService from '../service/ride/ride.service'
import truck from '../../../../assets/img/truck.gif'
import packaging from '../../../../assets/img/packaging.jpg'


export default class Service extends Component {
    state = {
        ride: false,
        packaging: false,
        departure: '',
        destination: ''

    }

    handleService = e => {
        e.preventDefault();
        console.log(this);
        const { ride, packaging, departure, destination
        } = this.state;



        RideService.createRide(
            ride,
            packaging,
            departure,
            destination
        ).then(
            response => {
                // console.log(response);
                alert('Done')
            },
            error => {
                alert("Failed")
                // console.log(error);
            }
        );
    }

    render() {
        console.log(this.state);
        return (
            <form onSubmit={this.handleService}>
                <div>
                    <div className="row col-12 noM">
                        <div className="col-sm-2 noM" id="left_side_admin">
                            {/* this Left side version for pc*/}
                            <LeftSideMenu whichOne="Service" isPhone={false} />
                        </div>
                        <div className="col-sm noM" id="middle_side_admin">
                            {/* this Middle side version for all */}
                            <div id="middle_div_Admin">
                                <MiddleHeader name="Service" />
                                <h1 id="service_small_header" >Services We Offers
                                </h1>
                                <div className="row col-12" id="service_cards">
                                    <div className="col-sm" id="ride_side_whole">

                                        <h2>Ride</h2>
                                        <label
                                            for="myCheckbox1">
                                            <img
                                                src={truck}
                                                alt="ride-icon"
                                                width={200}
                                                height={100} />
                                        </label>
                                        <br />
                                        <input
                                            type="checkbox"
                                            id="myCheckbox1"
                                            name="ride"
                                            onChange={e => this.setState(() => ({
                                                [e.target.name]: e.target.value
                                            }))}
                                        />

                                        <h2>Packaging</h2>
                                        <label
                                            for="myCheckbox1">
                                            <img
                                                src={packaging}
                                                alt="packaging-icon"
                                                width={200}
                                                height={100} />
                                        </label>
                                        <br />
                                        <input
                                            type="checkbox"
                                            id="myCheckbox1"
                                            name="packaging"
                                            onChange={e => this.setState(() => ({
                                                [e.target.name]: e.target.value
                                            }))}
                                        // onChange={e => this.packaging = e.target.value}

                                        />
                                        <br />
                                        <br />
                                        <br />
                                        <br />

                                        <label for="from">Your location:</label>
                                        <input list="brow"
                                            type='text'
                                            id='departure'
                                            placeholder="From" required
                                            onChange={e => this.setState(() => ({
                                                [e.target.name]: e.target.value
                                            }))}
                                        // onChange={e => this.departure = e.target.value}

                                        />
                                        <datalist id="brow" >

                                            <option value="1">Kicukiro</option>

                                            <option value="2">Nyarugenge</option>
                                            <option value="3">Gasabo</option>

                                        </datalist>
                                        <br />
                                        <br />
                                        <label for="from">Destination:</label>
                                        <input list="brow"
                                            type='text'
                                            id='departure'
                                            placeholder="To" required
                                            onChange={e => this.setState(() => ({
                                                [e.target.name]: e.target.value
                                            }))}
                                        // onChange={e => this.destination = e.target.value}

                                        />
                                        <datalist id="brow" >
                                            <option value="1">Kicukiro</option>

                                            <option value="2">Nyarugenge</option>
                                            <option value="3">Gasabo</option>
                                        </datalist>
                                        <br />
                                        <br />
                                        <button>Submit</button>
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

            </form>

        )
    }
}
