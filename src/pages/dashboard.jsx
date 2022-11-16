import { useState, useEffect } from "react";
import BarChartComponent from "../components/BarChart";
import LineChartComponent from "../components/LineChart";
import RadarChartComponent from "../components/RadarChart";
import RadialBarChartComponent from "../components/RadialBarChart";
import {
  getActivity,
  getAverageSessions,
  getInfo,
  getPerformance,
} from "../services/apiManager";
import styles from "../styles/dashboard.module.scss";

/**
 * Dashboard page with all the user data charts
 * @returns a React Dashboard page
 */
function Dashboard() {
  const [info, setInfo] = useState({
    userInfos: {},
    keyData: {},
    todayScore: null,
  });
  const [performance, setPerformance] = useState([]);
  const [averageSessions, setAverageSessions] = useState({
    averageSessions: {},
  });
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    getInfo(12).then((data) => setInfo(data));
    getPerformance(12).then((data) => setPerformance(data));
    getAverageSessions(12).then((data) => setAverageSessions(data));
    getActivity(12).then((data) => setActivity(data));
  }, []);

  return (
    <main className={styles.Dashboard}>
      <h1>
        Bonjour <span>{info.userInfos.firstName}</span>
      </h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier !</p>

      <div className={styles.userInfo}>
        <div className={styles.graphSection}>
          <BarChartComponent
            data={activity.data}
            bars={[
              { key: "kilogram", color: "#282d30" },
              { key: "calories", color: "#e60000" },
            ]}
          />

          <div className={styles.secondaryInfo}>
            <LineChartComponent
              data={averageSessions.data}
              dataKey="sessionLength"
            />

            <RadarChartComponent data={performance.data} />

            <RadialBarChartComponent
              data={[
                { todayScore: 1, fill: "transparent" },
                { ...info, fill: "#ff0000" },
              ]}
            />
          </div>
        </div>

        <aside className={styles.nutritionData}>
          <div className={styles.dataCard}>
            <img src="/calories-icon.svg" alt="calories" />
            <div className={styles.dataCard__data}>
              <p className={styles.figure}>{info.keyData.calorieCount}kCal</p>
              <p className={styles.nutrient}>Calories</p>
            </div>
          </div>
          <div className={styles.dataCard}>
            <img src="/protein-icon.svg" alt="protéines" />
            <div>
              <p className={styles.figure}>{info.keyData.proteinCount}g</p>
              <p className={styles.nutrient}>Protéines</p>
            </div>
          </div>
          <div className={styles.dataCard}>
            <img src="/carbs-icon.svg" alt="glucides" />
            <div>
              <p className={styles.figure}>{info.keyData.carbohydrateCount}g</p>
              <p className={styles.nutrient}>Glucides</p>
            </div>
          </div>
          <div className={styles.dataCard}>
            <img src="/fat-icon.svg" alt="lipides" />
            <div>
              <p className={styles.figure}>{info.keyData.lipidCount}g</p>
              <p className={styles.nutrient}>Lipides</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Dashboard;
