import React from 'react';
import {
BrowserRouter,
Route,
Redirect,
Switch,
} from 'react-router-dom';
import Results from './components/results';
import Details from './components/details';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
            <Route path="/results" component={Results} />
            <Route path="/details/:itemId" component={Details} />
            <Redirect from="/" to="/results" />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
