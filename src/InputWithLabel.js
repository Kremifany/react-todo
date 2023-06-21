import { useEffect, useRef } from "react";

const InputWithLabel = ({ id, name, value, isFocused, onChange, children }) => {
  const inputRef = useRef();
  // C
  useEffect(() => {
    if (isFocused && inputRef.current) {
      // D
      inputRef.current.focus();
    }
  }); //no dependency array means autofocus ech rendering of the component
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        ref={inputRef}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
export default InputWithLabel;
