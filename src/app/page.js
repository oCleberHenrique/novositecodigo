import Head from 'next/head';
import styles from '../app/Home.module.css'


function LandingPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Minha Landing Page</title>
        <meta name="description" content="Descrição da minha landing page" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bem-vindo à Minha Landing Page</h1>
        <a>teste</a>
        <p className={styles.description}>Esta é uma página de destino.</p>
      </main>

      <footer className={styles.footer}>
        <p>Contato: email@example.com</p>
      </footer>
    </div>
  );
}

export default LandingPage;
