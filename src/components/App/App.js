import React, { Component } from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'
import ProductList from '../ProductList'
import style from './App.css'

class App extends Component {
  constructor(props){
    super(props)
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
          },
          {
            id: 2,
            name: 'Sony Dsc-h300 20 Mp',
            picture: 'https://http2.mlstatic.com/camara-D_Q_NP_621585-MLM25970442208_092017-X.webp',
            price: 3938,
            datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
            marca: 'Sony',
            shipping: 'Envío gratis',
            status: 6,
          },
          {
          id: 3,
          name: 'Fujifilm X-t10 40.0 Mp',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_997939-MLM25733136676_072017-X.webp',
          price: 18999,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Fujifilm',
          shipping: 'Envío gratis',
          status: 2,
        },
        {
          id: 4,
          name: 'Reflex Canon Eos 30 ',
          picture: 'https://http2.mlstatic.com/camara-D_Q_NP_743505-MLM25028787002_082016-X.webp',
          price: 1000,
          datails: 'Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.',
          marca: 'Canon',
          shipping: 'Envío gratis',
          status: 6,
        }
        ]
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

export default App
