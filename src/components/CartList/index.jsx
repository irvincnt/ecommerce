import React, { Component } from 'react'
import Cart from '../Cart'

class CartList extends Component {
  constructor(props) {
    super(props)
  }

    render() {
      return(
      <div>
        <p>CartList</p>
        <Cart/>
      </div>
    )
  }
}

export default CartList
