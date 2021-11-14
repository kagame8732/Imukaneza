import React from 'react';
import Header from '../components/header'
import Logo from '../../assets/img/logo.png'
import RightSideImg from '../../assets/img/home_img.png'
const Home =()=>{
    return (
        <div>
            <Header />
            <div className="row col-12" id="home_whole_div">
                <div className="col-sm-5" id="home_left_side">

                   <p id="left_side_titile">Showcase Your App!</p>
                   <p id="sentance_on_home">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>     
                    <ul id="left_side_buttons">
                        <li>
                            <button id="button_on_left">Plans & Pricing</button>
                        </li>
                        <li>
                            <button id="button_on_right">Start Now</button>
                        </li>
                    </ul>
                </div>
                <div className="col-sm" id="home_left_right">
                <img src={Logo} alt="" id="logo_on_home_page"/>
                    <img src={RightSideImg}  alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Home;