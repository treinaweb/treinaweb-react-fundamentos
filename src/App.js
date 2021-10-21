import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextCounter from './components/TextCounter';

function App() {
    const [limit, setLimit] = useState(10);
    return (
        <div>
            <TextCounter
                limit={limit}
                onLimit={() => console.log('CHEGOU NO LIMITE')}
            />
        </div>
    );
}

export default App;
