import styles from "./styles/AppLayout.module.scss";

function AppLayout({ children }) {
  return (
    <div className={styles.AppLayout}>
      <header>
        <img src="logo.svg" alt="SportSee" />
        <nav>
          <ul>
            <li>Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
          </ul>
        </nav>
      </header>
      <div className={styles.horizontalView}>
        <aside>
          <nav>
            <ul>
              <li>
                <img src="icon-meditate.svg" alt="meditate" />
              </li>
              <li>
                <img src="icon-swim.svg" alt="swim" />
              </li>
              <li>
                <img src="icon-cycle.svg" alt="cycle" />
              </li>
              <li>
                <img src="icon-weight.svg" alt="weight" />
              </li>
            </ul>
          </nav>
          <p>Copyright, SportSee 2022</p>
        </aside>
        <div className={styles.view}>{children}</div>
      </div>
    </div>
  );
}

export default AppLayout;
