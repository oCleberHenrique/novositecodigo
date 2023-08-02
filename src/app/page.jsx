import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Banner from '@/components/Banner'
import styles from '../../src/global.scss'



function LandingPage() {
  return (
    <div className="container">
      <Head>
        <title>Minha Landing Page</title>
        <meta name="description" content="Descrição da minha landing page" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Banner />
      </main>
    </div>
  );
}

export default LandingPage;
