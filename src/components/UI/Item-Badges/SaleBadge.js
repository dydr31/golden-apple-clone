import classes from "./SaleBadge.module.css";

export const SaleBadge = (props) => {
  let hide = true;
  if (props.sale > 0) {
    hide = false;
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
