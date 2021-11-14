import React from 'react';
import Logo from '../../assets/img/logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles((theme) => ({
    menu: {
        "& .MuiPaper-root": {
          backgroundColor: "#22222E"
        }
      }
  }));
const Home =()=>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const classes = useStyles();
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div>
            <div className="row col-12" id="header_whole_div">
                <div className="col" id="header_left_side">
                    <ul id="left_side_list">
                        <li>
                            <img src={Logo} alt="" id="logo_on_header"/>
                        </li>
                        <li id="name_of_website">
                            AwesomeApp
                        </li>
                    </ul>
                </div>
                <div className="col" id="header_right_side">
                        <ul id="right_side_memu">
                            <li>Home</li>
                            <li>About</li>
                            <li>Product</li>
                            <li>Pricing</li>
                            <li>
                                <button id="contact_us_button">Contact</button>
                            </li>
                        </ul>
                        <MenuIcon id="phone_menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
                </div>
                <Menu
                id="simple-menu"
                className={classes.menu}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
                  
                        <MenuItem id="color_White">Home</MenuItem>
                        <MenuItem id="color_White">About</MenuItem>
                        <MenuItem id="color_White">Product</MenuItem>
                        <MenuItem id="color_White">Pricing</MenuItem>
                        <MenuItem id="color_White"> <button id="contact_us_button">Contact</button></MenuItem>
            
    
                </Menu>
            </div>
        </div>
    )
}
export default Home;