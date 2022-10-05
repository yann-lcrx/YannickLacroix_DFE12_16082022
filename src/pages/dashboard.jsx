import { useState } from "react";
import { useEffect } from "react";
import BarDataChart from "../components/barChart";
import {
  getActivity,
  getAverageSessions,
  getInfo,
  getPerformance,
} from "../services/apiManager";
import styles from "../styles/dashboard.module.scss";

function Dashboard() {
  const [info, setInfo] = useState({ userInfos: {} });
  const [performance, setPerformance] = useState({});
  const [averageSession, setAverageSession] = useState({});
  const [activity, setActivity] = useState({});

  useEffect(() => {
    getInfo(12).then((data) => setInfo(data));
    getPerformance(12).then((data) => setPerformance(data));
    getAverageSessions(12).then((data) => setAverageSession(data));
    getActivity(12).then((data) => setActivity(data));
  }, []);

  return (
    <main className={styles.Dashboard}>
      {info.length === 0 ? (
        <p>Chargement</p>
      ) : (
        <>
          <h1>
            Bonjour <span>{info.userInfos.firstName}</span>
          </h1>

          <BarDataChart
            data={activity.sessions}
            data1={{ key: "kilogram", color: "#282d30" }}
            data2={{ key: "calories", color: "#e60000" }}
          />
        </>
      )}
    </main>
  );
}

export default Dashboard;