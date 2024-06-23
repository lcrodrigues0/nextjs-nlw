import { useContext } from "react";
import styles from "../styles/components/Profile.module.css"
import { ChallengesContext } from "../contexts/ChallengesContext";

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/lcrodrigues0.png" alt="Leticia Rodrigues" />
            <div>
                <strong>Letícia Rodrigues</strong>
                <p>Level {level}</p>
            </div>
        </div>
    );
}