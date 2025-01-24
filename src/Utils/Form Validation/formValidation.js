
export const formValidation = (email, password, name) => {
    email = email ? email.trim() : "";
    password = password ? password.trim() : "";
    name = name ? name.trim() : "";

    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(password);
    const validName = /^[A-Za-z\s\-]+$/.test(name);

    if (!validName) return "Name must contain only letters, spaces, and hyphens. No numbers or special characters allowed.";
    if (!validEmail) return "Invalid Email";
    if (!validPassword) {
        return "Ensure your password is at least 8 characters long and includes one uppercase, one lowercase, one digit (0-9), and one special character.";
    }

    return null;
};
