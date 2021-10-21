import logo from './logo.svg';
import './App.css';
import TextCounter from './components/TextCounter';

function App() {
    return (
        <div>
            <TextCounter />
            <TextCounter limit={5} />
            <TextCounter limit={10} />
        </div>
    );
}

export default App;
