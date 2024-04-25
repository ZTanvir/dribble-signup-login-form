// This is reuable component name Form
// It will generate input field based on input data it received
// Example SignUpFormData will generate Sign up form

import InputFields from "./InputFields";
import styles from "../Styles/form.module.css";

const Form = (props) => {
    const { formInputData, btnName, handleSubmitForm } = props;

    return (
        <form className={styles.form} onSubmit={handleSubmitForm}>
            {formInputData.map((input) => (
                <InputFields
                    key={input.id}
                    label={input.label}
                    pattern={input.patttern}
                    {...input}
                />
            ))}
            <button type="submit">{btnName}</button>
        </form>
    );
};
export default Form;
