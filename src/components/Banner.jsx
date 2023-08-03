import React from 'react';
import styles from './Banner.module.scss'
import Btn from './CallToActionBtn';


function Banner() {
    return (
        <div className={styles.banner}>
            <div className="banner-content">
                <h1 className={styles.title}>O Futuro é agora!!!</h1>
                <p className={styles.description}>A Agência Código é uma empresa de tecnologia
                    visando a evolução digital da sua empresa, Nos comprometemos e trabalhamos incansávelmente com o crescimento e com o seu futuro digital entregando a melhor solução e gerando novas possibilidades.</p>
                <Btn />
            </div>
        </div>
    )
}

export default Banner;