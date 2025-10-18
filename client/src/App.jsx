import React from "react";
import blogRoutes from "./routes/blogRoutes";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <>
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />

            {/* Blog routes */}
            {blogRoutes &&
              blogRoutes.map(({ path, element }) => (
                <Route key={path} path={`/blog/${path}`} element={element} />
              ))}

            <Route path="*" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </>
  );
};

export default App;
