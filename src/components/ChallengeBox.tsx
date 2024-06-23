import { useContext, useState } from "react";
import styles from "../styles/components/ChallengeBox.module.css"
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";

export function ChallengeBox(){
    const { resetCountdown } = useContext(CountdownContext);

    const { 
        activeChallenge, 
        resetChallenge,
        completeChallenge 
    } = useContext(ChallengesContext);

    function handleChallengeSucceded(){
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed(){
        resetChallenge();
        resetCountdown();
    }

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>{`Ganhe ${activeChallenge.amount}xp`}</header>

                    <main>
                        <img src={`${activeChallenge.type}.png`} alt="" />
                        <strong>Novo desafio</strong>
                        <p>{ activeChallenge.description }</p>
                    </main>

                    <footer>
                        <button
                            type='button'
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type= 'button'
                            className={styles.challengeSuccededButton}
                            onClick={handleChallengeSucceded}
                        >
                            Completei
                        </button>
                    </footer>
                </div>

            ) : (

                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio.</strong>

                    <p>
                        <img src="level-up.png" alt="level up" />
                        Avance de level completando desafios.
                    </p>
                </div>
            )}
            
            
        </div>

    );
}