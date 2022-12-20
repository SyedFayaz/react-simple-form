import { useState } from "react";
import "./formInput.css";

export const FormInput = (props) => {
    const [focus, setFocus] = useState(false);
    const { label, onChange, errorMessage, id, ...inputProps } = props;
    return (
        <div className="form-input">
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={(e) => setFocus(true)}
                onFocus={() => inputProps.name === "confirmPassword" && setFocus(true)}
                focused={focus.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}