import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import styles from "../../styles/styles.module.css";

export default function Film({ film }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className={styles.filmDetails}>
        <h1 className={styles.title}>Film Details</h1>
        {film ? (
          <>
            <h2>{film.title}</h2>
            <p>Episode: {film.episode_id}</p>
            <p>Director: {film.director}</p>
            <p>Release Date: {film.release_date}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Layout>
  );
}

// This function fetches the film data from the SWAPI API using the provided film ID
export async function getServerSideProps({ params }) {
  const response = await fetch(`https://swapi.dev/api/films/${params.id}`);
  const film = await response.json();

  return {
    props: {
      film,
    },
  };
}
