import { useState } from 'react';

export default function TextCounter({ limit = 2, ...props }) {
    const [contador, setContador] = useState(8);

    return (
        <div>
            contador: {contador}
            <input type={'text'} maxLength={limit} />
        </div>
    );
}
