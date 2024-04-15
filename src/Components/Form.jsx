// This is reuable component name Form
// It will generate input field based on input data it received
// Example SignUpFormData will generate Sign up form

import InputFields from "./InputFields";

const Form = (props) => {
    const { formInput } = props;
    return <form>{formInput}</form>;
};
export default Form;
