import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    useRouteMatch
} from "react-router-dom";
import './App.css';
import ROUTES from './Routes';
import { Comments } from '../components/Comments';
import { Posts } from '../components/Posts';
import { Subreddits } from '../components/Subreddits';
import { SearchTerm } from '../features/searchTerm/SearchTerm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.searchBar()} element={<SearchTerm />} />
        <Route path={ROUTES.posts()} element={<Posts />} />
        <Route path={ROUTES.subreddits()} element={<Subreddits />} />
      </Routes>
    </BrowserRouter>
  );
}

function PostsRoutes() {
  let match = useRouteMatch();

  return (
    // Routes for components with required id's
    <Routes>
      <Route path={`${match.path}/:creatorId`} element={<Posts/>}/>
      <Route path={`${match.path}/:commentId`} element={<Comments/>}/>
    </Routes>
  );
}

export default App;
