import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, id, errorMessage, onChange, ...inputProps } = props;
  console.log(inputProps);
  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      
      {/* {focused && <span>{errorMessage}</span> } */}
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;