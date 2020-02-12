import React from 'react';
import Header from './components/Header';
import About from './pages/About';
import Experience from './pages/Experience';
import Links from './pages/Links';
import Styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import './index.css';

const Styles = Styled.div`
  .content{
    position: absolute;
    max-width:950px;

    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
  
  }
  .content-fill{
    height:100%;
  }

`;

function App() {
  return (
    <Styles>
      <Router>
        <Route render={({location}) => (
            <div className="App">
              <Header/>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames = 'fade'
                >
                  <div className = 'content'>
                    <Switch location = {location}>
                      <Route path = "/" exact component={About} />
                      <Route path = "/about" exact component={About}/>
                      <Route path = "/experience" component = {Experience}/>
                      <Route path = "/links" component = {Links}/>
                      <Route component = {About}/>
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>    
            </div>
        )} />
      </Router>
    </Styles>
      
  );
}

export default App;
