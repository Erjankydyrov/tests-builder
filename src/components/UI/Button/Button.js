import classes from "./Button.module.css";

const Button = (props) => {
    
  const className = [classes.Button];
  if (props.green) {
    className.push(classes.green);
  }
  if (props.order) {
    className.push(classes.order);
  }
  if (props.glav) {
    className.push(classes.glav);
  }

  return (
    <button {...props} className={className.join(' ')}>{props.children}</button>
  );
}

export default Button;