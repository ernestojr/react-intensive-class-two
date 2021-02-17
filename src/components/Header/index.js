import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './header.css';

function Header(props) {
  const { isAuth } = props;
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/new-post">New Post</Link>
        </li>
        {
          isAuth === true ?
          <li>
            <a href="/">Sign out</a>
          </li>
          :
          <li>
            <a href="/">Sign in</a>
          </li>
        }
      </ul>
    </header>
  );
}

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}

export default Header;