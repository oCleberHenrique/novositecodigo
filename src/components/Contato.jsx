import React from "react";
import styles from './Contato.module.scss'

function Contato() {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" name="name" placeholder="Nome" required />
                <input type="email" name="email" placeholder="E-mail" required />
                <div className={styles.stateCity}>
                    <input type="text" name="state" placeholder="Estado" required />
                    <input type="text" name="city" placeholder="Cidade" required />
                </div>
                <div className={styles.phoneSend}>
                    <input type="tel" name="phone" placeholder="Telefone" required />
                    <button type="submit">Enviar</button>
                </div>
            </form>
            <img src="/assets/jump.png" alt="Descrição da imagem" className={styles.image} />
        </div>
    )
}

export default Contato;