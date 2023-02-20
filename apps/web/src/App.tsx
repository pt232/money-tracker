import { Route, Routes } from "react-router-dom";
import Accounts from "./pages/Accounts";
import Analytics from "./pages/Analytics";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Overview />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
