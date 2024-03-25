import { FC } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection.tsx";
import Expertise from "./components/Expertise.tsx";
import Projects from "./components/Projects.tsx";
import Footer from "./components/Footer.tsx";

interface AppProps {}

const App: FC<AppProps> = () => {
  return <div className="">
    <Header/>
    <HeroSection />
    <Expertise />
    <Projects />
    <Footer /> 
  </div>;
};

export default App;
