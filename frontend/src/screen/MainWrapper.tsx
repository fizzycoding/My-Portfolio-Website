import AboutmeScreen from "./WelcomeScreen/AboutmeScreen";
import ContactPage from "./WelcomeScreen/ContactPage";
import MainScreen from "./WelcomeScreen/MainScreen";
import RecentProjects from "./WelcomeScreen/RecentProjects";

const MainWrapper = () => {
  return (
    <>
      <MainScreen />
      <AboutmeScreen />
      <RecentProjects />
      <ContactPage />
    </>
  );
};

export default MainWrapper;
