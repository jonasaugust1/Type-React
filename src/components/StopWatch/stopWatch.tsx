import Button from "../Button/button"
import Watch from "./Watch/watch"
import styles from './stopWatch.module.scss'

const StopWatch = () => {

    return (
        <div className={styles.cronometro}>
            <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>

            <div className={styles.relogioWrapper}>
                <Watch/>
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}

export default StopWatch