import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const TopicDetail = props => (
  <div>
    <h1>HATS PAGE: {props.match.params.topicId}</h1>
  </div>
)

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
      <Route exact path='/topic/:topicId' component={TopicDetail} />
    </div>
  );
}

export default App;
