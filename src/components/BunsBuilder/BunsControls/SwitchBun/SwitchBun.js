import classes from "./SwitchBun.module.css";

const SwitchBun = ({ switchFilling }) => {

    const inpF1 = <input
        type="radio"
        id="F1"
        name="fil"
        onChange = {()=>switchFilling("F1")}/>

    const inpNoN = <input
        type="radio"
        id="none"
        name="fil"
        onChange = {()=>switchFilling("")}/>

    const inpF2 = <input
        type="radio"
        id="F2"
        name="fil"
        onChange = {()=>switchFilling("F2")}/>
        
    return ( 
        <div className = {classes.SwitchBun}>
            <div className={classes.inp}>
                <label htmlFor="F1">Fill-1</label>
                {inpF1}
            </div>
            <div className={classes.inp}>
                <label htmlFor="none">Fill-none</label>
                {inpNoN}
            </div>
            <div className={classes.inp}>
                <label htmlFor="F2">Fill-2</label>
                {inpF2}
            </div>
        </div>
    );
}
 
export default SwitchBun;