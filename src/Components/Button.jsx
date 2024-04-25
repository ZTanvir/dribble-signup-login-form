const Button = ({ buttonIcon, buttonName }) => {
    return (
        <button type="button">
            <span>
                <img src={buttonIcon} alt={`${buttonName} icon`} />
                <span>{buttonName}</span>
            </span>
        </button>
    );
};
export default Button;
