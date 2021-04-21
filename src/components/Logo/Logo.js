import classes from "./Logo.module.css";
import logo from "../../images/logo.svg"

const Logo = () => {
    return ( 
        <div className = {classes.Logo}>
            <img src = {logo} alt = "logo" />
            <div>Buns</div>
        </div>
    );
}
 
export default Logo;