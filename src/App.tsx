import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import PostDetail from "./pages/PostDetail";
import PostList from "./pages/PostList";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PostList />} />
          {/* 記事詳細ページ */}
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
