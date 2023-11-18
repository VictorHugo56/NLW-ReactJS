import { ChallengesContext } from '@/contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
import { useContext } from 'react';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/VictorHugo56.png" alt="Victor Hugo" />
            <div>
                <strong>Victor Hugo</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}