/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import SearchBox from '../SearchBox';

@withContext
@withStyles(styles)
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBox />
      </div>
    )
  }

}

export default App;
