import { useState, useId, useRef } from "react";
import styles from "../Styles/inputFields.module.css";

const InputFields = (props) => {
    const [activeError, setActiveError] = useState(false);
    const [passwordVisiable, setPasswordVisiable] = useState(false);
    const inputType = useRef(undefined);
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

    const handleOnBlur = (event) => {
        setActiveError(true);
    };
    const handleOnFocus = (event) => {
        event.target.name === "password" ? setActiveError(true) : null;
    };
    const handleEyeIcon = (event) => {
        inputType.current.type === "text"
            ? (inputType.current.type = "password")
            : (inputType.current.type = "text");
        setPasswordVisiable(!passwordVisiable);
    };

    return (
        <div className={styles.inputField}>
            <label htmlFor={`${inputId}${name}`}>
                {label}
                {required === true ? "*" : null}
            </label>
            <input
                ref={inputType}
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
            <span onClick={handleEyeIcon} className={styles.eyeIcon}>
                {type === "password" && (
                    <span className="material-symbols-outlined">
                        {passwordVisiable ? "visibility_off" : "visibility"}
                    </span>
                )}
            </span>
        </div>
    );
};
export default InputFields;
