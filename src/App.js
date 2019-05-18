import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import './style/App.scss';
import frame from './components/frame';
import preFrame from './components/preFrame';

function App() {
  
  return (
    <HashRouter>
      <>

        <header>
          <h1>My Creatives</h1>
          <NavLink to="/frame">
            <button className="btn  btn-active">
              Add
            </button>
          </NavLink>
        </header>

        <section className="app__body">
        <Route exact path="/" component={preFrame}/>
        <Route path="/frame" component={frame}/>
        </section>

      </>
    </HashRouter>
  );
}

export default App;
