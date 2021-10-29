import logo from './logo.svg';
import './App.css';
import ArticleList from './components/ArticleList';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Article from './components/Article';

const App = () => {

  return (
    <Router>
      <div className="App">
        <header className="header">
          <a href="http://localhost/itdocs/">
            <h1>Heading</h1>
            <h3>Subheading</h3>
          </a>
        </header>
        <main className="main-container">
          <div>
            <div>
                <Switch>
                  <Route path="/:slug">
                    <Article />
                  </Route>
                  <Route path="/">
                    <ArticleList />
                  </Route>
                </Switch>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
