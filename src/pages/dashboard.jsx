import useFetch from "../services/fetch";
import styles from "../styles/dashboard.module.scss";

function Dashboard() {
  const { data, loading, error } = useFetch("user/12");

  return (
    <main className={styles.Dashboard}>
      {loading ? (
        <p>Chargement</p>
      ) : (
        <>
          {data &&
            (error ? (
              <p>{data}</p>
            ) : (
              <h1>
                Bonjour <span>{data.userInfos.firstName}</span>
              </h1>
            ))}
        </>
      )}
    </main>
  );
}

export default Dashboard;
