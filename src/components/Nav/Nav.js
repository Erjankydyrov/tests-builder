import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
    return ( 
    <div className = {classes.Nav}>
        <ul className={classes.Nav}>
            <NavItem url="/" exact>Builder</NavItem>
            <NavItem url="/checkout">Checkout</NavItem>
        </ul>
    </div> 
    );
}
 
export default Nav;