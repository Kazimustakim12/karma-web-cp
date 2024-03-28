import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/pageNotFound";
import Contact from "./Pages/Contact";
function App() {
  return (
    <>
      <Suspense fallback={<div>Loadding......</div>}>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
