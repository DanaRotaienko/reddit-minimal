import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    //useRouteMatch
} from "react-router-dom";
import './App.css';
import ROUTES from './Routes.js';
//import Comments from '../components/Comments.js';
import Posts from '../features/posts/Posts.js';
import Subreddits from '../features/subreddits/Subreddits';
import SearchTerm from '../features/searchTerm/SeacrhTerm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.home()} element={<SearchTerm />} />
        <Route path={ROUTES.home()} element={<Posts />} />
        <Route path={ROUTES.subreddits()} element={<Subreddits />} />
      </Routes>
    </Router>
  );
}

/*function PostsRoutes() {
  let match = useRouteMatch();

  return (
    // Routes for components with required id's
    <Routes>
      <Route path={`${match.path}/:creatorId`} element={<Posts/>}/>
      <Route path={`${match.path}/:commentId`} element={<Comments/>}/>
    </Routes>
  );
} */

export default App;
