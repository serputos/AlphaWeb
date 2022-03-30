import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from"next/link" // SPA para cargar solo lo necesario (sin refresacar)

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alpha BCZ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <section className={styles.title}>   
      <Link href="/"><h1 >ALPHA BCZ</h1></Link> 
      </section>

        <section>
          {" "}
          <Link href="/gallery"><a>GALLERY</a></Link>
        </section>
      </main>
    </div>
  );
}
