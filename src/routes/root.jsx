/* eslint-disable no-dupe-keys */
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    <Routes>
        <Route path="/" element={<App />} />
    </Routes>
  ])

export default router;