import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import SearchBar from './components/searchBar/SearchBar';
import Home from './components/routes/home';
import Movies from './components/routes/movies';
import Podcast from './components/routes/podcast';
import Music from './components/routes/music';
import AudioBooks from './components/routes/audiobooks';
import MusicVideos from './components/routes/musicVideos';




function App() {
  return (
    <div className="App">
    <Router>
      <SearchBar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/podcast" exact component={Podcast} />
        <Route path="/music" exact component={Music} />
        <Route path="/audiobooks" exact component={AudioBooks} />
        <Route path="/musicVideos" exact component={MusicVideos} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;


