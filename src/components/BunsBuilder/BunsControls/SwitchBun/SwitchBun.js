import classes from "./SwitchBun.module.css";

const SwitchBun = ({ switchFilling }) => {
  //switchfilling switchfillingcallback

  const inpF1 = (
    <input
      type="radio"
      id="F1"
      name="fil"
      onChange={() => switchFilling("Chocolate")}
    />
  );

  const inpNoN = (
    <input
      type="radio"
      id="none"
      name="fil"
      onChange={() => switchFilling("")}
    />
  );

  const inpF2 = (
    <input
      type="radio"
      id="F2"
      name="fil"
      onChange={() => switchFilling("Vanilla")}
    />
  );

  return (
    <div className={classes.SwitchBun}>
      <div className={classes.inp}>
        <label htmlFor="F1">Chocolate filling</label>
        {inpF1}
      </div>
      <div className={classes.inp}>
        <label htmlFor="none">Сommon</label>
        {inpNoN}
      </div>
      <div className={classes.inp}>
        <label htmlFor="F2">Vanilla filling</label>
        {inpF2}
      </div>
    </div>
  );
};

export default SwitchBun;
