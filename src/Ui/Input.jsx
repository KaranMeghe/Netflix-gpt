/* eslint-disable react/prop-types */
import { forwardRef } from 'react';

const Input = forwardRef(({ className, ...rest }, ref) => {
    return (
        <input ref={ref} className={className} {...rest} />
    );
});
// Add a display name
Input.displayName = "Input";


export default Input;
