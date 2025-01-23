import React from 'react';
import { Header } from '../index';

const SignIn = () => {
    return (
        <header className='relative'>
            <Header />
            <div>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_small.jpg 959w" alt="bg-img" aria-hidden="true" />
            </div>

            <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <form className='p-12 bg-black'>
                    <input type="text" className='border border-red-400' />
                    <input type="text" className='border border-red-400' />
                    <button className='border border-red-400'>btn</button>

                </form>
            </div>

        </header>
    );
};

export default SignIn;