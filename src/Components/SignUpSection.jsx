import Button from "./Button";
import fbIcon from "../Assets/icons/fb.svg";
import googleIcon from "../Assets/icons/google.svg";
import plantImg from "../Assets/images/plantImg.svg";

const SignUpSection = () => {
    return (
        <section className="">
            <p>or Sign Up via</p>
            <Button buttonIcon={fbIcon} buttonName="Facebook" />
            <Button buttonIcon={googleIcon} buttonName="Google" />
            <p>
                by clicking submit you agree to the{" "}
                <a href="#">Terms and Conditions</a>
            </p>
            <img style={{ color: "red" }} src={plantImg} alt="" />
        </section>
    );
};

export default SignUpSection;
