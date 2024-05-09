import styles from "../Styles/button.module.css";

const Button = ({ buttonIcon, buttonName }) => {
    return (
        <button className={styles.signUpBtn} type="button">
            <span>
                <img src={buttonIcon} alt={`${buttonName} icon`} />
                <span>{buttonName}</span>
            </span>
        </button>
    );
};
export default Button;
