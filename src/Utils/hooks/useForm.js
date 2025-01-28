import { useState } from 'react';
import { formValidation } from '../Form Validation/formValidation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const useForm = (email, password, name) => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [validationAlert, setValidationAlert] = useState(false);
    const navigate = useNavigate();

    const handleToggleSignIn = () => {
        setIsSignIn(!isSignIn);
        setValidationAlert(false);
        email.current.value = "";
        password.current.value = "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidationAlert(false);

        let nameValue = name?.current?.value || ""; // Handle null/undefined name

        const message = formValidation(
            email.current.value,
            password.current.value,
            nameValue,
            isSignIn
        );

        setValidationAlert(message);
        if (message) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(userCredential.user);
                    navigate('/browse');
                })
                .catch((error) => {
                    setValidationAlert(`${error.code} - ${error.message}`);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(userCredential.user);
                    navigate('/browse');
                })
                .catch((error) => {
                    setValidationAlert(`${error.code} - ${error.message}`);
                });
        }

        email.current.value = "";
        password.current.value = "";
        !isSignIn ? name.current.value = "" : null;
    };



    return { isSignIn, handleToggleSignIn, handleSubmit, validationAlert };
};
export default useForm;
