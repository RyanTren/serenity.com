import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// ReactDOM.render(
//   <Router>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Router>,
//   document.getElementById('root')
// );

// import NewPage from './NewPage';

function test() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/music" component={MusicPage} />
      <Route path="/newpage" component={NewPage} />
    </Switch>
  );
}

export default test;