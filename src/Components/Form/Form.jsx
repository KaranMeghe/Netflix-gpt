import { useRef } from 'react';
import { Header } from '../index';
import { Input, Button } from '../../Ui/index';
import useForm from '../../Utils/hooks/useForm';
import { POSTER_IMG, POSTER_IMG_SRCSET } from '../../Utils/constatnt';



const Form = () => {
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const { handleToggleSignIn, handleSubmit, isSignIn, validationAlert } = useForm(email, password, name);

    return (
        <header className='relative h-screen'>
            <Header />
            <div>
                <img src={POSTER_IMG} srcSet={POSTER_IMG_SRCSET} aria-hidden="true" alt="bg-movie-poster"
                    className="h-screen w-full object-cover" />
            </div>

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                <form onSubmit={handleSubmit} className='p-12 flex flex-col gap-5 w-96 bg-black/60 rounded'>
                    <h3 className='text-white text-3xl'>{isSignIn ? "Sign In" : "Sign Up"}</h3>

                    {!isSignIn && <Input ref={name} type="text" placeholder="Enter Name" className="border border-gray-500 p-3 rounded text-gray-400 placeholder:text-gray-400 placeholder:font-thin" />}

                    <Input ref={email} type="email" placeholder="Email Address" className="border border-gray-500 p-3 rounded text-gray-400 placeholder:text-gray-400 placeholder:font-thin" />

                    <Input ref={password} type="password" placeholder="Enter Password" className="border border-gray-500 p-3 rounded text-gray-400 placeholder:text-gray-400 placeholder:font-thin" />

                    {validationAlert ? <p className='text-red-500'>{validationAlert}</p> : null}

                    <Button className="bg-red-600 text-white rounded p-3">{isSignIn ? 'Sign in' : 'Sign up'}</Button>

                    <p onClick={handleToggleSignIn} className="text-gray-400 font-thin text-base">{isSignIn ? "New to Netflix?" : "Already Registered?"} <span className='text-white font-semibold'>{isSignIn ? "Sign up now." : "Sign in now."}</span></p>
                </form>
            </div>

        </header>
    );
};

export default Form;