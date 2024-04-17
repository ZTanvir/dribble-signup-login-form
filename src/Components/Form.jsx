// This is reuable component name Form
// It will generate input field based on input data it received
// Example SignUpFormData will generate Sign up form

import InputFields from "./InputFields";

const Form = (props) => {
    const { formInputData, btnName, handleSubmitForm } = props;

    return (
        <form onSubmit={handleSubmitForm} id="">
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
