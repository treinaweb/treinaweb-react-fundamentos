import { useState } from 'react';

export default function TextCounter({ limit = 2, ...props }) {
    const [text, setText] = useState('');

    function handleChange(event) {
        setText(event.target.value);
        if (event.target.value.length >= limit) {
            props?.onLimit();
        }
    }

    return (
        <div>
            <input
                type={'text'}
                maxLength={limit}
                value={text}
                onChange={handleChange}
            />
            {text.length}/{limit}
        </div>
    );
}
