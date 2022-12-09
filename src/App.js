import "./App.scss";
import AppLayout from "./AppLayout";
import AppRouter from "./router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </Router>
  );
}

export default App;
