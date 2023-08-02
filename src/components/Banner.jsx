import React from 'react';
import styles from './Banner.module.scss'


function Banner() {
    return (
        <div className={styles.banner}>
            <div className="banner-content">
                <h1 className={styles.title}>O Futuro é agora!!!</h1>
                <p className={styles.description}>A Agência Código é uma empresa de tecnologia
                    visando a evolução digital da sua empresa, Nos comprometemos e trabalhamos incansávelmente com o crescimento e com o seu futuro digital entregando a melhor solução e gerando novas possibilidades.</p>
                <a href="https://wa.me/+5544999401177" target="_blank" rel="noopener noreferrer" className={styles.button}>Insira o Código</a>
            </div>
        </div>
    )
}

export default Banner;