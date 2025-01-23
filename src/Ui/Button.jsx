
const Button = ({ className, children, onClick }) => {
    const handleClick = (event) => {
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <button onClick={handleClick} className={className} >{children}</button>
    );
};

export default Button;
