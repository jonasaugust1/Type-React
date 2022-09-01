import styles from '../list.module.scss'

const Item = ({tarefa, tempo}: {tarefa: string, tempo:string}) => {

    return(
        <li className={styles.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item