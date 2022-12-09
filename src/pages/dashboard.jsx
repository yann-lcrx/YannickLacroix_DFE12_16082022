import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BarChartComponent from "../components/BarChart";
import DataCard from "../components/DataCard";
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
    keyData: {
      proteinCount: "",
      lipidCount: "",
      carbohydrateCount: "",
      calorieCount: "",
    },
    todayScore: null,
  });
  const [performance, setPerformance] = useState([]);
  const [averageSessions, setAverageSessions] = useState({
    averageSessions: {},
  });
  const [activity, setActivity] = useState([]);

  const { userId } = useParams();

  useEffect(() => {
    if (userId) {
      const parsedUserId = parseInt(userId);
      getInfo(parsedUserId).then((data) => setInfo(data));
      getPerformance(parsedUserId).then((data) => setPerformance(data));
      getAverageSessions(parsedUserId).then((data) => setAverageSessions(data));
      getActivity(parsedUserId).then((data) => setActivity(data));
    }
  }, [userId]);

  return (
    <main className={styles.Dashboard}>
      <h1>
        Bonjour <span>{info.userInfos.firstName}</span>
      </h1>
      <p className={styles.feedbackMessage}>
        Félicitations ! Vous avez explosé vos objectifs hier !
      </p>

      <div className={styles.userInfo}>
        <div className={styles.graphSection}>
          <div className={styles.mainInfo}>
            <BarChartComponent
              data={activity.data}
              bars={[
                { key: "kilogram", color: "#282d30" },
                { key: "calories", color: "#e60000" },
              ]}
            />
          </div>

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
          <DataCard
            figure={info.keyData.calorieCount}
            unit="KCal"
            type="Calories"
            iconSource="/calories-icon.svg"
          />
          <DataCard
            figure={info.keyData.proteinCount}
            unit="g"
            type="Protéines"
            iconSource="/protein-icon.svg"
          />
          <DataCard
            figure={info.keyData.carbohydrateCount}
            unit="g"
            type="Glucides"
            iconSource="/carbs-icon.svg"
          />
          <DataCard
            figure={info.keyData.lipidCount}
            unit="g"
            type="Lipides"
            iconSource="/fat-icon.svg"
          />
        </aside>
      </div>
    </main>
  );
}

export default Dashboard;
