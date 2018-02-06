import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  onHandleChange = (e) => {
    let {dispatch} = this.props;
    dispatch({type: 'UPDATE_USERNAME', username: e.target.value})
  }

  render() {
    return (
      <div>
        <h1>{this.props.username}</h1>
        <input type="text"
                onChange={this.onHandleChange}
                value={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    userprofile: state.userprofile,
    repos: state.repos
  }
}

export default connect(mapStateToProps)(App);
