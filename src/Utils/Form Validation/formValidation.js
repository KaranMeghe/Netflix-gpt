
export const formValidation = (email, password, name, isSignIn) => {
    email = email ? email.trim() : "";
    password = password ? password.trim() : "";
    name = name ? name.trim() : "";

    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(password);
    const validName = /^[A-Za-z\s\-]+$/.test(name);

    // General "required" message if all fields are empty
    if (!email && !password && (!isSignIn && !name)) {
        return "Please fill in all required fields.";
    }

    // Validate email
    if (!email) {
        return "Email is required.";
    }
    if (!validEmail) {
        return "Invalid email format.";
    }

    // Validate password
    if (!password) {
        return "Password is required.";
    }
    if (!validPassword) {
        return "Ensure your password is at least 8 characters long and includes one uppercase, one lowercase, one digit (0-9), and one special character.";
    }

    // Validate name only during sign-up
    if (!isSignIn && !name) {
        return "Name is required.";
    }
    if (!isSignIn && !validName) {
        return "Name must contain only letters, spaces, and hyphens.";
    }

    return null; // Return null if no validation errors
};
