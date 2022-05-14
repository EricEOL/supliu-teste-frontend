import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route component={<Home />} path="/"/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;