import React, { Component } from 'react'
import { Card, Icon, Button, Grid } from 'semantic-ui-react'
import Cart from '../Cart'

class CartList extends Component {
  constructor(props) {
    super(props)
  }

    render() {
      return(
        <Card>
          <Card.Content>
            <Card.Header>
              Carrito de Compras
              <Icon size="large"  />
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Cart/>
          </Card.Content>
          <Card.Content extra>
            <Button
              basic
              color='green'
              compact
              size="medium"
              >Proceder al Pago (4 productos)
            </Button>
          </Card.Content>
        </Card>
    )
  }
}

export default CartList
