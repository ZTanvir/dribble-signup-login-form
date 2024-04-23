import { useState, useId } from "react";
import styles from "../Styles/inputFields.module.css";

const InputFields = (props) => {
    const inputId = useId();
    const {
        label,
        type,
        name,
        placeholder,
        required,
        defaultValue,
        pattern,
        errorMessage,
    } = props;
    const [activeError, setActiveError] = useState(false);

    const handleOnBlur = (event) => {
        console.log("Focus", event.target);
        setActiveError(true);
    };
    const handleOnFocus = (event) => {
        event.target.name === "password" ? setActiveError(true) : null;
    };

    return (
        <div className={styles.inputField}>
            <label htmlFor={`${inputId}${name}`}>
                {label}
                {required === true ? "*" : null}
            </label>
            <input
                id={`${inputId}${name}`}
                type={type}
                name={name}
                placeholder={placeholder}
                pattern={pattern}
                defaultValue={defaultValue}
                required={required}
                focused={activeError.toString()}
                onBlur={handleOnBlur}
                onFocus={handleOnFocus}
            />
            <span>{errorMessage}</span>
        </div>
    );
};
export default InputFields;
