import React from 'react';
import { Header } from '../index';
import { Input, Button } from '../../Ui/index';
import useForm from '../../Utils/hooks/useForm';

const SignIn = () => {
    const { handleToggleSignIn, isSignIn } = useForm();
    return (
        <header className='relative h-screen'>
            <Header />
            <div>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg 959w" alt="bg-img" aria-hidden="true" />
            </div>

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                <form className='p-12 flex flex-col gap-5 w-96 bg-black/60 rounded'>
                    <h3 className='text-white text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h3>
                    {!isSignIn && <Input type="text" placeHolder="Enter Name" className="border border-gray-500 p-3 rounded text-gray-400 placeholder:text-gray-400 placeholder:font-thin" />}
                    <Input type="email" placeHolder="Email Address" className="border border-gray-500 p-3 rounded text-gray-400 placeholder:text-gray-400 placeholder:font-thin" />
                    <Input type="password" placeHolder="Enter Password" className="border border-gray-500 p-3 rounded text-gray-400 placeholder:text-gray-400 placeholder:font-thin" />
                    <Button className="bg-red-600 text-white rounded p-3">{isSignIn ? 'Sign in' : 'Sign up'}</Button>
                    <p onClick={handleToggleSignIn} className="text-gray-400 font-thin text-base">{isSignIn ? "New to Netflix?" : "Already Registered?"} <span className='text-white font-semibold'>{isSignIn ? "Sign up now." : "Sign in now."}</span></p>
                </form>
            </div>

        </header>
    );
};

export default SignIn;