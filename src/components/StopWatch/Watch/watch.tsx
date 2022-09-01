import styles from './watch.module.scss'

const Watch = () => {

    return (
        <>
            <span className={styles.relogioNumero}>0</span>
            <span className={styles.relogioNumero}>0</span>
            <span className={styles.relogioDivisao}>:</span>
            <span className={styles.relogioNumero}>0</span>
            <span className={styles.relogioNumero}>0</span>
        </>
     
    )
}

export default Watch