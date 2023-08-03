import React from 'react';
import styles from './CallToActionBtn.module.scss'

function Btn() {
    return (
        <a href="https://wa.me/+5544999401177" target="_blank" rel="noopener noreferrer" className={styles.button}>
                    Insira o Código
                </a>
    )
}

export default Btn;