import React, { Component } from 'react'
import Product from './Product'

class ProductList extends Component {
  constructor(props) {
    super(props)
  }

    render() {
      return(
        <Product
          key={this.props.id}
          name={this.props.name}
          picture={this.props.picture}
          price={this.props.price}
          datails={this.props.datails}
          marca={this.props.marca}
          shipping={this.props.shipping}
          status={this.props.status}
        />
      )
    }
}

export default ProductList
