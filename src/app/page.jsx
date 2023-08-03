import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner'
import styles from '../../src/global.scss'
import Codigo from '@/components/Codigo';



function LandingPage() {
  return (
    <div className="container">
      <Head>
        <title>Minha Landing Page</title>
        <meta name="description" content="Agência Código - Insira o Código" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Banner />
        <Codigo />
      </main>
    </div>
  );
}

export default LandingPage;
