import React, { Component } from 'react';

class ProductCategoryRow extends Component {
  render() {
    const category = this.props;
    return (
      <tr className="_tr">
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
