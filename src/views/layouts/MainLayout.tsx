import Header from "@/mod/Header";
import Footer from "@/mod/Footer";
import HomeTemplate from "@/temp/HomeTemplate";
import type { FC, ReactNode } from "react";
import styles from "./MainLayout.module.css";

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <div className={styles.mainLayoutRoot}>
      <Header />
      <HomeTemplate />
      <Footer />
    </div>
  );
};

export default MainLayout;
