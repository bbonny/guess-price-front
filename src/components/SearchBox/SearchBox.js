import React, { Component } from 'react';
import Input from 'react-bootstrap/lib/Input';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import $ from 'jquery';

import styles from './SearchBox.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class SearchBox extends Component {
  static getInitialState() {
    return {
      value: '',
      results: []
    };
  }

  getResults = (q) => {
    $.get(
      `/api/content?path=ss&q=${q}`,
      (results) => {
        this.setState({
          results: results.json
        });
      }
    );
  }

  handleChange = () => {
    this.getResults(this.refs.input.getValue());
    this.setState({
      value: this.refs.input.getValue()
    });
  }

  renderResults = (results) => {
    var list = [];
    results.forEach(result => {
      list.push(<Row>{result.label}</Row>);
    });
    return list;
  }

  render() {
    var results = '';
    if (this.state && this.state.results) {
      results = this.renderResults(this.state.results);
    }
    return (
      <div className="SearchBox">
        <Row className="show-grid">
          <Col xs={3} md={4}></Col>
          <Col xs={6} md={4}>
            <Input
              type="text"
              placeholder="Enter text"
              hasFeedback
              ref="input"
              groupClassName="group-class"
              labelClassName="label-class"
              onChange={this.handleChange} />
          </Col>
          <Col xs={3} md={4}></Col>
        </Row>
        <Row>
          <Col xs={4} md={5}></Col>
          <Col xs={5} md={3}>
            {results}
          </Col>
          <Col xs={3} md={2}></Col>
        </Row>
      </div>
    );
  }

}

export default SearchBox;
