import React, { ReactNode } from "react";
import styles from './button.module.scss'

class Button extends React.Component<{children: React.ReactNode}> {

    render() {
        return (
            <button className={styles.botao}>{this.props.children}</button>
        )
    }
}

export default Button