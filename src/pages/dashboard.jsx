import useFetch from "../services/fetch";
import styles from "../styles/dashboard.module.scss";

function Dashboard() {
  const {
    data: personalData,
    loading: personalDataIsLoading,
    error: personalDataError,
  } = useFetch("user/12");

  const {
    data: activityData,
    loading: activityDataIsLoading,
    error: activityDataError,
  } = useFetch("user/12/activity");

  const {
    data: averageSessionData,
    loading: averageSessionDataIsLoading,
    error: averageSessionDataError,
  } = useFetch("user/12/average-sessions");

  const {
    data: performanceData,
    loading: performanceDataIsLoading,
    error: performanceDataError,
  } = useFetch("user/12/performance");

  return (
    <main className={styles.Dashboard}>
      {personalDataIsLoading ? (
        <p>Chargement</p>
      ) : (
        <>
          {personalData &&
            (personalDataError ? (
              <p>{personalData}</p>
            ) : (
              <h1>
                Bonjour <span>{personalData.userInfos.firstName}</span>
              </h1>
            ))}
        </>
      )}
    </main>
  );
}

export default Dashboard;
