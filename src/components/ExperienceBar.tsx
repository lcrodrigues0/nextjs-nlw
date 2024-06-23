import { useContext } from 'react'
import styles from '../styles/components/ExperienceBar.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'

export function ExperienceBar(){
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = (currentExperience / experienceToNextLevel) * 100;

    return (
        <header className={styles.experienceBar}>
            <span>8 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }}/>

                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}