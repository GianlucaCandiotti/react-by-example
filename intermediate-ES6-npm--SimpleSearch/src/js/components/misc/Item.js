import React, {Component, PropTypes} from 'react';

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.string.isRequired,
  };

  render() {
  	const {
  		item
  	} = this.props;
  	
    return (
      <div>
      	{item}
      </div>
    );
  }
}
