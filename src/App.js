import './App.css';
import Dashboard from './components/Dashboard'
import Header from './components/layout/Header';
import  { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import UpdateProject from './components/project/UpdateProject';
import "bootstrap/dist/css/bootstrap.min.css";
import AddProject from './components/project/AddProject';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
          <Route exact path="/updateProject/:id" component={UpdateProject} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
