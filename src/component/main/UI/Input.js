import classes from "./Input.module.css";

const Input = (props) => {
  if (props.readonly) {
    return (
      <input
        className={classes["custom-input"]}
        type="text"
        value={props.value}
        suffix={props.suffix}
        readOnly
      />
    );
  }
  return (
    <input
      className={`${classes["custom-input"]} ${classes['readonly-input']}`}
      type="text"
      value={props.value}
      onChange={(event) => props.onChange(props.index, event)}
    />
  );
};

export default Input;
