import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/styles.module.css";
//Home page for star wars page
export default function Home({ films }) {
  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Star Wars Films</h1>
        <ul className={styles.filmsList}>
          {films.map((film) => (
            <li key={film.episode_id}>
              <Link href={`/films/${film.episode_id}`}>
                <div className={styles.filmLink}>{film.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://swapi.dev/api/films");
  const data = await response.json();
  const films = data.results;

  return {
    props: {
      films,
    },
  };
}
