import { useIndex } from '../../data/hooks/pages/useIndex.page';
import styles from '../styles/pages/index.module.css';
import TextInput from '../components/inputs/TextInput/TextInput';
import Tweet from '../components/data-display/Tweet/Tweet';

const tweet = {
    date: 'há 5 dias',
    text: 'Meu primeiro tweet',
    user: {
        name: 'Akira Hanashiro',
        username: 'akirahanashiro',
        picture: 'https://github.com/hanashiro.png',
    },
};

export default function Index() {
    useIndex();
    return (
        <div>
            <TextInput />
            <Tweet tweet={tweet} />
        </div>
    );
}
