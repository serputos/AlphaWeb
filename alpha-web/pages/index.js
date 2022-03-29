import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alpha BCZ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/home">ALPHA BCZ</a>
        </h1>
        <section>
          {" "}
          <a href="/gallery">GALLERY</a>
        </section>
      </main>
    </div>
  );
}
