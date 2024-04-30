import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/pageNotFound";
import Contact from "./Pages/Contact";
import Layout from "./components/ui/Layout";
import Holiday from "./Pages/Holiday";
import LongTermRental from "./Pages/LongTermRental";
import PropertyManagement from "./Pages/PropertyManagement";
import Blog from "./Pages/Blog";
import BlogDetailPage from "./Pages/BlogDetailPage";
function App() {
  return (
    <>
      <Suspense fallback={<div>Loadding......</div>}>
        <Layout>
          <Routes>
            <Route path="/">
              <Route index element={<Home />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/holiday-letting" element={<Holiday />}></Route>
              <Route
                path="/long-term-rental"
                element={<LongTermRental />}
              ></Route>
              <Route
                path="/property-management"
                element={<PropertyManagement />}
              ></Route>
              <Route path="/blog" element={<Blog />}></Route>
              <Route path="/blog/:slug" element={<BlogDetailPage />}></Route>
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
