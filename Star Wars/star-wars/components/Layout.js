import Head from "next/head";
import styles from "../styles/styles.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Star wars films</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Star Wars</h1>
        </header>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
