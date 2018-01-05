import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'
import ProductList from '../ProductList'
import style from './App.css'

class App extends Component {
  this.state = {
      products: [
        {
          id: 1,
          name: 'Nikon D5500 24.2 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_100101-MLM20255371968_032015-X.webp',
          price: 12346,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Nikon',
          shipping: 'Envío gratis',
          status: 5,
        }
    }

  render() {
    return (
      <Container className={style.root}>
        <Header as='h3' block>
          E-commerce
        </Header>
        <Grid>
          <Grid.Column width={10}>
            <ProductList
              products={this.state.products}
            />
          </Grid.Column>
          <Grid.Column width={6}>
            CartList
          </Grid.Column>
        </Grid>
      </Container>

    );
  }
}

export default App;
