import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import ViewContact from "./pages/ViewContact";

function App() {
  return (
    <div className="relative h-screen w-full text-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/users/:id" element={<ViewContact />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
