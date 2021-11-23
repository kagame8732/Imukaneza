import React,{useState} from "react";
import Menu from '@material-ui/icons/Menu';
import PersonRounded from '@material-ui/icons/PersonRounded';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import LeftSideMenu from "../components/leftSidemenu";
const MiddleHeader =(porps) =>{
    const [state, setState] = useState({
        left: false,
      });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    return (
      <>
          <SwipeableDrawer
                    anchor={'right'}
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                    onOpen={toggleDrawer('right', true)}
          >
                   <LeftSideMenu whichOne={porps.name} id="phoneMenu" isPhone={true} />
          </SwipeableDrawer>
        <div className="row col-12 noM" >
            <div className="col-6 noM" id="sssasasa_1">
                <ul id="nav_admin">
                    <li><SearchIcon/></li>
                    <li><input placeholder="Seacher" id="seacher_Admin" /></li>
                </ul>
            </div>
            <div className="col-6 noM" id="sssasasa_2">
                <ul id="nav_admin_right">
                    <li><NotificationsRoundedIcon/></li>
                    <li><MoreVertOutlinedIcon/></li>
                    <li id="forPhoneProfile"><PersonRounded/></li>
                    <li id="forPhoneMenu" onClick={toggleDrawer('right', true)}><Menu/></li>
                </ul>
            </div>
        </div>
        <p id="overView_style">{porps.name}</p>
      </>
    )
}
export default MiddleHeader;