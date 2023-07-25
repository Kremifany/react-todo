import { useEffect, useRef } from "react";
import style from "./InputWithLabel.module.css";

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
      <input className={style.input}
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
export default InputWithLabel;
