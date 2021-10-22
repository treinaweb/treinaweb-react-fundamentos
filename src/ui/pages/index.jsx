import { useIndex } from '../../data/hooks/pages/useIndex.page';
import styles from '../styles/pages/index.module.css';
import TextInput from '../components/inputs/TextInput/TextInput';

export default function Index() {
    useIndex();
    return (
        <div>
            <TextInput />
        </div>
    );
}
