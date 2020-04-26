import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { HomePage } from './components/HomePage';
import { TopicPage } from './components/TopicPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/q/:topicId">
          <TopicPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
