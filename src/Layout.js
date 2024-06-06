import { Outlet } from "react-router-dom";
import DataState from "./Context/dataState";
import Navbar from "./Components/navbar";

export default function Layout() {
  return (
    <DataState>
      <Navbar />
      <Outlet />
    </DataState>
  );
}