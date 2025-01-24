import React, { forwardRef } from 'react';

const Input = forwardRef(({ className, ...rest }, ref) => {
    return (
        <input ref={ref} className={className} {...rest} />
    );
});

export default Input;