import { useContext } from "react";
import styles from "../styles/components/Countdown.module.css";
import { CountdownContext } from "../contexts/CountdownContext";

export function Countdown(){
    const { 
        minutes, 
        seconds,
        isActive,
        hasFinished,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    // useEffect(() => {
    //     if (!activeChallenge){
    //         resetCountdown();
    //         setHasFinished(false)
    //     }
    // }, [activeChallenge])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { isActive ? (
                    <button 
                        type="button" 
                        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                        onClick={resetCountdown}
                    >
                        Abandonar ciclo
                    </button>
                )
            : hasFinished ? (
                     <button 
                        disabled
                        className={styles.countdownButton}
                    >
                        <div>
                            <p>Ciclo Encerrado</p>
                            {/* <img src="icons/check-icon.png" alt="check icon" /> */}
                        </div>
                        
                    </button>
                )
            :
                (
                    <button 
                        type="button" 
                        className={styles.countdownButton}
                        onClick={startCountdown}
                    >
                        Iniciar um ciclo
                    </button>
                )
            }
        </div>
            
    );
}