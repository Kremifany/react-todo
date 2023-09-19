import { useEffect, useRef } from "react";
import styles from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

const InputWithLabel = ({ id, name, value, isFocused, onChange, children }) => {
  const inputRef = useRef();
  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    } 
  }); 
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input className={styles.input}
        ref={inputRef}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder="enter task "
      />
    </>
  );
};

InputWithLabel.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  isFocused: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
};
export default InputWithLabel;
