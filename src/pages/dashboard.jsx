import BarDataChart from "../components/barChart";
import DailyActivity from "../components/barChart";
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
          {activityData && (
            <BarDataChart
              data={activityData.sessions}
              data1={{ key: "kilogram", color: "#282d30" }}
              data2={{ key: "calories", color: "#e60000" }}
            />
          )}
        </>
      )}
    </main>
  );
}

export default Dashboard;
