import classes from "./Checkout.module.css";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary";

const Checkout = ({ history }) => {
    
    function cancelCallback() {
        history.replace('/');
    }

    return ( 
        <div className={classes.CheckoutSummary}>
            <CheckoutSummary cancelCallback={cancelCallback} />
        </div>
    );
}

export default Checkout ;