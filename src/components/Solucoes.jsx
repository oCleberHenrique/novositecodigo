import React from 'react';
import styles from './Solucoes.module.scss'
import SvgIcon from './IconSVG';
import IconDesk from './IconDesk';
import IconId from './IconId';
import IconPhone from './IconPhone';
import CallToActionBtn from './CallToActionBtn'

function Solucoes() {
    return (
        <section className={styles.container}>
            <div className={styles.iconTitle}>
                <SvgIcon />
                <h2 className={styles.title}>Soluções</h2>
            </div>
                <div className={styles.cardContainer}>
                    <div className={styles.cardlist}>
                        <IconDesk />
                        <h3 className={styles.cardTitle}>Web Sites</h3>
                        <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum condimentum natoque quis leo, tellus pellentesque. Porttitor eget porta fringilla magnis risus vel. Sapien, cras metus accumsan sed volsectas metus accumsan sed volutpat. In turpis facilisis fames nisl mauris ornare nulla urna ullamcorper.  Porttitor eget porta frinat. In turpis facilisis fames nisl mauris ornare nulla urna ullamcorper.  </p>
                    </div>
                    <div className={styles.cardlist}>
                        <IconPhone />
                        <h3 className={styles.cardTitle}>App's Mobile</h3>
                        <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum condimentum natoque quis leo, tellus pellentesque. Porttitor eget porta fringilla magnis risus vel. Sapien, cras metus accumsan sed volsectas metus accumsan sed volutpat. In turpis facilisis fames nisl mauris ornare nulla urna ullamcorper.  Porttitor eget porta frinat. In turpis facilisis fames nisl mauris ornare nulla urna ullamcorper.  </p>
                    </div>
                    <div className={styles.cardlist}>
                        <IconId />
                        <h3 className={styles.cardTitle}>Google ADS</h3>
                        <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum condimentum natoque quis leo, tellus pellentesque. Porttitor eget porta fringilla magnis risus vel. Sapien, cras metus accumsan sed volsectas metus accumsan sed volutpat. In turpis facilisis fames nisl mauris ornare nulla urna ullamcorper.  Porttitor eget porta frinat. In turpis facilisis fames nisl mauris ornare nulla urna ullamcorper.  </p>
                    </div>
                    <div className={styles.cardlist}>
                        <SvgIcon />
                        <h3 className={styles.cardTitle}>Google ADS</h3>
                        <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum condimentum natoque quis leo, tellus pellentesque. Porttitor eget porta fringilla magnis risus vel. Sapien, cras metus accumsan sed volsectas metus accumsan sed volutpat. In turpis facilisis fames nisl mauris ornare nulla urna ullamcorper.  Porttitor eget porta frinat. In turpis facilisis fames nisl mauris ornare nulla urna ullamcorper.  </p>
                    </div>
                    <div className={styles.cardlist}>
                        <SvgIcon />
                        <h3 className={styles.cardTitle}>Google ADS</h3>
                        <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum condimentum natoque quis leo, tellus pellentesque. Porttitor eget porta fringilla magnis risus vel. Sapien, cras metus accumsan sed volsectas metus accumsan sed volutpat. In turpis facilisis fames nisl mauris ornare nulla urna ullamcorper.  Porttitor eget porta frinat. In turpis facilisis fames nisl mauris ornare nulla urna ullamcorper.  </p>
                    </div>
                    <div className={styles.cardlist}>
                        <SvgIcon />
                        <h3 className={styles.cardTitle}>Google ADS</h3>
                        <p className={styles.cardDescription}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum condimentum natoque quis leo, tellus pellentesque. Porttitor eget porta fringilla magnis risus vel. Sapien, cras metus accumsan sed volsectas metus accumsan sed volutpat. In turpis facilisis fames nisl mauris ornare nulla urna ullamcorper.  Porttitor eget porta frinat. In turpis facilisis fames nisl mauris ornare nulla urna ullamcorper.  </p>
                    </div>
                </div>
                <div className={styles.button}> 
                <CallToActionBtn />
                </div>
        </section>
    )
}

export default Solucoes;