import { useId } from "react";

const InputFields = (props) => {
    const inputId = useId();
    const { label, type, name, placeholder, required } = props;
    return (
        <div className="inputField">
            <label htmlFor={`${inputId}${name}`}>
                {label}
                {required === true ? "*" : null}
            </label>
            <input
                id={`${inputId}${name}`}
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};
export default InputFields;
