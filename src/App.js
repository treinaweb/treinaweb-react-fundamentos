import styles from './App.module.css';
import Index from './ui/pages/index';

function App() {
    return (
        <div className={styles['app-container']}>
            <Index />
        </div>
    );
}

export default App;
