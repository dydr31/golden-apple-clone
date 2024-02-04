import classes from "./SaleBadge.module.css";

export const SaleBadge = (props) => {
  let hide = false;
  if (props.sale == 0) {
    hide = true;
  }
  return (
    <>
      {!hide && (
        <div className={classes.sale}>
          <p>{props.sale}%</p>
        </div>
      )}
    </>
  );
};
