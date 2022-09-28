import React, {useState} from 'react';


interface InputProps {
    type: 'text' | 'email' | 'password' | 'textarea';
    placeholder: string;
    name: string;
    value: string;
    onChange?: Function;
    rounded?: boolean;
    error?: boolean;
}

function Input({type, placeholder, name, value, onChange, rounded, error}: InputProps) {
    const errorStyle = error ? 'border-red-500' : '';
    const roundedStyle = rounded ? 'rounded-md' : '';

    const [inputVal, setInputVal] = useState(value);

    const handleChange = (event: any) => {
        setInputVal(event.target.value);

        if (typeof onChange === 'function') {
            onChange(event);
        }
    };

    return (
        <>
            {
                type !== 'textarea' ?
                    <input type={type}
                           name={name}
                           placeholder={placeholder}
                           value={inputVal}
                           onChange={event => handleChange(event)}
                           className={['input', errorStyle, roundedStyle].join(' ')}
                    /> :
                    <textarea name={name}
                              placeholder={placeholder}
                              value={inputVal}
                              onChange={event => handleChange(event)}
                              className={['input', errorStyle, roundedStyle].join(' ')}
                    />
            }
        </>
    );
}

export default Input;