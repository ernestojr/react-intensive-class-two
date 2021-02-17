import React, { Component } from 'react';

import { getListPosts } from '../../api/post';

class ListPosts extends Component {
  state = {
    list: [],
    status: '',
  };

  componentDidMount() {
    console.log('ListPosts: componentDidMount');
    this.setState({ status: 'Loading...' });
    getListPosts()
      .then((data) => {
        this.setState({ status: 'Success Request', list: data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ status: 'Fail Request' });
      });
  }

  componentDidUpdate() {
    console.log('ListPosts: componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('ListPosts: componentWillUnmount');
  }

  render() {
    return (
      <div>
        <h2>List posts</h2>
        <p>Status: {this.state.status}</p>
        <ul>
          {
            this.state.list.map((item, i) => <li key={`${Date.now()}-${i}`}>{item.title}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default ListPosts;
