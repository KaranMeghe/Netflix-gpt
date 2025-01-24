import { useState } from 'react';
import { formValidation } from '../Form Validation/formValidation';

const useForm = (email, password, name) => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [validationAlert, setValidationAlert] = useState(false);

    const handleToggleSignIn = () => {
        setIsSignIn(!isSignIn);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = formValidation(email.current.value, password.current.value, name.current.value);
        setValidationAlert(message);
    };

    return { isSignIn, handleToggleSignIn, handleSubmit, validationAlert };
};

export default useForm;