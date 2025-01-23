import { useState } from 'react';

const useForm = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleToggleSignIn = () => {
        setIsSignIn(!isSignIn);
    };

    return { isSignIn, handleToggleSignIn };
};

export default useForm;