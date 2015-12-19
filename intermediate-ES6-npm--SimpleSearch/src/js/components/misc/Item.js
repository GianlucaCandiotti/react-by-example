import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.string,
  };

  render() {
  	const {
  		item
  	} = this.props;
  	
    return (
      <div>
      	{ item }
      </div>
    );
  }
}
