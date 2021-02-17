import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../components/Header';

import Home from './Home';
import ListPosts from './ListPosts';
import NewPost from './NewPost';

export default function Wrapper() {
  return (
    <Router>
      <Header isAuth={true} />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <ListPosts />
        </Route>
        <Route path="/new-post">
          <NewPost />
        </Route>
      </Switch>
    </Router>
  );
}
