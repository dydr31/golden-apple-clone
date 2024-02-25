import classes from "./NewBadge.module.css";

export const NewBadge = (props) => {
  let hide = true;
  if (props.new === 'true') {
    hide = false;
  }
  return (
    <>
 
      {!hide && (
        <div className={classes.new}>
          <p>NEW</p>
        </div>
      )}
    </>
  );
};