import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import Routes from "../Routes";
//Material ui items
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";

const Navigation = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen((wasOpen)=>!wasOpen);
    };

    const isActiveRoute = routeName => {
        return props.location.pathname === routeName ? true : false;
    };

    return (
        <div>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={""}
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={""}>
                            React Hooks Test
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <Drawer classes={{ paper: "" }} open={isOpen} onClose={toggleDrawer}>
                <div className={""} role="presentation" onClick={() => {}} onKeyDown={() => {}}>
                    <MenuList>
                        {Routes.map((prop, key) => {
                            return (
                                <NavLink
                                    to={prop.path}
                                    style={{ textDecoration: "none" }}
                                    key={key}>
                                    <MenuItem selected={isActiveRoute(prop.path)}>
                                        <ListItemText primary={prop.sidebarName} />
                                    </MenuItem>
                                </NavLink>
                            );
                        })}
                    </MenuList>
                </div>
            </Drawer>
        </div>
    );
};
export default withRouter(Navigation);
