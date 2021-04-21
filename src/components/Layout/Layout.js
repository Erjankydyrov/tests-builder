import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import Toolbar from "../Toolbar/Toolbar";
import classes from "./Layout.module.css";

const Layout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    return (
        <div className={classes.Layout}>
            <Toolbar openDrawer={() => setDrawerOpen(true)} />
            <Drawer open={drawerOpen} closeDrawer={() => setDrawerOpen(false)} />
            {children}
        </div>
    );
  }
 
export default Layout;