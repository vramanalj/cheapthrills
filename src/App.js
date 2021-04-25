import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/landing/Landing';
import ConcertsBrowser from './pages/concertsBrowser/ConcertsBrowser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/concerts">
            <ConcertsBrowser />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
