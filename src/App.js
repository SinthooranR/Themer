// import logo from "./logo.svg";
import { HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import WelcomePage from './pages/Welcome/Welcome';
import MainPage from "./pages/MainPage/Main";
import AboutPage from "./pages/AboutPage/About";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/themer" component={MainPage} />
      <Route path="/aboutMe" component={AboutPage} />
    </HashRouter>
  );
}

export default App;
