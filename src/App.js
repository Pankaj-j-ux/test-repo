/** @format */

import Auth from "./Pages/Auth/Auth.jsx";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import GroupExpand from "./Components/GroupExpand.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="dashboard/:gid" element={<GroupExpand />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
