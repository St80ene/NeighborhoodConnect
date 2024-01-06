import { Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/AppRoute";
import routes from "./constants/routes";
import Home from "./components/Home";
// import withAuth from "./hoc/withAuth";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={routes.HOME.pathname} element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
