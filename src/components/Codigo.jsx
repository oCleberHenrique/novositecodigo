import React from 'react';
import styles from './Codigo.module.scss';
import Btn from './CallToActionBtn';
import SvgIcon from './IconSVG';

function Codigo() {
    return (
        <section className={styles.container}>
            <div className={styles.containerContent}>
                <div>
                    <img src='/assets/celular.png' />
                </div>
                <div>
                    <div className={styles.iconTitle}>
                        <SvgIcon />
                        <h2 className={styles.title}>Código</h2>
                    </div>
                    <p className={styles.description}>Agência Código é uma empresa de tecnologia inovadora, focada na transformação digital do seu negócio. Nosso objetivo é impulsionar o crescimento e alcançar resultados extraordinários ao entregar soluções sob medida. Criamos sites intuitivos, aplicativos envolventes e designs impactantes para mídias sociais, tudo pensado para elevar sua presença online e conquistar seu público.
                        Além disso, nossa expertise em pesquisas de mercado e estratégias de branding nos permite posicionar sua marca com destaque no mercado, destacando seus diferenciais e fortalecendo sua identidade. Acreditamos no poder da tecnologia para catalisar o sucesso dos negócios locais na região de Maringá, e nossa equipe apaixonada e experiente está pronta para enfrentar os desafios e oportunidades que surgirem.
                        Juntos, vamos desbravar novos horizontes e construir um futuro digital promissor para sua empresa. Conte com a Agência Código para levar sua marca ao próximo nível e alcançar novos patamares de excelência.</p>
                    <div className={styles.buttonRight}>
                        <Btn />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Codigo;
