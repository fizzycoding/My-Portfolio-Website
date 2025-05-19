import { Route, Routes } from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import MainWrapper from "./screen/MainWrapper";
import AboutWrapper from "./screen/AboutWrapper";
import ContactPage from "./screen/WelcomeScreen/ContactPage";
import ProjectWrapper from "./screen/ProjectWrapper";
import StackWrapper from "./screen/StackWrapper";

const App = () => {
  return (
    <div className="w-full dark:bg-darkbg">
      <TopNavBar />
      <Routes>
        <Route path="/" element={<MainWrapper />} />
        <Route path="/about" element={<AboutWrapper />} />
        <Route path="/projects" element={<ProjectWrapper />} />
        <Route path="/stack" element={<StackWrapper />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
