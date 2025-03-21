import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Flight from "./Components/Flight/Flight.jsx";
import Hotel from "./Components/Hotel/Hotel.jsx";
import Packages from "./Components/Packages/Packages.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Flight />} />
        <Route path="/Flights" element={<Flight />} />
        <Route path="/Hotels" element={<Hotel />} />
        <Route path="/Packages" element={<Packages />} />
      </Route>
    </>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
