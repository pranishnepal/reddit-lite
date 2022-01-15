import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {Posts} from "./Components/Posts/Posts";
import {SubredditSideBar} from "./Components/SubredditSideBar/SubredditSideBar";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <div className="main-container">
            <Posts/>
            <SubredditSideBar/>
        </div>
    </div>
  );
}

export default App;
