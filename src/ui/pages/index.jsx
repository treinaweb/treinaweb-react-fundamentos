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
    const {
        user,
        text,
        onTextChange,
        maxTextLength,
        sendTweet,
        sortedTweetList,
    } = useIndex();

    return (
        <div>
            <h1 className={styles['page-title']}>TreinaTweet</h1>
            <div className={styles['tweet-container']}>
                <img
                    src={user.picture}
                    alt={user.name}
                    className={styles['avatar']}
                />
                <TextInput />
            </div>
            <div className={styles['button-container']}>
                <div>0 / 150</div>
                <button className={styles['post-button']}>Tweetar</button>
            </div>

            <ul className={styles['tweet-list']}>
                <li className={styles['tweet-list-item']}>
                    <Tweet tweet={tweet} />
                </li>
                <li className={styles['tweet-list-item']}>
                    <Tweet tweet={tweet} />
                </li>
                <li className={styles['tweet-list-item']}>
                    <Tweet tweet={tweet} />
                </li>
            </ul>
        </div>
    );
}
