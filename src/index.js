import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './container/Home';
import Playlist from './container/Playlist/Playlist';
import Dico from './container/Dico';
import Partoch from './container/Partoch/Partoch';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div className='App'>
            <Header />
            <div className="App-corps container">
                <Route exact path='/' component={Home} />
                <Route path='/playlist' component={Playlist} />
                <Route path='/dico' component={Dico} />
                <Route path='/partoch' component={Partoch} />
            </div>
            <Footer />
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
