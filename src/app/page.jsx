
import styles from '../../src/global.scss'
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner'
import Codigo from '@/components/Codigo';
import Solucoes from '@/components/Solucoes';




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
        <Solucoes />
      </main>
    </div>
  );
}

export default LandingPage;
