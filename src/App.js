// import logo from "./logo.svg";
import {HashRouter, Route} from 'react-router-dom'
import MainPage from './pages/MainPage/Main';

function App() {
  
  return (
    <HashRouter>
      <Route exact path="/" component={MainPage}/>
      <Route path="/aboutMe"/>
    </HashRouter>
  );
}

export default App;
