import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* ナビゲーションバー */}
      <Navbar />

      {/* 各ページのコンテンツ */}
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
